# 主题模型资料索引

朴素贝叶斯可以胜任许多文本的分类问题，但是无法解决语料中一词多义和多词一义的问题，它更像是词法分析，而不是语义分析。而如果使用词向量作为文档的特征，可以较好地解决了一词多义和多词一义的问题，但是就好像过拟合一样，会造成计算文档间相似度的不准确性。而通过添加主题这个隐藏变量，一个词可能被映射到多个主题，而多个主题也可能被映射到一个词中，从而解决一定程度上的语义问题。

主题模型经历从基于SVD的简单的LSA(隐含语义分析)，到基于概率模型与EM的pLSA，再到基于Dirichlet分布的LDA。目前，经典的主题模型一般都会基于BOW(Bag-of-Words)假设。

- [Task-Driven Comparison of Topic Models](http://www.cad.zju.edu.cn/home/vagblog/?p=4151&utm_source=tuicool&utm_medium=referral)

- [LinkedIn文本分析平台：主题挖掘的四大技术步骤](http://www.infoq.com/cn/news/2016/07/technical-details-for-topic?utm_source=tuicool&utm_medium=referral)

# LDA

* [LDA 算法理解](http://6me.us/idj2)

* [Notes Nonparametric Bayesian Methods and Dirichlet Processes](https://github.com/tdhopper/notes-on-dirichlet-processes): [Nonparametric Latent Dirichlet Allocation](https://parg.co/bsl)

* [Nonparametric Latent Dirichlet Allocation](https://parg.co/bsl)

# Lda2Vec

* [A tale about LDA2vec: when LDA meets word2vec](http://www.datasciencecentral.com/profiles/blogs/a-tale-about-lda2vec-when-lda-meets-word2vec?xg_source=activity)

* [word2vec, LDA, and introducing a new hybrid algorithm: lda2vec](http://www.slideshare.net/ChristopherMoody3/word2vec-lda-and-introducing-a-new-hybrid-algorithm-lda2vec-57135994)


# Topic Model Evaluation

- [Perplexity To Evaluate Topic Models](http://qpleple.com/perplexity-to-evaluate-topic-models/)

- [Topic Coherence To Evaluate Topic Models](http://qpleple.com/topic-coherence-to-evaluate-topic-models/)

- [2015-Exploring the Space of Topic Coherence Measures](https://svn.aksw.org/papers/2015/WSDM_Topic_Evaluation/public.pdf)

- [Hierarchical Document Clustering Using Frequent Itemsets](http://epubs.siam.org/doi/pdf/10.1137/1.9781611972733.6)