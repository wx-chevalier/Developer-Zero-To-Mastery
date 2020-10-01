(cd /Users/zhangzixiong/Desktop/Github/AI/Soogle/sg-index-doc && npm run ts ./src/cli/generate-toc.ts)

for file in *; do 
    [ -d "$file" ] || continue
    
    if [ "$file" == "config" ] || [ "$file" == "examples" ] || [ "$file" == "models" ] || [ "$file" == "algorithms" ] || [ "$file" == "code" ]; then
        continue
    fi

    echo "cd $file"; 
    cd ./$file
    # git lfs uninstall
    git lfs track *.zip

    git add --all
    git commit -m "feat: update articles"
    git pull
    git push
    cd ..
done