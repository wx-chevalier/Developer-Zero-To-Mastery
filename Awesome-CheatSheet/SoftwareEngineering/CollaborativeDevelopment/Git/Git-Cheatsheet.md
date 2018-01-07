[![返回目录](https://parg.co/UCb)](https://parg.co/UCH)

# Git 命令速览与备忘清单

# Configuration: 配置

* 列举所有的别名与配置

```
git config --list
```

* Git 别名配置

```
git config --global alias.<handle> <command> git config --global alias.st status
```

* 设置 git 为大小写敏感

```
git config --global core.ignorecase false
```

## User

## Help: 常用的辅助查询命令

* 在 git 命令行里查看 everyday git

```
git help everyday
```

* 显示 git 常用的帮助命令

```
git help -g
```

* 获取 Git Bash 的自动补全

```
curl http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

* 设置自动更正

```
git config --global help.autocorrect 1
```

## Remote: 远端仓库配置

* 获取所有远端引用配置

```
git remote
```

或者

```
git remote show
```

* 修改某个远端的地址

```
git remote set-url origin <URL>
```

## Repo

* 查看当前仓库中的所有未打包的 objects 和磁盘占用

```
git count-objects --human-readable
```

* 从 object 数据库中删除所有不可达的 object

```
git gc --prune=now --aggressive
```

# Cache: 缓存

## Track: 文件追踪

### Info

* 展示所有被追踪的文件

```
git ls-files -t
```

* 展示所有未被追踪的分支

```
git ls-files --others
```

* 展示所有被忽略的文件

```
git ls-files --others -i --exclude-standard
git check-ignore *
git status --ignored
```

### Manipulation: 操作

* 停止追踪某个文件但是不删除它

```
git rm --cached <file_path>
```

或者

```
git rm --cached -r <directory_path>
```

* 强制删除未被追踪的文件或者目录

```
git clean -f
git clean -f -d
git clean -df
```

* 清空`.gitignore`

```
git clean -X -f
```

## Changes: 修改

### Info: 信息查看

* 查看上次提交之后的未暂存文件

```
git diff
```

* 查看准备用于提交的暂存了的修改的文件

```
git diff --cached
```

* 显示所有暂存与未暂存的文件

```
git diff HEAD
```

* 查看最新的文件版本与 Stage 中区别

```
git diff --staged
```

### Add: 追踪某个修改，准备提交

* Stage 某个文件的部分修改而不是全部

```
git add -p
```

### Reset: 修改重置

* 以 HEAD 中的最新的内容覆盖某个本地文件的修改

```
git checkout -- <file_name>
```

## Stash: 贮存

### Info: 信息查看

* 展示所有保存的 Stashes

```
git stash list
```

### Manipulation: 操作

#### Save: 保存

* 保存当前追踪的文件修改状态而不提交，并使得工作空间恢复干净

```
git stash
```

或者

```
git stash save
```

* 保存所有文件修改，包括未追踪的文件

```
git stash save -u
```

或者

```
git stash save --include-untracked
```

#### Apply: 应用

* 应用任何的 Stash 而不从 Stash 列表中删除

```
git stash apply <stash@{n}>
```

* 应用并且删除 Stash 列表中的最后一个

```
git stash pop
```

或者

```
git stash apply stash@{0} && git stash drop stash@{0}
```

* 删除全部存储的 Stashes

```
git stash clear
```

或者

```
git stash drop <stash@{n}>
```

* 从某个 Stash 中应用单个文件

```
git checkout <stash@{n}> -- <file_path>
```

或者

```
git checkout stash@{0} -- <file_path>
```

# Commit: 提交

* 检索某个提交的 Hash 值

```
git rev-list --reverse HEAD | head -1
```

## Info: 信息查看

### List:Commit 列表

* 查看自 Fork Master 以来的全部提交

```
git log --no-merges --stat --reverse master..
```

* 展示当前分支中所有尚未合并到 Master 中的提交

```
git cherry -v master
```

或者

```
git cherry -v master <branch-to-be-merged>
```

* 可视化地查看整个 Version 树

```
git log --pretty=oneline --graph --decorate --all
```

或者

```
gitk -all
```

* 查看所有在分支 1 而不在分支 2 中的提交

```
git log Branch1 ^Branch2
```

### Files: 文件信息

* 展示直到某次提交的全部文件列表

```
git ls-tree --name-only -r <commit-ish>
```

* 展示所有在某次提交中修改的文件

```
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

* 展示所有对于某个文件的提交修改

```
git log --follow -p -- <file_path>
```

## Manipulation: 关于提交的操作

### Apply:Commit 确认或者应用

* 利用 cherry-pick 将某个分支的某个提交跨分支的应用到其他分支

```
git checkout <branch-name> && git cherry-pick <commit-ish>
```

* 提交时候忽略 Staging 区域

```
git commit -am <commit message>
```

* 提交时候忽略某个文件

```
git update-index --assume-unchanged Changelog;
git commit -a;
git update-index --no-assume-unchanged Changelog
```

* 撤销某个故意忽略

```
git update-index --no-assume-unchanged <file_name>
```

* 将某个提交标记为对之前某个提交的 Fixup

```
git commit --fixup <SHA-1>
```

### Reset: 将当前分支的 HEAD 重置到某个提交时候的状态

* 重置 HEAD 到第一次提交

```
git update-ref -d HEAD
```

* 丢弃自某个 Commit 之后的提交，建议只在私有分支上进行操作。注意，和上一个操作一样，重置不会修改当前的文件状态，Git 会自动将当前文件与该 Commit 时候的改变作为 Changes 列举出来

```
git reset <commit-ish>
```

### Undo&Revert: 撤销与恢复某个 Commit

* 以创建一个新提交的方式撤销某个提交的操作

```
git revert <commit-ish>
```

* 恢复某个文件到某个 Commit 时候的状态

```
git checkout <commit-ish> -- <file_path>
```

### Update: 修改某个 Commit

* 修改上一个提交的信息

```
git commit -v --amend
```

* 修改提交的作者信息

```
git commit --amend --author='Author Name <email@address.com>'
```

* 在全局的配置改变了之后，修改某个作者信息

```
git commit --amend --reset-author --no-edit
```

* 修改前一个 Commit 的提交内容但是不修改提交信息

```
git add --all && git commit --amend --no-edit
```

# Branch: 分支

## Info: 信息查看

* 获取当前分支名

```
git rev-parse --abbrev-ref HEAD
```

### Tag

* 列举当前分支上最常用的标签

```
git describe --tags --abbrev=0
```

### List: 分支枚举

* 获取所有本地与远程的分支

```
git branch -a
```

* 只展示远程分支

```
git branch -r
```

* 根据某个 Commit 的 Hash 来查找所有关联分支

```
git branch -a --contains <commit-ish>
```

或者

```
git branch --contains <commit-ish>
```

### Changes: 某个分支上的修改情况查看

* 查看两周以来的所有修改

```
git log --no-merges --raw --since='2 weeks ago'
```

或者

```
git whatchanged --since='2 weeks ago'
```

### Merger: 合并情况查看

* 追踪某个分支的上游分支

```
git branch -u origin/mybranch
```

* 列举出所有的分支以及它们的上游和最后一次提交

```
git branch -vv
```

* 列举出所有已经合并进入 Master 的分支

```
git branch --merged master
```

## Manipulation: 操作

### Checkout: 检出与分支切换

* 快速切换到上一个分支

```
git checkout -
```

* 不带历史记录的检出某个分支

```
git checkout --orphan <branch_name>
```

### Remove: 分支移除

* 删除本地分支

```
git branch -d <local_branchname>
```

* 删除远程分支

```
git push origin --delete <remote_branchname>
```

或者

```
git push origin :<remote_branchname>
```

* 移除所有已经合并进入 Master 的分支

```
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```

* 移除所有在远端已经被删除的远程分支

```
git fetch -p
```

或者

```
git remote prune origin
```

### Update: 信息更新

* 修改当前分支名

```
git branch -m <new-branch-name>
```

或者

```
git branch -m [<old-branch-name>] <new-branch-name>
```

### Archive: 打包

* 将 Master 分支打包

```
git archive master --format=zip --output=master.zip
```

* 将历史记录包括分支内容打包到一个文件中

```
git bundle create <file> <branch-name>
```

* 从某个 Bundle 中导入

```
git clone repo.bundle <repo-dir> -b <branch-name>
```

# Merge: 合并

## Pull&Push: 远程分支合并操作

* 用 pull 覆盖本地内容

```
git fetch --all && git reset --hard origin/master
```

* 根据 Pull 的 ID 拉取某个 Pull 请求到本地分支

```
git fetch origin pull/<id>/head:<branch-name>
```

或者

```
git pull origin pull/<id>/head:<branch-name>
```

## Rebase: 变基

* 在 Pull 时候强制用变基进行操作

```git config --global branch.autosetuprebase always

```

* 将某个 feature 分支变基到 master，然后合并进 master

```git checkout feature && git rebase @{-1} && git checkout @{-2} && git merge @{-1}

```

* 变基之前自动 Stash 所有改变

```git rebase --autostash

```

* 利用变基自动将 fixup 提交与正常提交合并

```git rebase -i --autosquash

```

* 利用 ReBase 将前两个提交合并 ```git rebase --interactive HEAD~2

```
## Diff&Conflict:差异与冲突
### Info:信息查看
- 列举全部的冲突文件
```

git diff --name-only --diff-filter=U

```
- 在编辑器中打开所有冲突文件
```

git diff --name-only | uniq | xargs $EDITOR

```
# Workflow:工作流
## SubModules:子模块
### Info:信息查看
### Manipulation:操作
- 利用SubTree方式将某个Project添加到Repo中
```

git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master

```
- 更新所有的子模块
```

git submodule foreach git pull

```
## Work Tree
### Manipulation:操作
- 从某个仓库中创建一个新的Working Tree
```

git worktree add -b <branch-name> <path> <start-point>

```
- 从HEAD状态中创建一个新的Working Tree
```

git worktree add --detach <path> HEAD

```
## Git


### 基础配置
```

# 缓存用户最近输入的验证信息

git config --global credential.helper cache

```
### 远程仓库


- 将独立仓库添加为本仓库的子模块
```

git submodule add -b master git@github.com:githubuser/foo.git apps/foo

```
### 本地操作


- 查看


- 提交


- 回滚
```

# 抛弃本地所有的修改，回到远程仓库的状态 git fetch --all && git reset --hard origin/master

```
- LFS 文件管理
```

# 本地安装 LFS

brew install git-lfs

# 初始化 LFS

git lfs install

# 指定需要托管给 LFS 的文件类型

git lfs track "\*.psd"

git add .gitattributes

```
### 分支管理
```

> * [Git 常用命令整理](http://justcoding.iteye.com/blog/1830388)

# Initialization & Config

```
    #配置使用git仓库的人员姓名  
    git config --global user.name "Your Name Comes Here"  

    #配置使用git仓库的人员email  
    git config --global user.email you@yourdomain.example.com  

    #配置到缓存 默认15分钟  
    git config --global credential.helper cache

    #修改缓存时间  
    git config --global credential.helper 'cache --timeout=3600'

    git config --global color.ui true  
    git config --global alias.co checkout  
    git config --global alias.ci commit  
    git config --global alias.st status  
    git config --global alias.br branch  
    git config --global core.editor "mate -w"    # 设置Editor使用textmate  
    git config -1 #列举所有配置  

    #用户的git配置文件~/.gitconfig  
```

# 查看、添加、提交、删除、找回，重置修改文件

    git help <command>  # 显示command的help  
    git show            # 显示某次提交的内容  
    git show $id  

    git co  -- <file>   # 抛弃工作区修改  
    git co  .           # 抛弃工作区修改  

    git add <file>      # 将工作文件修改提交到本地暂存区  
    git add .           # 将所有修改过的工作文件提交暂存区  

    git rm <file>       # 从版本库中删除文件  
    git rm <file> --cached  # 从版本库中删除文件，但不删除文件  

    git reset <file>    # 从暂存区恢复到工作文件  
    git reset -- .      # 从暂存区恢复到工作文件  
    git reset --hard    # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改  

    git ci <file>  
    git ci .  
    git ci -a           # 将git add, git rm和git ci等操作都合并在一起做  
    git ci -am "some comments"  
    git ci --amend      # 修改最后一次提交记录  

    git revert <$id>    # 恢复某次提交的状态，恢复动作本身也创建了一次提交对象  
    git revert HEAD     # 恢复最后一次提交的状态  

# 查看文件 diff

    git diff <file>     # 比较当前文件和暂存区文件差异  
    git diff  
    git diff <$id1> <$id2>   # 比较两次提交之间的差异  
    git diff <branch1>..<branch2> # 在两个分支之间比较  
    git diff --staged   # 比较暂存区和版本库差异  
    git diff --cached   # 比较暂存区和版本库差异  
    git diff --stat     # 仅仅比较统计信息  

# 查看提交记录

    git log  
    git log <file>      # 查看该文件每次提交记录  
    git log -p <file>   # 查看每次详细修改内容的diff  
    git log -p -2       # 查看最近两次详细修改内容的diff  
    git log --stat      #查看提交统计信息  

Mac 上可以使用 tig 代替 diff 和 log，brew install tig

# 取得 Git 仓库

```
    #初始化一个版本仓库  
    git init  

    #Clone远程版本库  
    git clone git@xbc.me:wordpress.git  

    #添加远程版本库origin，语法为 git remote add [shortname] [url]  
    git remote add origin git@xbc.me:wordpress.git  

    #查看远程仓库  
    git remote -v  
```

# 提交你的修改

```
#添加当前修改的文件到暂存区  
git add .  

#如果你自动追踪文件，包括你已经手动删除的，状态为Deleted的文件  
git add -u  

#提交你的修改  
git commit –m "你的注释"  

#推送你的更新到远程服务器,语法为 git push [远程名] [本地分支]:[远程分支]  
git push origin master  

#查看文件状态  
git status  

#跟踪新文件  
git add readme.txt  

#从当前跟踪列表移除文件，并完全删除  
git rm readme.txt  

#仅在暂存区删除，保留文件在当前目录，不再跟踪  
git rm –cached readme.txt  

#重命名文件  
git mv reademe.txt readme  

#查看提交的历史记录  
git log  

#修改最后一次提交注释的，利用–amend参数  
git commit --amend  

#忘记提交某些修改，下面的三条命令只会得到一个提交。  
git commit –m &quot;add readme.txt&quot;  
git add readme_forgotten  
git commit –amend  

#假设你已经使用git add .，将修改过的文件a、b加到暂存区  

#现在你只想提交a文件，不想提交b文件，应该这样  
git reset HEAD b  

#取消对文件的修改  
git checkout –- readme.txt
```

# Commands & Concept

### reset

```
git reset [file]
```

取消暂存

### remote

查看远程仓库名

```
git remote -v
```

查看远程仓库 url

```
git remote add  
```

新增远程仓库

```
git remote show
```

查看远程仓库详细信息

```
git remote rename  
```

重命名远程仓库

### pull

相当于 fetch 和 merge

### push

```
git push [remote_branch] [local_branch]
```

推送本地仓库代码到远程仓库，相当于 svn 的 commit

```
git push  [tag name]
```

推送本地标签到远程仓库

```
git push  :
```

将本地分支推送到指定的远程分支

```
git push  --delete
```

删除远程分支

### tag

查看标签（用来标记标志性的稳定版本信息）

```
git tag -l '[expression]'
```

查看那符合正则表达式的

```
git tag -a  -m
```

添加带注释的标签

```
git tag -a  
```

对某个版本打标签

```
git tag [tag name]
```

如果没有标签名，则为查看所有标签。带标签名则为新建标签

### merge

```
git merge
```

将其他分支合并到本分支

### commit

```
git commit -a -m 'xx'
```

暂存并提交

### branch

```
git branch
```

查看本地仓库分支

```
git branch -v
```

查看本地仓库分支最后一次提交情况

```
git branch -vv
```

查看分支跟踪情况

```
git branch
```

新建分支

```
git branch -d
```

删除分支

```
git branch [--merged | --no-merged]
```

查看已合并|未合并的本地仓库分支

```
git branch -u /
```

修改当前跟踪分支

### commit

```
git commit -a -m 'xx'
```

提交并且暂存暂存的方法

### checkout

```
git checkout -- [file]
```

恢复文件

```
git checkout -b [branchname] [tagname]
```

在特定的版本上创建一个新的分支并切换到此分支

```
git checkout -b [local branch] [remote base]/[remote branch]
```

将远程分支检出到本地分支

```
git checkout --track /
```

让当前分支跟踪远程分支

```
git checkout --track /
git checkout -b  /
```

让当前分支跟踪到远程分支。两条命令作用基本一致，不同的是第二条命令可以重命名检出的分支。

### rebase

```
git rebase [basebranch]
```

变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。

## 小技巧

### 查看配置

```
git config -1
```

### 设置别名

```
git config --global alias.
```

### 保存用户名和密码

#### 对于 http(s)协议，可以用下面命令临时缓存

```
git config --global credential.helper cache
```

开启 linux 缓存

```
git config --global credential.helper wincred
```

开启 windows 缓存

```sh
# 删除全部的提交
git checkout --orphan newBranch
git add -A  # Add all files and commit them
git commit
git branch -D master  # Deletes the master branch
git branch -m master  # Rename the current branch to master
git push -f origin master  # Force push master branch to github
git gc --aggressive --prune=all     # remove the old files
```
