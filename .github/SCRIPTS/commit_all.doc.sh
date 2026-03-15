for file in *; do
    [ -d "$file" ] || continue

    if [ "$file" == "config" ] || [ "$file" == "examples" ] || [ "$file" == "models" ] || [ "$file" == "algorithms" ] || [ "$file" == "code" ]; then
        continue
    fi

    echo "cd $file"
    cd ./$file

    docsify-x-auto-sidebar -s -d .
    docsify-sync-to-hugo -d . -t /Users/zhangzixiong/Desktop/Workspace/Github/ngte/wx-chevalier.github.com/content/books

    # git lfs uninstall
    # git lfs track *.pdf
    # git lfs track *.zip

    git add --all
    git commit -m "feat: update articles"
    git pull
    git push --set-upstream origin master

    git checkout gh-pages
    git merge master
    git push --set-upstream origin gh-pages

    git checkout master
    # 将 gh-pages 合并进来，避免提交过程中的修改
    git merge gh-pages
    cd ..
done
