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
