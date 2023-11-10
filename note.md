## init project and install tailwindcss
```
npm init
npm install  tailwindcss
```


## 执行构建css脚本
生成public/styles.css、lock文件、node_modules目录
```
npm run build-css
```


写html页面

## 启动本地server
npm install live-server -g
在项目根目录执行
```
live-server public
```
就可以用public作为根目录启动


tailwindcss文档
font： https://tailwindcss.com/docs/font-size
color: https://tailwindcss.com/docs/customizing-colors


hyphen 连字符 -



创建tailwind.config.js
```
npx tailwindcss init
```

npx tailwindcss init --full会创建一个包含所有具体样式的


修改tailwind.config.js，`content: ["./pubic/**/*.{html,js}"]`

```
npx tailwindcss -i ./src/styles.css -o ./public/styles.css --watch
```

在package.json里面设置了一个build-css 方法，可以这样用：
```
npm run build-css
```


扩展字体
body 标签加上 font-mono，使用内置的这个字体
也可以自己扩展，在fonts.google.com
https://fonts.google.com/specimen/Nunito?query=nunito

gogle import url(xxx)代码导入到styles.css里面
在tailwind.config.js里面加上这个字体
然后npm run build-css


icon来源 
https://heroicons.dev/  
