<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  

- [Advanced:高级内容](#advanced%E9%AB%98%E7%BA%A7%E5%86%85%E5%AE%B9)
  - [Architect:架构设计](#architect%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1)
    - [模块化与组件化](#%E6%A8%A1%E5%9D%97%E5%8C%96%E4%B8%8E%E7%BB%84%E4%BB%B6%E5%8C%96)
      - [功能模块化](#%E5%8A%9F%E8%83%BD%E6%A8%A1%E5%9D%97%E5%8C%96)
      - [界面组件化](#%E7%95%8C%E9%9D%A2%E7%BB%84%E4%BB%B6%E5%8C%96)
    - [MVC](#mvc)
    - [MVP](#mvp)
    - [MVVM](#mvvm)
    - [Reactive](#reactive)
  - [Core:框架底层原理分析](#core%E6%A1%86%E6%9E%B6%E5%BA%95%E5%B1%82%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90)
- [Language:框架常用语言](#language%E6%A1%86%E6%9E%B6%E5%B8%B8%E7%94%A8%E8%AF%AD%E8%A8%80)
  - [Objective-C](#objective-c)
  - [Swift](#swift)
  - [Dart](#dart)
  - [Java](#java)
- [Network(网络)](#network%E7%BD%91%E7%BB%9C)
  - [NetworkManagement(网络管理)](#networkmanagement%E7%BD%91%E7%BB%9C%E7%AE%A1%E7%90%86)
    - [Reachability(网络可达性判断)](#reachability%E7%BD%91%E7%BB%9C%E5%8F%AF%E8%BE%BE%E6%80%A7%E5%88%A4%E6%96%AD)
  - [Socket](#socket)
  - [HttpClient](#httpclient)
    - [Request Manage(请求管理)](#request-manage%E8%AF%B7%E6%B1%82%E7%AE%A1%E7%90%86)
    - [Parallel Request(并发请求)](#parallel-request%E5%B9%B6%E5%8F%91%E8%AF%B7%E6%B1%82)
    - [HTTPStubs/MockServer(本地伪装网络请求)](#httpstubsmockserver%E6%9C%AC%E5%9C%B0%E4%BC%AA%E8%A3%85%E7%BD%91%E7%BB%9C%E8%AF%B7%E6%B1%82)
  - [FileTransfer(文件传输)](#filetransfer%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93)
    - [Uploads(上传)](#uploads%E4%B8%8A%E4%BC%A0)
      - [Widgets](#widgets)
    - [Download(下载)](#download%E4%B8%8B%E8%BD%BD)
  - [Serialization(序列化)](#serialization%E5%BA%8F%E5%88%97%E5%8C%96)
    - [JSON](#json)
      - [JSON Object Mapper(JSON对象映射)](#json-object-mapperjson%E5%AF%B9%E8%B1%A1%E6%98%A0%E5%B0%84)
    - [FlatBuffer](#flatbuffer)
    - [MsgPack](#msgpack)
- [Storage(存储)](#storage%E5%AD%98%E5%82%A8)
  - [DataBase(数据库)](#database%E6%95%B0%E6%8D%AE%E5%BA%93)
    - [CoreData](#coredata)
    - [SQLite](#sqlite)
    - [Realm](#realm)
  - [File(文件)](#file%E6%96%87%E4%BB%B6)
    - [Props(配置文件)](#props%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
    - [Resources(资源文件)](#resources%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6)
    - [Widgets(插件)](#widgets%E6%8F%92%E4%BB%B6)
      - [FileBrowser(文件浏览器)](#filebrowser%E6%96%87%E4%BB%B6%E6%B5%8F%E8%A7%88%E5%99%A8)
  - [Cache(缓存)](#cache%E7%BC%93%E5%AD%98)
- [SysProc(系统与进程)](#sysproc%E7%B3%BB%E7%BB%9F%E4%B8%8E%E8%BF%9B%E7%A8%8B)
  - [Components Communication(组件通信)](#components-communication%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1)
  - [Concurrence](#concurrence)
    - [Thread(线程)](#thread%E7%BA%BF%E7%A8%8B)
    - [Promise](#promise)
  - [EventBus](#eventbus)
  - [Service(服务)](#service%E6%9C%8D%E5%8A%A1)
  - [RPC(远程与本地调用)](#rpc%E8%BF%9C%E7%A8%8B%E4%B8%8E%E6%9C%AC%E5%9C%B0%E8%B0%83%E7%94%A8)
- [TestRelease(测试与打包发布)](#testrelease%E6%B5%8B%E8%AF%95%E4%B8%8E%E6%89%93%E5%8C%85%E5%8F%91%E5%B8%83)
  - [Debug(调试与记录)](#debug%E8%B0%83%E8%AF%95%E4%B8%8E%E8%AE%B0%E5%BD%95)
    - [Log(日志)](#log%E6%97%A5%E5%BF%97)
    - [Monitor(线程与Crash监控)](#monitor%E7%BA%BF%E7%A8%8B%E4%B8%8Ecrash%E7%9B%91%E6%8E%A7)
  - [Release(发布)](#release%E5%8F%91%E5%B8%83)
    - [Signature(Android)](#signatureandroid)
    - [Ad-hoc/AppStore(iOS)](#ad-hocappstoreios)
    - [Confusion(混淆与加密)](#confusion%E6%B7%B7%E6%B7%86%E4%B8%8E%E5%8A%A0%E5%AF%86)
  - [Test](#test)
    - [Unit Test(单元测试)](#unit-test%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)
    - [UI Test(界面测试)](#ui-test%E7%95%8C%E9%9D%A2%E6%B5%8B%E8%AF%95)
    - [External Test(第三方测试)](#external-test%E7%AC%AC%E4%B8%89%E6%96%B9%E6%B5%8B%E8%AF%95)
  - [Optimization(优化)](#optimization%E4%BC%98%E5%8C%96)
  - [Plugin & Dynamic Patch(插件化与动态更新)](#plugin-&-dynamic-patch%E6%8F%92%E4%BB%B6%E5%8C%96%E4%B8%8E%E5%8A%A8%E6%80%81%E6%9B%B4%E6%96%B0)
  - [APM(应用状态追踪与评分等)](#apm%E5%BA%94%E7%94%A8%E7%8A%B6%E6%80%81%E8%BF%BD%E8%B8%AA%E4%B8%8E%E8%AF%84%E5%88%86%E7%AD%89)
    - [Rating(在AppStore或者各大应用市场中的应用评分)](#rating%E5%9C%A8appstore%E6%88%96%E8%80%85%E5%90%84%E5%A4%A7%E5%BA%94%E7%94%A8%E5%B8%82%E5%9C%BA%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8%E8%AF%84%E5%88%86)
    - [Analytics](#analytics)
    - [Crash Report(崩溃反馈)](#crash-report%E5%B4%A9%E6%BA%83%E5%8F%8D%E9%A6%88)
- [UI](#ui)
  - [UI.md(界面呈现的基本原理)](#uimd%E7%95%8C%E9%9D%A2%E5%91%88%E7%8E%B0%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86)
  - [Components(基本组件)](#components%E5%9F%BA%E6%9C%AC%E7%BB%84%E4%BB%B6)
    - [Layout(布局) & Position(定位)](#layout%E5%B8%83%E5%B1%80-&-position%E5%AE%9A%E4%BD%8D)
      - [Layout Constraints](#layout-constraints)
      - [Position:定位方式](#position%E5%AE%9A%E4%BD%8D%E6%96%B9%E5%BC%8F)
        - [Absolute(绝对布局)](#absolute%E7%BB%9D%E5%AF%B9%E5%B8%83%E5%B1%80)
        - [Relative(相对布局)](#relative%E7%9B%B8%E5%AF%B9%E5%B8%83%E5%B1%80)
        - [Flex(弹性布局)](#flex%E5%BC%B9%E6%80%A7%E5%B8%83%E5%B1%80)
        - [Liner(线性布局)](#liner%E7%BA%BF%E6%80%A7%E5%B8%83%E5%B1%80)
      - [Layout Management(布局管理器)](#layout-management%E5%B8%83%E5%B1%80%E7%AE%A1%E7%90%86%E5%99%A8)
      - [AutoLayout/Responsive(响应式布局)](#autolayoutresponsive%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B8%83%E5%B1%80)
    - [Container(常见的作为容器的View/Panel)](#container%E5%B8%B8%E8%A7%81%E7%9A%84%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8%E7%9A%84viewpanel)
      - [ScrollView(滚动视图容器)](#scrollview%E6%BB%9A%E5%8A%A8%E8%A7%86%E5%9B%BE%E5%AE%B9%E5%99%A8)
        - [Infinite Scroll(无限滚动)](#infinite-scroll%E6%97%A0%E9%99%90%E6%BB%9A%E5%8A%A8)
        - [RefreshLayout/PullToRefresh:提供下拉刷新或者上拉加载的Layout](#refreshlayoutpulltorefresh%E6%8F%90%E4%BE%9B%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0%E6%88%96%E8%80%85%E4%B8%8A%E6%8B%89%E5%8A%A0%E8%BD%BD%E7%9A%84layout)
        - [Page-Based Scroll](#page-based-scroll)
      - [NavigationView(导航视图)](#navigationview%E5%AF%BC%E8%88%AA%E8%A7%86%E5%9B%BE)
      - [TabBarView(页卡视图)](#tabbarview%E9%A1%B5%E5%8D%A1%E8%A7%86%E5%9B%BE)
    - [Router(页面路由)](#router%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)
  - [Interaction(用户交互)](#interaction%E7%94%A8%E6%88%B7%E4%BA%A4%E4%BA%92)
    - [Event&Gesture(事件与手势操作)](#event&gesture%E4%BA%8B%E4%BB%B6%E4%B8%8E%E6%89%8B%E5%8A%BF%E6%93%8D%E4%BD%9C)
      - [Event Bind(事件监听与绑定)](#event-bind%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E4%B8%8E%E7%BB%91%E5%AE%9A)
        - [Click/Tap/Touch](#clicktaptouch)
      - [Event Dispatcher(事件捕获传递与分发)](#event-dispatcher%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7%E4%BC%A0%E9%80%92%E4%B8%8E%E5%88%86%E5%8F%91)
      - [Gesture Recognize(手势监听与识别)](#gesture-recognize%E6%89%8B%E5%8A%BF%E7%9B%91%E5%90%AC%E4%B8%8E%E8%AF%86%E5%88%AB)
        - [Multiple Touch(多点触控)](#multiple-touch%E5%A4%9A%E7%82%B9%E8%A7%A6%E6%8E%A7)
        - [Drag&Drop(拖拽)](#drag&drop%E6%8B%96%E6%8B%BD)
        - [Scroll(滚动)](#scroll%E6%BB%9A%E5%8A%A8)
        - [Zoom(缩放)](#zoom%E7%BC%A9%E6%94%BE)
        - [Shake(摇晃)](#shake%E6%91%87%E6%99%83)
    - [Media(音频视频播放、录制与相关操作)](#media%E9%9F%B3%E9%A2%91%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E3%80%81%E5%BD%95%E5%88%B6%E4%B8%8E%E7%9B%B8%E5%85%B3%E6%93%8D%E4%BD%9C)
      - [Camera(照相机)](#camera%E7%85%A7%E7%9B%B8%E6%9C%BA)
      - [Audio](#audio)
      - [Video](#video)
    - [Sensor(传感器，包括陀螺仪、重力传感器)](#sensor%E4%BC%A0%E6%84%9F%E5%99%A8%EF%BC%8C%E5%8C%85%E6%8B%AC%E9%99%80%E8%9E%BA%E4%BB%AA%E3%80%81%E9%87%8D%E5%8A%9B%E4%BC%A0%E6%84%9F%E5%99%A8)
    - [Notification(通知栏，包括本地通知与远程推送)](#notification%E9%80%9A%E7%9F%A5%E6%A0%8F%EF%BC%8C%E5%8C%85%E6%8B%AC%E6%9C%AC%E5%9C%B0%E9%80%9A%E7%9F%A5%E4%B8%8E%E8%BF%9C%E7%A8%8B%E6%8E%A8%E9%80%81)
  - [Widgets(插件)](#widgets%E6%8F%92%E4%BB%B6-1)
    - [Dialog(对话框)](#dialog%E5%AF%B9%E8%AF%9D%E6%A1%86)
      - [Modal Dialog(模态对话框)](#modal-dialog%E6%A8%A1%E6%80%81%E5%AF%B9%E8%AF%9D%E6%A1%86)
      - [Popup:弹出与提示层](#popup%E5%BC%B9%E5%87%BA%E4%B8%8E%E6%8F%90%E7%A4%BA%E5%B1%82)
        - [HUD](#hud)
        - [Tooltip](#tooltip)
      - [Popover:覆盖层](#popover%E8%A6%86%E7%9B%96%E5%B1%82)
        - [Empty/Error 空或者错误提示](#emptyerror-%E7%A9%BA%E6%88%96%E8%80%85%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA)
      - [Action Sheet:底部弹出操作栏](#action-sheet%E5%BA%95%E9%83%A8%E5%BC%B9%E5%87%BA%E6%93%8D%E4%BD%9C%E6%A0%8F)
    - [Indicator(指示器)](#indicator%E6%8C%87%E7%A4%BA%E5%99%A8)
      - [Introduction(介绍或者引导页)](#introduction%E4%BB%8B%E7%BB%8D%E6%88%96%E8%80%85%E5%BC%95%E5%AF%BC%E9%A1%B5)
        - [Splash(闪屏)](#splash%E9%97%AA%E5%B1%8F)
        - [Guide/Tour(导引与教程)](#guidetour%E5%AF%BC%E5%BC%95%E4%B8%8E%E6%95%99%E7%A8%8B)
      - [DateTimer(时间显示)](#datetimer%E6%97%B6%E9%97%B4%E6%98%BE%E7%A4%BA)
        - [TimeLine(时间轴效果)](#timeline%E6%97%B6%E9%97%B4%E8%BD%B4%E6%95%88%E6%9E%9C)
        - [CountDown(倒计数以及倒计时效果)](#countdown%E5%80%92%E8%AE%A1%E6%95%B0%E4%BB%A5%E5%8F%8A%E5%80%92%E8%AE%A1%E6%97%B6%E6%95%88%E6%9E%9C)
        - [Calendar(日历显示以及交互)](#calendar%E6%97%A5%E5%8E%86%E6%98%BE%E7%A4%BA%E4%BB%A5%E5%8F%8A%E4%BA%A4%E4%BA%92)
      - [Progress(进度)](#progress%E8%BF%9B%E5%BA%A6)
        - [ProgressBar(进度条)](#progressbar%E8%BF%9B%E5%BA%A6%E6%9D%A1)
          - [Liner ProgressBar(线性进度条)](#liner-progressbar%E7%BA%BF%E6%80%A7%E8%BF%9B%E5%BA%A6%E6%9D%A1)
          - [Circular ProgressBar(圆形进度条)](#circular-progressbar%E5%9C%86%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1)
        - [ProgressBackground(进度形式的背景)](#progressbackground%E8%BF%9B%E5%BA%A6%E5%BD%A2%E5%BC%8F%E7%9A%84%E8%83%8C%E6%99%AF)
        - [Loading(加载效果)](#loading%E5%8A%A0%E8%BD%BD%E6%95%88%E6%9E%9C)
        - [Pagination(分页器)](#pagination%E5%88%86%E9%A1%B5%E5%99%A8)
      - [Text(文本显示以及效果)](#text%E6%96%87%E6%9C%AC%E6%98%BE%E7%A4%BA%E4%BB%A5%E5%8F%8A%E6%95%88%E6%9E%9C)
        - [Rich Text(富文本)](#rich-text%E5%AF%8C%E6%96%87%E6%9C%AC)
        - [TypeWriter:打字机效果](#typewriter%E6%89%93%E5%AD%97%E6%9C%BA%E6%95%88%E6%9E%9C)
        - [In-Out(切入切出效果)](#in-out%E5%88%87%E5%85%A5%E5%88%87%E5%87%BA%E6%95%88%E6%9E%9C)
        - [Carousel(滚动以及轮播效果)](#carousel%E6%BB%9A%E5%8A%A8%E4%BB%A5%E5%8F%8A%E8%BD%AE%E6%92%AD%E6%95%88%E6%9E%9C)
        - [Font(字体)](#font%E5%AD%97%E4%BD%93)
      - [Label(标签)](#label%E6%A0%87%E7%AD%BE)
        - [Icon(图标)](#icon%E5%9B%BE%E6%A0%87)
        - [Tags(标签或者等效的流列表)](#tags%E6%A0%87%E7%AD%BE%E6%88%96%E8%80%85%E7%AD%89%E6%95%88%E7%9A%84%E6%B5%81%E5%88%97%E8%A1%A8)
        - [Badge(徽标数)](#badge%E5%BE%BD%E6%A0%87%E6%95%B0)
    - [Picker(输入器)](#picker%E8%BE%93%E5%85%A5%E5%99%A8)
      - [Button(按钮)](#button%E6%8C%89%E9%92%AE)
        - [FAB(浮动按钮、回到顶部按钮)](#fab%E6%B5%AE%E5%8A%A8%E6%8C%89%E9%92%AE%E3%80%81%E5%9B%9E%E5%88%B0%E9%A1%B6%E9%83%A8%E6%8C%89%E9%92%AE)
        - [SpreadButton(可以扩展开来的按钮)](#spreadbutton%E5%8F%AF%E4%BB%A5%E6%89%A9%E5%B1%95%E5%BC%80%E6%9D%A5%E7%9A%84%E6%8C%89%E9%92%AE)
        - [Like/Zan(喜欢或者点赞的按钮)](#likezan%E5%96%9C%E6%AC%A2%E6%88%96%E8%80%85%E7%82%B9%E8%B5%9E%E7%9A%84%E6%8C%89%E9%92%AE)
      - [Menu(菜单)](#menu%E8%8F%9C%E5%8D%95)
      - [Toolbar/StatusBar(状态栏或者工具栏)](#toolbarstatusbar%E7%8A%B6%E6%80%81%E6%A0%8F%E6%88%96%E8%80%85%E5%B7%A5%E5%85%B7%E6%A0%8F)
      - [Select(选择器)](#select%E9%80%89%E6%8B%A9%E5%99%A8)
        - [Search(待搜索功能的下拉选择框)](#search%E5%BE%85%E6%90%9C%E7%B4%A2%E5%8A%9F%E8%83%BD%E7%9A%84%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9%E6%A1%86)
        - [Segment(分段输入器)](#segment%E5%88%86%E6%AE%B5%E8%BE%93%E5%85%A5%E5%99%A8)
        - [Toggle/Switch(开关)](#toggleswitch%E5%BC%80%E5%85%B3)
        - [Ratio Button](#ratio-button)
        - [Check](#check)
      - [Text(文本输入，泛指所有用户的自主输入的内容)](#text%E6%96%87%E6%9C%AC%E8%BE%93%E5%85%A5%EF%BC%8C%E6%B3%9B%E6%8C%87%E6%89%80%E6%9C%89%E7%94%A8%E6%88%B7%E7%9A%84%E8%87%AA%E4%B8%BB%E8%BE%93%E5%85%A5%E7%9A%84%E5%86%85%E5%AE%B9)
        - [TextEditor](#texteditor)
      - [DateTimePicker(时间与日期输入器)](#datetimepicker%E6%97%B6%E9%97%B4%E4%B8%8E%E6%97%A5%E6%9C%9F%E8%BE%93%E5%85%A5%E5%99%A8)
    - [TableGrid(网格与表单)](#tablegrid%E7%BD%91%E6%A0%BC%E4%B8%8E%E8%A1%A8%E5%8D%95)
      - [List(列表)](#list%E5%88%97%E8%A1%A8)
        - [ListView-Animation](#listview-animation)
      - [Grid(网格)](#grid%E7%BD%91%E6%A0%BC)
      - [CardView(卡片式)](#cardview%E5%8D%A1%E7%89%87%E5%BC%8F)
    - [Gallery(画廊)](#gallery%E7%94%BB%E5%BB%8A)
      - [ImageView(图片加载、呈现以及处理)](#imageview%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E3%80%81%E5%91%88%E7%8E%B0%E4%BB%A5%E5%8F%8A%E5%A4%84%E7%90%86)
        - [Load(图片加载,包括网络加载，懒加载与缓存)](#load%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E5%8C%85%E6%8B%AC%E7%BD%91%E7%BB%9C%E5%8A%A0%E8%BD%BD%EF%BC%8C%E6%87%92%E5%8A%A0%E8%BD%BD%E4%B8%8E%E7%BC%93%E5%AD%98)
        - [Gifs(动图或者多图播放与控制)](#gifs%E5%8A%A8%E5%9B%BE%E6%88%96%E8%80%85%E5%A4%9A%E5%9B%BE%E6%92%AD%E6%94%BE%E4%B8%8E%E6%8E%A7%E5%88%B6)
        - [Filter(图片滤镜)](#filter%E5%9B%BE%E7%89%87%E6%BB%A4%E9%95%9C)
        - [Label(图片标签)](#label%E5%9B%BE%E7%89%87%E6%A0%87%E7%AD%BE)
        - [Sticker(图片贴纸)](#sticker%E5%9B%BE%E7%89%87%E8%B4%B4%E7%BA%B8)
        - [Crop(图片裁剪与美化)](#crop%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA%E4%B8%8E%E7%BE%8E%E5%8C%96)
      - [PhotoBrowser(图片浏览)](#photobrowser%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88)
        - [album(相册)](#album%E7%9B%B8%E5%86%8C)
      - [Carousel(图片轮播)](#carousel%E5%9B%BE%E7%89%87%E8%BD%AE%E6%92%AD)
      - [Waterfall(瀑布流方式)](#waterfall%E7%80%91%E5%B8%83%E6%B5%81%E6%96%B9%E5%BC%8F)
      - [Focus(焦点图浏览)](#focus%E7%84%A6%E7%82%B9%E5%9B%BE%E6%B5%8F%E8%A7%88)
    - [WebView](#webview)
      - [Native Interaction(本地交互)](#native-interaction%E6%9C%AC%E5%9C%B0%E4%BA%A4%E4%BA%92)
      - [Cordova Integration(Cordova集成)](#cordova-integrationcordova%E9%9B%86%E6%88%90)
  - [DVisual(绘图以及数据可视化)](#dvisual%E7%BB%98%E5%9B%BE%E4%BB%A5%E5%8F%8A%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96)
    - [Graphics(基本的绘图相关)](#graphics%E5%9F%BA%E6%9C%AC%E7%9A%84%E7%BB%98%E5%9B%BE%E7%9B%B8%E5%85%B3)
      - [Color(颜色与取色)](#color%E9%A2%9C%E8%89%B2%E4%B8%8E%E5%8F%96%E8%89%B2)
      - [Avatar(头像)&Emoij(表情)](#avatar%E5%A4%B4%E5%83%8F&emoij%E8%A1%A8%E6%83%85)
    - [Style&Theme(样式与主题)](#style&theme%E6%A0%B7%E5%BC%8F%E4%B8%8E%E4%B8%BB%E9%A2%98)
    - [Filter(过滤/滤镜)](#filter%E8%BF%87%E6%BB%A4%E6%BB%A4%E9%95%9C)
    - [Chart(图表相关)](#chart%E5%9B%BE%E8%A1%A8%E7%9B%B8%E5%85%B3)
    - [Map(地图相关)](#map%E5%9C%B0%E5%9B%BE%E7%9B%B8%E5%85%B3)
    - [Barcode(二维码以及条形码相关)](#barcode%E4%BA%8C%E7%BB%B4%E7%A0%81%E4%BB%A5%E5%8F%8A%E6%9D%A1%E5%BD%A2%E7%A0%81%E7%9B%B8%E5%85%B3)
  - [Animation(动画与变换)](#animation%E5%8A%A8%E7%94%BB%E4%B8%8E%E5%8F%98%E6%8D%A2)
    - [Animation Framework(动画构造库)](#animation-framework%E5%8A%A8%E7%94%BB%E6%9E%84%E9%80%A0%E5%BA%93)
      - [KeyFrame(帧动画)](#keyframe%E5%B8%A7%E5%8A%A8%E7%94%BB)
      - [Property(属性控制)](#property%E5%B1%9E%E6%80%A7%E6%8E%A7%E5%88%B6)
    - [Animation Collection(常见动画汇总)](#animation-collection%E5%B8%B8%E8%A7%81%E5%8A%A8%E7%94%BB%E6%B1%87%E6%80%BB)
      - [View Transition(基本视图的常用切换)](#view-transition%E5%9F%BA%E6%9C%AC%E8%A7%86%E5%9B%BE%E7%9A%84%E5%B8%B8%E7%94%A8%E5%88%87%E6%8D%A2)
- [Demo](#demo)
  - [PlayGround](#playground)
  - [Boilerplate](#boilerplate)
    - [UI Components(可以进行直接复用的界面组件)](#ui-components%E5%8F%AF%E4%BB%A5%E8%BF%9B%E8%A1%8C%E7%9B%B4%E6%8E%A5%E5%A4%8D%E7%94%A8%E7%9A%84%E7%95%8C%E9%9D%A2%E7%BB%84%E4%BB%B6)
    - [Functional Modules(功能模块)](#functional-modules%E5%8A%9F%E8%83%BD%E6%A8%A1%E5%9D%97)
    - [Showcase(无法直接复用但是可以展示某些基本的用法)](#showcase%E6%97%A0%E6%B3%95%E7%9B%B4%E6%8E%A5%E5%A4%8D%E7%94%A8%E4%BD%86%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%B1%95%E7%A4%BA%E6%9F%90%E4%BA%9B%E5%9F%BA%E6%9C%AC%E7%9A%84%E7%94%A8%E6%B3%95)
  - [APPs (成型的开源应用)](#apps-%E6%88%90%E5%9E%8B%E7%9A%84%E5%BC%80%E6%BA%90%E5%BA%94%E7%94%A8)
    - [系统安全](#%E7%B3%BB%E7%BB%9F%E5%AE%89%E5%85%A8)
    - [通讯社交](#%E9%80%9A%E8%AE%AF%E7%A4%BE%E4%BA%A4)
    - [影音视听](#%E5%BD%B1%E9%9F%B3%E8%A7%86%E5%90%AC)
    - [新闻阅读](#%E6%96%B0%E9%97%BB%E9%98%85%E8%AF%BB)
    - [便捷生活](#%E4%BE%BF%E6%8D%B7%E7%94%9F%E6%B4%BB)
    - [办公商务](#%E5%8A%9E%E5%85%AC%E5%95%86%E5%8A%A1)
    - [购物优惠](#%E8%B4%AD%E7%89%A9%E4%BC%98%E6%83%A0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


本文主要面向笔者在Web、iOS、Android、WP等移动端开发中的经验总结出在现有以及未来的所有客户端的学习中应该掌握的知识脉络图。通俗来说，就是帮着梳理学习笔记的目录结构。欢迎大家一起补充。

# Advanced:高级内容



## Architect:架构设计

### 模块化与组件化

#### 功能模块化

最基本的代码设计原则：“Don’t repeat yourself!”，每一个工程都会有自己的架构。越底层的模块，应该越稳定，越抽象，越具有高复用度。不要让稳定的模块依赖不稳定的模块， 减少依赖。提升模块的复用度，自完备性有时候要优于代码复用。每个模块只做好一件事情，不要让Common出现。按照你架构的层数从上到下依赖，不要出现下层模块依赖上层模块的现象业务模块之间也尽量不要耦合。



#### 界面组件化


### MVC

[MVC](http://baike.baidu.com/view/5432454.htm)，全称是 Model View Controller，是模型 (model)－视图 (view)－控制器 (controller) 的缩写。它表示的是一种常见的客户端软件开发框架。

### MVP

### MVVM

[MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel) 是 Model-View-ViewModel 的简写。相对于 MVC 的历史来说，MVVM 是一个相当新的架构，MVVM 最早于 2005 年被微软的 WPF 和 Silverlight 的架构师 John Gossman 提出，并且应用在微软的软件开发中。当时 MVC 已经被提出了 20 多年了，可见两者出现的年代差别有多大。

MVC框架若使用不当不可避免的会存在着Controller过于臃肿并且解耦不当的问题，因此很多人都会推崇MVVM，贬斥MVC，不过[这篇文章](http://www.infoq.com/cn/articles/rethinking-mvc-mvvm)笔者认为讲的还是很不错的，值得思考。

### Reactive

Reactive本身是异步数据流的一种实现方式，这里也即是所谓的FRP，即响应式函数编程。Reactive部分放在这边是因为它是一套从UI开始到后面响应中的完整的机制，以Android中的RxJava、Web中的RxJS以及iOS中的ReactiveCocoa为典型代表。

## Core:框架底层原理分析

此部分主要包含对于框架的底层原理分析，譬如Android领域的AOSP的源代码分析，各种各样的什么底层通信框架等等的分析。

# Language:框架常用语言

## Objective-C

## Swift

笔者看过的语法特性最先进齐全的语言之一，足以玩上好多天。

## Dart

## Java

# Network(网络)



## NetworkManagement(网络管理)

### Reachability(网络可达性判断)
## Socket

## HttpClient

以okHttp(Android)、Volley、AFNetworking(iOS)为例。

- 能够取消现有的网络请求
- 能够并发请求
- 连接池能够复用存在的Socket连接
- 本地对于响应的缓存
- 简单的异步接口来避免主线程阻塞
- 对于REST API的封装
- 重连策略
- 能够有效地载入与传输图片
- 支持对于JSON的序列化
- 支持SPDY、HTTP/2

### Request Manage(请求管理)

### Parallel Request(并发请求)



### HTTPStubs/MockServer(本地伪装网络请求)

## FileTransfer(文件传输)

### Uploads(上传)

#### Widgets

### Download(下载)

## Serialization(序列化)

### JSON

#### JSON Object Mapper(JSON对象映射)


### FlatBuffer

### MsgPack

# Storage(存储)

## DataBase(数据库)

### CoreData

这是iOS提供的类似于SQLite的存储方式。

### SQLite

### Realm

## File(文件)

### Props(配置文件)

### Resources(资源文件)
### Widgets(插件)

#### FileBrowser(文件浏览器)

## Cache(缓存)

UserDefaults(iOS),SharedPreference(Android),localStorage(Web)

# SysProc(系统与进程)


## Components Communication(组件通信)

Notification(iOS)、postMessage(Web)、Handler(Android)

## Concurrence

### Thread(线程)

GCD/NSOperation(iOS)、AsyncTask(Android)

### Promise

PromiseKit(iOS)

## EventBus

Otto(Android)

## Service(服务)

## RPC(远程与本地调用)

NDK(Android)

# TestRelease(测试与打包发布)

## Debug(调试与记录)

### Log(日志)

### Monitor(线程与Crash监控)

## Release(发布)

### Signature(Android)

### Ad-hoc/AppStore(iOS)

### Confusion(混淆与加密)

## Test

### Unit Test(单元测试)

### UI Test(界面测试)

### External Test(第三方测试)

## Optimization(优化)

## Plugin & Dynamic Patch(插件化与动态更新)

譬如现在Android领域很火的多APK联合发布以及部分更新等功能。

## APM(应用状态追踪与评分等)

### Rating(在AppStore或者各大应用市场中的应用评分)

### Analytics



### Crash Report(崩溃反馈)

# UI

用户交互与界面部分是最常用也是最复杂的一个部分。

## UI.md(界面呈现的基本原理)
-  Screen & Coordinate(屏幕与坐标系)


## Components(基本组件)


- UIView/UIViewController(iOS)

- Activity(Android)

- iFrame(Web)

### Layout(布局) & Position(定位)
#### Layout Constraints

外边距、内边距等等

#### Position:定位方式

##### Absolute(绝对布局)

##### Relative(相对布局)

##### Flex(弹性布局)

##### Liner(线性布局)

#### Layout Management(布局管理器)
#### AutoLayout/Responsive(响应式布局)

### Container(常见的作为容器的View/Panel)

#### ScrollView(滚动视图容器)


##### Infinite Scroll(无限滚动)

##### RefreshLayout/PullToRefresh:提供下拉刷新或者上拉加载的Layout



##### Page-Based Scroll

类似于Android ViewPager 、Web Swiper这样的基于页面为基本单位的滚动


#### NavigationView(导航视图)

#### TabBarView(页卡视图)

### Router(页面路由)

## Interaction(用户交互)

### Event&Gesture(事件与手势操作)

#### Event Bind(事件监听与绑定)

##### Click/Tap/Touch


#### Event Dispatcher(事件捕获传递与分发)

#### Gesture Recognize(手势监听与识别)

##### Multiple Touch(多点触控)

##### Drag&Drop(拖拽)

##### Scroll(滚动)

##### Zoom(缩放)

##### Shake(摇晃)

### Media(音频视频播放、录制与相关操作)

#### Camera(照相机)

#### Audio

音频的录制与播放，就像iOS与Android下的语音交互，需要统一转码成AMR或者其他格式。

#### Video

### Sensor(传感器，包括陀螺仪、重力传感器)

HealthKit(iOS)

### Notification(通知栏，包括本地通知与远程推送)

## Widgets(插件)
### Dialog(对话框)

#### Modal Dialog(模态对话框)
譬如iDialog(Web)
#### Popup:弹出与提示层

##### HUD

##### Tooltip

#### Popover:覆盖层

##### Empty/Error 空或者错误提示

#### Action Sheet:底部弹出操作栏

### Indicator(指示器)

#### Introduction(介绍或者引导页)

##### Splash(闪屏)

##### Guide/Tour(导引与教程)

#### DateTimer(时间显示)

##### TimeLine(时间轴效果)

时间轴用于显示以时间为横轴，某个事件横跨多个时间的效果。

![](https://raw.githubusercontent.com/commodityvectors/d3-timeline/master/usage.gif)

##### CountDown(倒计数以及倒计时效果)

##### Calendar(日历显示以及交互)

#### Progress(进度)

##### ProgressBar(进度条)

###### Liner ProgressBar(线性进度条)

###### Circular ProgressBar(圆形进度条)

##### ProgressBackground(进度形式的背景)

##### Loading(加载效果)

##### Pagination(分页器)

#### Text(文本显示以及效果)


##### Rich Text(富文本)

##### TypeWriter:打字机效果

##### In-Out(切入切出效果)

##### Carousel(滚动以及轮播效果)


##### Font(字体)

#### Label(标签)
##### Icon(图标)

##### Tags(标签或者等效的流列表)

##### Badge(徽标数)

### Picker(输入器)

#### Button(按钮)

##### FAB(浮动按钮、回到顶部按钮)

##### SpreadButton(可以扩展开来的按钮)

##### Like/Zan(喜欢或者点赞的按钮)


#### Menu(菜单)

Drawer:抽屉菜单(Android)

#### Toolbar/StatusBar(状态栏或者工具栏)

#### Select(选择器)
##### Search(待搜索功能的下拉选择框)

##### Segment(分段输入器)

##### Toggle/Switch(开关)

##### Ratio Button
##### Check

#### Text(文本输入，泛指所有用户的自主输入的内容)
##### TextEditor
#### DateTimePicker(时间与日期输入器)



### TableGrid(网格与表单)

#### List(列表)

ListView(Android)、UITableView(iOS)

##### ListView-Animation

#### Grid(网格)

UICollectionView(iOS)、RecycleView(Android)

#### CardView(卡片式)

### Gallery(画廊)

#### ImageView(图片加载、呈现以及处理)

##### Load(图片加载,包括网络加载，懒加载与缓存)



##### Gifs(动图或者多图播放与控制)


##### Filter(图片滤镜)

##### Label(图片标签)

##### Sticker(图片贴纸)

##### Crop(图片裁剪与美化)

#### PhotoBrowser(图片浏览)

##### album(相册)

#### Carousel(图片轮播)

#### Waterfall(瀑布流方式)

#### Focus(焦点图浏览)

### WebView

#### Native Interaction(本地交互)

- JS-Patch(iOS)

#### Cordova Integration(Cordova集成)


## DVisual(绘图以及数据可视化)

### Graphics(基本的绘图相关)

#### Color(颜色与取色)

#### Avatar(头像)&Emoij(表情)

### Style&Theme(样式与主题)

### Filter(过滤/滤镜)

这里的View指的是对于通用的View的效果。

### Chart(图表相关)

### Map(地图相关)

### Barcode(二维码以及条形码相关)

## Animation(动画与变换)


### Animation Framework(动画构造库)

android控件的动画分为三种,property animation,tween animation,frame animation。但是因为在Web和iOS中分类不同，因此不做详细分类。

提供基本的动作控制

#### KeyFrame(帧动画)
#### Property(属性控制)

### Animation Collection(常见动画汇总)

#### View Transition(基本视图的常用切换)

# Demo

## PlayGround

## Boilerplate

任何一个模板元素的要求为：

- 快捷运行：只要用最少的代码即可以运行查看该模板的效果

- 显性依赖：所有该模板的依赖项显性标注出，方便进行快速移植

- 修改标注：可以添加自定义修改、自定义逻辑的地方全部标注出

- 通用命名

### UI Components(可以进行直接复用的界面组件)

### Functional Modules(功能模块)

### Showcase(无法直接复用但是可以展示某些基本的用法)

## APPs (成型的开源应用)

### 系统安全

### 通讯社交

### 影音视听

### 新闻阅读

### 便捷生活

### 办公商务

### 购物优惠