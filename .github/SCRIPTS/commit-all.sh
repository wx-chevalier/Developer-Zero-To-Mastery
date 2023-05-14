rm -rf /Users/zhangzixiong/Desktop/Workspace/Github/ngte/wx-chevalier.github.com/content/books
rm -rf /Users/zhangzixiong/Desktop/Workspace/Github/ngte/wx-chevalier.github.com/docs/books

for file in *; do
    [ -d "$file" ] || continue

    if [ "$file" == "Private" ] || [ "$file" == "config" ] || [ "$file" == "examples" ] || [ "$file" == "models" ] || [ "$file" == "algorithms" ] || [ "$file" == "code" ]; then
        continue
    fi

    echo "cd $file"
    cd ./$file

    ./commit-all.sh

    cd ..
done
