
[Begin-Latex-in-minutes](https://github.com/VoLuong/Begin-Latex-in-minutes)
[一份其实很短的 LaTeX 入门文档](http://liam0205.me/2014/09/08/latex-introduction/) 
[Latex Tutorial For Beginners](http://www.latex-tutorial.com/tutorials/beginners/)
# Quick Start
[在Mac上通过Sublime、Skim编辑LaTeX](http://painterlin.com/2014/08/10/Using-LaTeX-with-Sublime-and-Skim-for-Mac.html) 
[为 MacTeX 配置中文支持](http://liam0205.me/2014/11/02/latex-mactex-chinese-support/) 




# Images
```\documentclass{article} 
\usepackage{graphix} 
\begin{document} 
\write18{wget http://www.some-site.com/path/to/image.png}
 \includegraphic{image.png} 
\end{document}
```