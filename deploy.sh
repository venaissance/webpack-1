yarn build &&
git checkout gh-pages &&
rm -rf *.html *.css *.js *.json &&
mv dist/* ./ &&
rm -rf dist ;
git add . &&
git commit -m "update deploy" &&
git push &&
git checkout -