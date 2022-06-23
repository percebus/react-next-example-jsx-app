
rm -rf ./out/
npx next export

mv ./out/_next ./out/next
find ./out/ -type f -exec sed -i 's/_next/next/g' {} \;
