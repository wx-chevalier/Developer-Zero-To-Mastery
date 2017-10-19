






- [Html to pdf converter in nodejs](https://github.com/marcbachmann/node-html-pdf?utm_source=mybridge&utm_medium=web&utm_campaign=read_more)

# DOCX2PDF


将DOCX文档转化为PDF是项目中常见的需求之一，目前主流的方法可以分为两大类，一类是利用各种Office应用进行转换，譬如Microsoft Office、WPS以及LiberOffice，另一种是利用各种语言提供的对于Office文档读取的接口（譬如Apache POI）然后使用专门的PDFGenerator库，譬如IText进行PDF构建。总的来说，从样式上利用Office应用可以保证较好的样式，不过相对而言效率会比较低。其中Microsoft Office涉及版权，不可轻易使用（笔者所在公司就被抓包了），WPS目前使用比较广泛，不过存在超链接截断问题，即超过256个字符的超链接会被截断，LiberOffice的样式排版相对比较随意。而利用POI接口进行读取与生成的方式性能较好，适用于对于格式要求不是很高的情况。另外还有一些封装好的在线工具或者命令行工具，譬如[docx2pdf](https://github.com/casatir/docx2pdf)与[OfficeToPDF](http://officetopdf.codeplex.com/releases/view/620406)。


## MicroSoft Office


本部分的核心代码如下，全部代码参考[这里](https://github.com/wxyyxc1992/WXJavaToolkits/blob/master/code/src/main/java/wx/toolkits/storage/pdf/converter/docx/OfficeConverter.java): 
```private ActiveXComponent oleComponent = null;
private Dispatch activeDoc = null;
private final static String APP_ID = "Word.Application";

// Constants that map onto Word's WdSaveOptions enumeration and that
// may be passed to the close(int) method
public static final int DO_NOT_SAVE_CHANGES = 0;
public static final int PROMPT_TO_SAVE_CHANGES = -2;
public static final int SAVE_CHANGES = -1;

// These constant values determine whether or not tha application
// instance will be displyed on the users screen or not.
public static final boolean VISIBLE = true;
public static final boolean HIDDEN = false;

/**
 * Create a new instance of the JacobWordSearch class using the following
 * parameters.
 *
 * @param visibility A primitive boolean whose value will determine whether
 *                   or not the Word application will be visible to the user. Pass true
 *                   to display Word, false otherwise.
 */
public OfficeConverter(boolean visibility) {
    this.oleComponent = new ActiveXComponent(OfficeConverter.APP_ID);
    this.oleComponent.setProperty("Visible", new Variant(visibility));
}

/**
 * Open ana existing Word document.
 *
 * @param docName An instance of the String class that encapsulates the
 *                path to and name of a valid Word file. Note that there are a few
 *                limitations applying to the format of this String; it must specify
 *                the absolute path to the file and it must not use the single forward
 *                slash to specify the path separator.
 */
public void openDoc(String docName) {
    Dispatch disp = null;
    Variant var = null;
    // First get a Dispatch object referencing the Documents collection - for
    // collections, think of ArrayLists of objects.
    var = Dispatch.get(this.oleComponent, "Documents");
    disp = var.getDispatch();
    // Now call the Open method on the Documents collection Dispatch object
    // to both open the file and add it to the collection. It would be possible
    // to open a series of files and access each from the Documents collection
    // but for this example, it is simpler to store a reference to the
    // active document in a private instance variable.
    var = Dispatch.call(disp, "Open", docName);
    this.activeDoc = var.getDispatch();
}

/**
 * There is more than one way to convert the document into PDF format, you
 * can either explicitly use a FileConvertor object or call the
 * ExportAsFixedFormat method on the active document. This method opts for
 * the latter and calls the ExportAsFixedFormat method passing the name
 * of the file along with the integer value of 17. This value maps onto one
 * of Word's constants called wdExportFormatPDF and causes the application
 * to convert the file into PDF format. If you wanted to do so, for testing
 * purposes, you could add another value to the args array, a Boolean value
 * of true. This would open the newly converted document automatically.
 *
 * @param filename
 */
public void publishAsPDF(String filename) {
    // The code to expoort as a PDF is 17
    //Object args = new Object{filename, new Integer(17), new Boolean(true)};
    Object args = new Object {
        filename, new Integer(17)
    } ;
    Dispatch.call(this.activeDoc, "ExportAsFixedFormat", args);
}

/**
 * Called to close the active document. Note that this method simply
 * calls the overloaded closeDoc(int) method passing the value 0 which
 * instructs Word to close the document and discard any changes that may
 * have been made since the document was opened or edited.
 */
public void closeDoc() {
    this.closeDoc(JacobWordSearch.DO_NOT_SAVE_CHANGES);
}

/**
 * Called to close the active document. It is possible with this overloaded
 * version of the close() method to specify what should happen if the user
 * has made changes to the document that have not been saved. There are three
 * possible value defined by the following manifest constants;
 * DO_NOT_SAVE_CHANGES - Close the document and discard any changes
 * the user may have made.
 * PROMPT_TO_SAVE_CHANGES - Display a prompt to the user asking them
 * how to proceed.
 * SAVE_CHANGES - Save the changes the user has made to the document.
 *
 * @param saveOption A primitive integer whose value indicates how the close
 *                   operation should proceed if the user has made changes to the active
 *                   document. Note that no checks are made on the value passed to
 *                   this argument.
 */
public void closeDoc(int saveOption) {
    Object args = {new Integer(saveOption)};
    Dispatch.call(this.activeDoc, "Close", args);
}

/**
 * Called once processing has completed in order to close down the instance
 * of Word.
 */
public void quit() {
    Dispatch.call(this.oleComponent, "Quit");
}
```


## WPS
> 
- [Java调用WPS或pdfcreator的com接口实现doc转pdf](http://www.programgo.com/article/57122675725/) 


本文的核心代码如下，完整代码查看[这里](https://github.com/wxyyxc1992/WXJavaToolkits/blob/master/code/src/main/java/wx/toolkits/storage/pdf/converter/docx/WPSConverter.java): 


```        @Override
        public boolean convert(String word, String pdf) {
            File pdfFile = new File(pdf);
            File wordFile = new File(word);
            boolean convertSuccessfully = false;

            ActiveXComponent wps = null;
            ActiveXComponent doc = null;


            try {
                wps = new ActiveXComponent("KWPS.Application");

//                Dispatch docs = wps.getProperty("Documents").toDispatch();
//                Dispatch d = Dispatch.call(docs, "Open", wordFile.getAbsolutePath(), false, true).toDispatch();
//                Dispatch.call(d, "SaveAs", pdfFile.getAbsolutePath(), 17);
//                Dispatch.call(d, "Close", false);

                doc = wps.invokeGetComponent("Documents")
                        .invokeGetComponent("Open", new Variant(wordFile.getAbsolutePath()));

                try {
                    doc.invoke("SaveAs",
                            new Variant(new File("C:\\Users\\lotuc\\Documents\\mmm.pdf").getAbsolutePath()),
                            new Variant(17));
                    convertSuccessfully = true;
                } catch (Exception e) {
                    logger.warning("生成PDF失败");
                    e.printStackTrace();
                }

                File saveAsFile = new File("C:\\Users\\lotuc\\Documents\\saveasfile.doc");
                try {
                    doc.invoke("SaveAs", saveAsFile.getAbsolutePath());
                    logger.info("成功另存为" + saveAsFile.getAbsolutePath());
                } catch (Exception e) {
                    logger.info("另存为" + saveAsFile.getAbsolutePath() + "失败");
                    e.printStackTrace();
                }
            } finally {
                if (doc == null) {
                    logger.info("打开文件 " + wordFile.getAbsolutePath() + " 失败");
                } else {
                    try {
                        logger.info("释放文件 " + wordFile.getAbsolutePath());
                        doc.invoke("Close");
                        doc.safeRelease();
                    } catch (Exception e1) {
                        logger.info("释放文件 " + wordFile.getAbsolutePath() + " 失败");
                    }
                }

                if (wps == null) {
                    logger.info("加载 WPS 控件失败");
                } else {
                    try {
                        logger.info("释放 WPS 控件");
                        wps.invoke("Quit");
                        wps.safeRelease();
                    } catch (Exception e1) {
                        logger.info("释放 WPS 控件失败");
                    }
                }
            }

            return convertSuccessfully;
        }
```


## LiberOffice
> 
- [Convert Microsoft Word to PDF - using Java and LibreOffice (UNO API)](http://www.codeproject.com/Tips/988667/Convert-Microsoft-Word-to-PDF-using-Java-and-Libre) 


LiberOffice本身提供了一个命令行工具进行转换，在你安装好了LiberOffice之后
```
/usr/local/bin/soffice --convert-to pdf:writer_pdf_Export /Users/lotuc/Downloads/test.doc
```
如果有打开的libreoffice实例, 要穿入env选项指定一个工作目录
```
/usr/local/bin/soffice "-env:UserInstallation=file:///tmp/LibreOffice_Conversion_abc" --convert-to pdf:writer_pdf_Export /Users/lotuc/Downloads/test.doc
```


首先我们需要安装好LiberOffice，然后将依赖的Jar包添加到classpath中:
```Install Libre Office

Create a Java project in your favorite editor and add these to your class path:
  [Libre Office Dir]/URE/java/juh.jar
  [Libre Office Dir]/URE/java/jurt.jar
  [Libre Office Dir]/URE/java/ridl.jar
  [Libre Office Dir]/program/classes/unoil.jar
```
然后我们需要启动一个LiberOffice进程:
```import java.util.Date;
import java.io.File;
import com.sun.star.beans.PropertyValue;
import com.sun.star.comp.helper.Bootstrap;
import com.sun.star.frame.XComponentLoader;
import com.sun.star.frame.XDesktop;
import com.sun.star.frame.XStorable;
import com.sun.star.lang.XComponent;
import com.sun.star.lang.XMultiComponentFactory;
import com.sun.star.text.XTextDocument;
import com.sun.star.uno.UnoRuntime;
import com.sun.star.uno.XComponentContext;
import com.sun.star.util.XReplaceDescriptor;
import com.sun.star.util.XReplaceable;

public class MailMergeExample {

public static void main(String[] args) throws Exception {

 // Initialise
 XComponentContext xContext = Bootstrap.bootstrap();

 XMultiComponentFactory xMCF = xContext.getServiceManager();
 
 Object oDesktop = xMCF.createInstanceWithContext(
      "com.sun.star.frame.Desktop", xContext);
 
 XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
      XDesktop.class, oDesktop);
```


接下来我们需要加载目标Doc文档:
```// Load the Document
String workingDir = "C:/projects/";
String myTemplate = "letterTemplate.doc";

if (!new File(workingDir + myTemplate).canRead()) {
 throw new RuntimeException("Cannot load template:" + new File(workingDir + myTemplate));
}

XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
 .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

String sUrl = "file:///" + workingDir + myTemplate;

PropertyValue[] propertyValues = new PropertyValue[0];

propertyValues = new PropertyValue[1];
propertyValues[0] = new PropertyValue();
propertyValues[0].Name = "Hidden";
propertyValues[0].Value = new Boolean(true);

XComponent xComp = xCompLoader.loadComponentFromURL(
 sUrl, "_blank", 0, propertyValues);
```
![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2016/8/2/letterTemplateHighlighted.png) 
然后我们可以使用如下方式对内容进行替换:
```// Search and replace
XReplaceDescriptor xReplaceDescr = null;
XReplaceable xReplaceable = null;

XTextDocument xTextDocument = (XTextDocument) UnoRuntime
  .queryInterface(XTextDocument.class, xComp);

xReplaceable = (XReplaceable) UnoRuntime
  .queryInterface(XReplaceable.class, xTextDocument);

xReplaceDescr = (XReplaceDescriptor) xReplaceable
  .createReplaceDescriptor();

// mail merge the date
xReplaceDescr.setSearchString("<date>");
xReplaceDescr.setReplaceString(new Date().toString());
xReplaceable.replaceAll(xReplaceDescr);

// mail merge the addressee
xReplaceDescr.setSearchString("<addressee>");
xReplaceDescr.setReplaceString("Best Friend");
xReplaceable.replaceAll(xReplaceDescr);

// mail merge the signatory
xReplaceDescr.setSearchString("<signatory>");
xReplaceDescr.setReplaceString("Your New Boss");
xReplaceable.replaceAll(xReplaceDescr);
```
然后可以输出到PDF中:
```// save as a PDF
XStorable xStorable = (XStorable) UnoRuntime
  .queryInterface(XStorable.class, xComp);

propertyValues = new PropertyValue[2];
propertyValues[0] = new PropertyValue();
propertyValues[0].Name = "Overwrite";
propertyValues[0].Value = new Boolean(true);
propertyValues[1] = new PropertyValue();
propertyValues[1].Name = "FilterName";
propertyValues[1].Value = "writer_pdf_Export";

// Appending the favoured extension to the origin document name
String myResult = workingDir + "letterOutput.pdf";
xStorable.storeToURL("file:///" + myResult, propertyValues);

System.out.println("Saved " + myResult);
```


![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2016/8/2/letterOutputHighlighted.png) 




## [xdocreport](https://github.com/opensagres/xdocreport) 


本文的核心代码如下，完整代码查看[这里](https://github.com/wxyyxc1992/WXJavaToolkits/blob/master/code/src/main/java/wx/toolkits/storage/pdf/converter/docx/POIConverter.java):
 ```/**
 * @param inpuFile 输入的文件流
 * @param outFile  输出的文件对象
 * @return
 * @function 利用Apache POI从输入的文件中生成PDF文件
 */
@SneakyThrows
public static void convertWithPOI(InputStream inpuFile, File outFile) {

    //从输入的文件流创建对象
    XWPFDocument document = new XWPFDocument(inpuFile);

    //创建PDF选项
    PdfOptions pdfOptions = PdfOptions.create();//.fontEncoding("windows-1250")

    //为输出文件创建目录
    outFile.getParentFile().mkdirs();

    //执行PDF转化
    PdfConverter.getInstance().convert(document, new FileOutputStream(outFile), pdfOptions);

}
/**
 * @param inpuFile
 * @param outFile
 * @param renderParams
 * @function 先将渲染参数填入模板DOCX文件然后生成PDF
 */
@SneakyThrows
public static void convertFromTemplateWithFreemarker(InputStream inpuFile, File outFile, Map<String, Object> renderParams) {

    //创建Report实例
    IXDocReport report = XDocReportRegistry.getRegistry().loadReport(
            inpuFile, TemplateEngineKind.Freemarker);

    //创建上下文
    IContext context = report.createContext();

    //填入渲染参数
    renderParams.forEach((s, o) -> {
        context.put(s, o);
    });

    //创建输出流
    outFile.getParentFile().mkdirs();

    //创建转化参数
    Options options = Options.getTo(ConverterTypeTo.PDF).via(
            ConverterTypeVia.XWPF);

    //执行转化过程
    report.convert(context, options, new FileOutputStream(outFile));
}
```


# HTML2PDF
[athenapdf](https://github.com/arachnys/athenapdf)
[wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf)