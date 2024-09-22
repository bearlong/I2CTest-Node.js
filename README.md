# Node.Js Showcase

這個專案展示了三個 Node.Js 相關技術的實現，分別是用戶管理系統、Promise 版本的計
時器函數和多檔案內容合併與格式化。每個元件都有其功能及使用說明。

## 1. 簡單的用戶管理系統

### 描述

設計一個名為 `UserManager` 的 class，負責管理用戶資料。使用 Express 建立 API 來
處理以下操作：

- **POST /users**：新增用戶（用戶資料包含 `id`, `name`, `age`）。
- **GET /users**：取得所有用戶列表。
- **DELETE /users/:id**：根據 `id` 刪除指定用戶。

`UserManager` class 應包含三個方法：

- `addUser(user)`：新增一個用戶。
- `getUsers()`：返回所有用戶。
- `deleteUser(id)`：根據 `id` 刪除用戶。

> **註解**：不需要撰寫實際資料如何存取，可以用註解標明資料應該怎麼處理，例如從資
> 料庫或內存中取得資料。

### 文件結構

- `UserManager` 的 class 定義在 `UserManager.mjs`。
- Express API 路由定義在 `./routes/users.mjs`。
  - **POST** `/api/users`：新增用戶。
  - **GET** `/api/users`：取得所有用戶。
  - **DELETE** `/api/users/:id`：刪除指定用戶。

### 使用方法

1. 進入專案目錄： cd I2CTest-Node.js/merged
2. 安裝依賴： npm i
3. 啟動開發伺服器： npm run dev
4. 使用 Postman 等工具訪問以下 API：
   - **POST** `http://localhost:3000/api/users`：新增用戶(需要有 `id`, `name`,
     `age`)。
   - **GET** `http://localhost:3000/api/users`：取得所有用戶。
   - **DELETE** `http://localhost:3000/api/users/:id`：刪除指定用戶。

## 2. Promise 版本的計時器函數

### 描述

實作一個 `delay` 函數，該函數接受一個以毫秒為單位的時間，並返回一個 Promise。該
Promise 在經過指定時間後會被解決，並返回一個訊息（例如："Done!"）。

### 文件結構

- 位置在 `timer` 資料夾內：
  - `index.html`：用於顯示計時器介面。
  - `index.js`：計時器函數實現。

### 使用方法

1. 進入專案目錄： cd I2CTest-Node.js/timer
2. 開啟 `index.html` 在瀏覽器中運行。

## 3. 多檔案內容合併與格式化

### 描述

使用 Node.js 實作一個程式，讀取多個 JSON 檔案，並將它們的內容合併為一個新的 JSON
檔案。每個檔案的內容是一個包含多個使用者資料的陣列（`id`, `name`, `age`）。合併
後，根據使用者的 id 進行排序，最後將結果寫入新檔案 `merged_users.json`。

### 文件結構

- 位置在 `merged` 資料夾內：
  - 多個 JSON 檔案在 `data` 資料夾內。
  - 主程式在 `index.mjs`。

### 使用方法

1. 進入專案目錄： cd I2CTest-Node.js/merged
2. 啟動開發伺服器： `npm run dev`
