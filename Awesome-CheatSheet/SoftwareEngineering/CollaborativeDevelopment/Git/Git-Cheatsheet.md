    



# Git 命令速览与备忘清单


# Configuration:配置
- 列举所有的别名与配置
```
git config --list
```

- Git 别名配置
```
git config --global alias.<handle> <command> git config --global alias.st status


```


- 设置git为大小写敏感
```
git config --global core.ignorecase false
```


## User


## Help:常用的辅助查询命令


- 在git 命令行里查看everyday git


```
git help everyday
```


- 显示git常用的帮助命令


```
git help -g
```


- 获取Git Bash的自动补全
```

curl http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```
- 设置自动更正
```
git config --global help.autocorrect 1
```



## Remote:远端仓库配置
- 获取所有远端引用配置
```

git remote
```
或者
```

git remote show
```
- 修改某个远端的地址
```

git remote set-url origin <URL>
```
## Repo
- 查看当前仓库中的所有未打包的objects和磁盘占用
```
git count-objects --human-readable
```
- 从object数据库中删除所有不可达的object
```
git gc --prune=now --aggressive
```


# Cache:缓存
## Track:文件追踪
### Info
- 展示所有被追踪的文件
```

git ls-files -t
```
- 展示所有未被追踪的分支
```

git ls-files --others
```
- 展示所有被忽略的文件
```

git ls-files --others -i --exclude-standard
git check-ignore *
git status --ignored

```
### Manipulation:操作
- 停止追踪某个文件但是不删除它
```

git rm --cached <file_path>
```
或者
```

git rm --cached -r <directory_path>
```
- 强制删除未被追踪的文件或者目录
```

git clean -f
git clean -f -d
git clean -df
```
- 清空`.gitignore`
```
git clean -X -f
```
## Changes:修改
### Info:信息查看
- 查看上次提交之后的未暂存文件
```
git diff
```
- 查看准备用于提交的暂存了的修改的文件
```
git diff --cached
```
- 显示所有暂存与未暂存的文件
```
git diff HEAD
```
- 查看最新的文件版本与Stage中区别
```
git diff --staged
```


### Add:追踪某个修改，准备提交
- Stage某个文件的部分修改而不是全部
```
git add -p
```


### Reset:修改重置


- 以HEAD中的最新的内容覆盖某个本地文件的修改
```

git checkout -- <file_name>
```


## Stash:贮存
### Info:信息查看
- 展示所有保存的Stashes
```
git stash list
```
### Manipulation:操作
#### Save:保存
- 保存当前追踪的文件修改状态而不提交，并使得工作空间恢复干净
```
git stash
```
或者
```
git stash save
```
- 保存所有文件修改，包括未追踪的文件
```
git stash save -u
```
或者
```
git stash save --include-untracked
```
#### Apply:应用
- 应用任何的Stash而不从Stash列表中删除
```
git stash apply <stash@{n}>
```
- 应用并且删除Stash列表中的最后一个
```
git stash pop
```
或者
```
git stash apply stash@{0} && git stash drop stash@{0}
```
- 删除全部存储的Stashes
```
git stash clear
```
或者
```
git stash drop <stash@{n}>
```
- 从某个Stash中应用单个文件
```
git checkout <stash@{n}> -- <file_path>
```
或者
```
git checkout stash@{0} -- <file_path>
```


# Commit:提交



- 检索某个提交的Hash值
```
git rev-list --reverse HEAD | head -1
```




## Info:信息查看


### List:Commit列表
- 查看自Fork Master以来的全部提交
```
git log --no-merges --stat --reverse master..
```
- 展示当前分支中所有尚未合并到Master中的提交
```
git cherry -v master
```
或者
```
git cherry -v master <branch-to-be-merged>
```
- 可视化地查看整个Version树
```
git log --pretty=oneline --graph --decorate --all
```
或者
```
gitk -all
```


- 查看所有在分支1而不在分支2中的提交
```
git log Branch1 ^Branch2
```


### Files:文件信息


- 展示直到某次提交的全部文件列表
```
git ls-tree --name-only -r <commit-ish>
```
- 展示所有在某次提交中修改的文件
```
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

- 展示所有对于某个文件的提交修改
```
git log --follow -p -- <file_path>
```





## Manipulation:关于提交的操作
### Apply:Commit确认或者应用


- 利用cherry-pick将某个分支的某个提交跨分支的应用到其他分支
```

git checkout <branch-name> && git cherry-pick <commit-ish>
```
- 提交时候忽略Staging区域
```
git commit -am <commit message>
```
- 提交时候忽略某个文件
```
git update-index --assume-unchanged Changelog; 
git commit -a; 
git update-index --no-assume-unchanged Changelog
```
- 撤销某个故意忽略
```
git update-index --no-assume-unchanged <file_name>
```
- 将某个提交标记为对之前某个提交的Fixup
```
git commit --fixup <SHA-1>


```


### Reset:将当前分支的HEAD重置到某个提交时候的状态

- 重置HEAD到第一次提交
```
git update-ref -d HEAD
```
- 丢弃自某个Commit之后的提交，建议只在私有分支上进行操作。注意，和上一个操作一样，重置不会修改当前的文件状态，Git会自动将当前文件与该Commit时候的改变作为Changes列举出来
```

git reset <commit-ish>
```


### Undo&Revert:撤销与恢复某个Commit
- 以创建一个新提交的方式撤销某个提交的操作
```

git revert <commit-ish>
```
- 恢复某个文件到某个Commit时候的状态
```
git checkout <commit-ish> -- <file_path>
```
### Update:修改某个Commit
- 修改上一个提交的信息
```
git commit -v --amend
```
- 修改提交的作者信息
```
git commit --amend --author='Author Name <email@address.com>'
```
- 在全局的配置改变了之后，修改某个作者信息
```
git commit --amend --reset-author --no-edit
```
- 修改前一个Commit的提交内容但是不修改提交信息
```
git add --all && git commit --amend --no-edit
```


# Branch:分支


## Info:信息查看
- 获取当前分支名
```
git rev-parse --abbrev-ref HEAD
```
### Tag
- 列举当前分支上最常用的标签
```
git describe --tags --abbrev=0
```
### List:分支枚举
- 获取所有本地与远程的分支
```

git branch -a
```
- 只展示远程分支
```
git branch -r
```
- 根据某个Commit的Hash来查找所有关联分支
```
git branch -a --contains <commit-ish>
```
或者
```
git branch --contains <commit-ish>
```




### Changes:某个分支上的修改情况查看
- 查看两周以来的所有修改
```
git log --no-merges --raw --since='2 weeks ago'
```
或者
```
git whatchanged --since='2 weeks ago'
```


### Merger:合并情况查看
- 追踪某个分支的上游分支
```
git branch -u origin/mybranch
```
- 列举出所有的分支以及它们的上游和最后一次提交
```
git branch -vv
```


- 列举出所有已经合并进入Master的分支
```
git branch --merged master
```


## Manipulation:操作


### Checkout:检出与分支切换
- 快速切换到上一个分支
```
git checkout -
```
- 不带历史记录的检出某个分支
```
git checkout --orphan <branch_name>
```
### Remove:分支移除
- 删除本地分支
```
git branch -d <local_branchname>
```
- 删除远程分支
```
git push origin --delete <remote_branchname>
```
或者
```
git push origin :<remote_branchname>
```
- 移除所有已经合并进入Master的分支
```
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```
- 移除所有在远端已经被删除的远程分支
```
git fetch -p
```
或者
```
git remote prune origin
```
### Update:信息更新
- 修改当前分支名
```
git branch -m <new-branch-name>
```
或者
```
git branch -m [<old-branch-name>] <new-branch-name>
```
### Archive:打包
- 将Master分支打包
```
git archive master --format=zip --output=master.zip
```
- 将历史记录包括分支内容打包到一个文件中
```
git bundle create <file> <branch-name>
```
- 从某个Bundle中导入
```
git clone repo.bundle <repo-dir> -b <branch-name>


```


# Merge:合并


## Pull&Push:远程分支合并操作
- 用pull覆盖本地内容
```
git fetch --all && git reset --hard origin/master
```
- 根据Pull的ID拉取某个Pull请求到本地分支
```
git fetch origin pull/<id>/head:<branch-name>
```
或者
```
git pull origin pull/<id>/head:<branch-name>
```
## Rebase:变基
- 在Pull时候强制用变基进行操作
```git config --global branch.autosetuprebase always
```
- 将某个feature分支变基到master，然后合并进master
```git checkout feature && git rebase @{-1} && git checkout @{-2} && git merge @{-1}
```
- 变基之前自动Stash所有改变
```git rebase --autostash
```
- 利用变基自动将fixup提交与正常提交合并
```git rebase -i --autosquash
```
- 利用ReBase将前两个提交合并
```git rebase --interactive HEAD~2
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
# 抛弃本地所有的修改，回到远程仓库的状态
git fetch --all && git reset --hard origin/master

```


- LFS 文件管理
```
# 本地安装 LFS
brew install git-lfs



# 初始化 LFS
git lfs install



# 指定需要托管给 LFS 的文件类型
git lfs track "*.psd"

git add .gitattributes

```


### 分支管理












