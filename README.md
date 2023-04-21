![myimage](https://github.com/Ray625/restaurant_list/blob/main/screen.PNG)
## 簡介
簡易的餐廳清單，可以新增、瀏覽、編輯及刪除餐廳資訊。
## 功能
+ 瀏覽餐廳列表。  
+ 新增餐廳資訊。 
+ 查看詳細內容。
+ 編輯餐廳資訊。
+ 刪除所選餐廳資料。
+ 於搜尋列輸入餐廳名稱或餐廳類別搜尋想要的餐廳。
## 環境設置
Node.js@18.14.0  
express@4.16.4  
express-handlebars@3.0.0  
body-parser@1.20.2  
method-override@3.0.0
## 開始使用
1. 請先安裝Node.js與npm  
2. clone專案至本地
3. 於終端機移至專案資料夾輸入:
```
npm install
```
4. 設定環境變數: 在專案資料夾下新增.env檔案，並填入你的MongoDB連線字串
```
MONGODB_URI = "<你的連線字串>"
```
5. 啟用伺服器
```
npm run start
```
6. 若看見此訊息代表順利運行，打開瀏覽器進入到以下網址
```
The web app is running on http://localhost:3000
```
7. 新增種子資料
```
npm run seed
```
8. 若欲停止使用請輸入
```
Ctrl + C
```

