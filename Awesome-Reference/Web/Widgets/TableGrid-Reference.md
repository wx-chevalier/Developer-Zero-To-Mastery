[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 
 

# 表格与网格控件索引


# ListView: 列表

# Interaction

## Sortable:排序或者拖拽排序

### [Sortable](http://rubaxa.github.io/Sortable/):可记录的拖拽排序，可以用在移动设备上
![](http://7xkt0f.com1.z0.glb.clouddn.com/665E042D-E43E-44DA-AB81-8B6956983FC5.png)
### [jQuery-HTML5 Sortable](http://farhadi.ir/projects/html5sortable/):基于jQuery的拖拽插件
![](http://7xkt0f.com1.z0.glb.clouddn.com/F2ECFA27-9B14-4D46-A1B2-437EFC901927.png)

## Animation
### [react-flip-move](https://github.com/joshwcomeau/react-flip-move#enterleave-animations)
![](https://camo.githubusercontent.com/327ab3ca8958538e66c1bad251fcd60441b5093f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f676974687562646f63732f666d2d6d61696e2d64656d6f2e676966)



# Responsive Grid

## JS

### [Minigrid](http://alves.im/minigrid/)

## CSS

### [Simple-Grid](https://github.com/ThisIsDallas/Simple-Grid): Basic Responsive Grid 

### [Grd](http://1000ch.github.io/grd/):基于Flexbox的网格框架
![](http://1000ch.github.io/grd/logo.png)

# Angular

## [UI-Grid][1]

可以通过Bower命令行方式安装该组件库：

``` 
bower install  ui-grid#3.0.0-rc.22
```

有时候通过bower无法安装全部文件，可以通过[Release][2]这个地址下载。

# React

## [react-virtualized](https://bvaughn.github.io/react-virtualized/)

![](http://7xlgth.com1.z0.glb.clouddn.com/16CDC828-826F-4EDB-BDB7-C9AE5BFF6966.png)

``` 
npm install react-virtualized --save
```



``` jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { VirtualScroll } from 'react-virtualized';

// List data as an array of strings
const list = [
  'Brian Vaughn'
  // And so on...
];

// Render your list
ReactDOM.render(
  <VirtualScroll
    width={300}
    height={300}
    rowsCount={list.length}
    rowHeight={20}
    rowRenderer={
      index => (
        <div key={index}>
          {list[index]}
        </div>
      )
    }
  />,
  document.getElementById('example')
);
```



# Utility

## Table Sorter

### jQuery-tablesorter

[tablesorter][3]是一款jQuery插件，用于非侵入式的情况下为现有表单添加表格排序功能。

## Table Pagination



[1]: http://ui-grid.info/docs/#/tutorial/101_intro
[2]: https://github.com/angular-ui/ui-grid.info/tree/gh-pages
[3]: http://tablesorter.com/docs/

# DataGrid: 数据表格



- [2017-Handsontable #Project#](https://github.com/handsontable/handsontable): Handsontable Community Edition - JavaScript/HTML5 Spreadsheet Component for Web Apps.

- [Facebook-FixedDataTable #Project#](http://facebook.github.io/fixed-data-table/getting-started.html): A React table component designed to allow presenting thousands of rows of data.

- [ag-grid #Project#](https://github.com/ceolter/ag-grid): Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components.

- [SlickGrid #Project# #Inactive#](https://github.com/mleibman/SlickGrid): A lightning fast JavaScript grid/spreadsheet

- [jQuery-DataTables #Project#](https://www.datatables.net/examples/basic_init/zero_configuration.html)


# Cascading Layout: 瀑布流布局



- [Bricklayer #Project#](https://github.com/ademilter/bricklayer): Bricklayer is a Lightweight and Independent Pinterest-like Cascading Grid Layout Library.



- [Masonry #Project#](https://github.com/desandro/masonry): Cascading grid layout library Masonry works by placing elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall. You’ve probably seen it in use all over the Internet.

- [LightGallery](https://sachinchoolur.github.io/lightgallery.js/)