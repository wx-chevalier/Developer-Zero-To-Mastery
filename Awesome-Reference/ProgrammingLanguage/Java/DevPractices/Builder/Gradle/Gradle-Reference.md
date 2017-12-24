[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 
 
 
 
 


 


 


 



# Gradle 学习与实践资料索引



- [Gradle 官方用户指南](https://docs.gradle.org/current/userguide/userguide.html)

- [How to decrease your Gradle build time by 65%?](http://6me.us/QpxUcN) 

- [Gradle: How to manage dependencies](http://6me.us/RGl3) 


gradle 获取当前运行目录


- https://stackoverflow.com/questions/16729293/gradle-get-folder-from-which-gradle-was-executed


System.getProperty("user.dir")
gradle run: Application插件


apply plugin: 'application'
mainClassName=''
applicationDefaultJvmArgs=[]


gradle 添加本地 jar 依赖
compile files("lib/a.jar", "lib/b.jar", ...)
注意: 如果项目包含子项目, 需要使用觉得路径:
compile files("$rootProject.projectDir/lib/a.jar")


还可以通过添加本地maven库的方式添加jar文件
repositories {
    maven {url "file://" + rootProject.projectDir.toString() + "/lib"}
    // 其他仓库
}


Jar文件存放位置
lib/group/to/package/NAME/VERSION/NAME-VERSION.jar


形如 ojdbc5-11.2.0.3.jar 的jar文件添加到以下目录即可
lib/com/oracle/ojdbc5/11.2.0.3/
可以使用
compile group: "com.oracle", name: "ojdbc5", version: "11.2.0.3"
添加该依赖


maven项目转换为gradle项目
gradle init


gradle 排除(exclude)一些依赖
compile (...) {
    exclude module: "" // artifact name
    exclude group: ""  // group
    exclude: group: "", module: "", // group + artifact
}


配置目录结构
sourceSets {
    main {
        java {
            srcDir "src/main/java"
            srcDir "src/main/generated" // 添加多个
        }
   resources {
       srcDir "src/main/resources"
   }
}
}


或者这样


sourceSets {
    main.java.srcDirs = [...]
    main.resources.srcDirs = [...]
}


拷贝资源时, 排除空目录
https://discuss.gradle.org/t/excluding-empty-directories-from-sourcesets/4616
sourceSets.all {
  tasks[processResourcesTaskName].includeEmptyDirs = false
}


// Or even:


tasks.withType(Copy) {
  includeEmptyDirs = false
}


encode HTML entity(编码HTML实体)


import static groovy.xml.XmlUtil.escapeXml
escapeXml("&")  // -> "&amp;"


gradle 3.0 兼容性配置


- https://discuss.gradle.org/t/3-0-m1-springboot-1-3-5-project-fails-to-build-aborts-with-an-error-message-on-creation-of-dependencymanagementreporttask/17999
- https://github.com/spring-gradle-plugins/dependency-management-plugin/commit/60e325b4face8e6ea62945892f9d6c5c6172e3ef


plugins {
    id "io.spring.dependency-management" version "0.6.0.RELEASE"
}


    compileJava.options*.compilerArgs = [
//            "-Xlint:serial", "-Xlint:varargs", "-Xlint:cast", "-Xlint:classfile",
//            "-Xlint:dep-ann", "-Xlint:divzero", "-Xlint:empty", "-Xlint:finally",
//            "-Xlint:overrides", "-Xlint:path", "-Xlint:processing", "-Xlint:static",
//            "-Xlint:try", "-Xlint:fallthrough", "-Xlint:rawtypes", "-Xlint:deprecation",
//            "-Xlint:unchecked", "-Xlint:-options", "-Werror"
    ]
    compileTestJava.options*.compilerArgs = [
//            "-Xlint:serial", "-Xlint:-varargs", "-Xlint:cast", "-Xlint:classfile",
//            "-Xlint:dep-ann", "-Xlint:divzero", "-Xlint:empty", "-Xlint:finally",
//            "-Xlint:overrides", "-Xlint:path", "-Xlint:processing", "-Xlint:static",
//            "-Xlint:try", "-Xlint:-fallthrough", "-Xlint:-rawtypes", "-Xlint:-deprecation",
//            "-Xlint:-unchecked", "-Xlint:-options"
    ]


使用其它子项目的资源
configure(project('dc-service')) {
    apply from: 'service.gradle'


    // 测试时需要
    sourceSets.test.resources.srcDir "../dc-db/src/main/resources"


    dependencies {
        compile("com.fasterxml.jackson.core:jackson-core:${jacksonVersion}")
        compile("org.codehaus.jackson:jackson-mapper-asl:${jacksonMapperAslVersion}")
        compile(project(':dc-dao'))
    }
}