.wiz-todo, .wiz-todo-img {width: 16px; height: 16px; cursor: default; padding: 0 10px 0 2px; vertical-align: -10%;-webkit-user-select: none;} .wiz-todo-label { display: inline-block; padding-top: 7px; padding-bottom: 6px; line-height: 1.5;} .wiz-todo-label-checked { /*text-decoration: line-through;*/ color: #666;} .wiz-todo-label-unchecked {text-decoration: initial;} .wiz-todo-completed-info {padding-left: 44px; display: inline-block; } .wiz-todo-avatar { width:20px; height: 20px; vertical-align: -20%; margin-right:10px; border-radius: 2px;} .wiz-todo-account, .wiz-todo-dt { color: #666; }
# Docx Template
## [docxtemplater](http://javascript-ninja.fr/docxtemplater/v1/examples/demo.html)
![](http://javascript-ninja.fr/docxtemplater/v1/examples/images/formatTagging.png) 
```
loadFile("tagFormating.docx",function(err,content){

	doc=new DocxGen(content)
	doc.setData({
		"first_name":"Hipp",
		"last_name":"Edgar",
		"phone":"0652455478",
		"description":"New Website"
		}); //set the templateVariables
	doc.render() //apply them (replace all occurences of {first_name} by Hipp, ...)
	output=doc.getZip().generate({type:"blob"}) //Output the document using Data-URI
	saveAs(output,"output.docx")
});
```
![](http://javascript-ninja.fr/docxtemplater/v1/examples/images/formatTaggingResult.png) 

