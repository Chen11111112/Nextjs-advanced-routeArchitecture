# Day 3

## 全端實踐 - 後端
1. Connection Layer（app/lib/db.ts）
作為單例實例，獨家管理 MySQL 連接池，處理環境變量，並防止在熱模組重載 (HMR) 期間發生連接洩漏。
```js
import mysql from "mysql2/promise";
export const pool = mysql.createPool({ ... });
```
2. Data Access Layer / DAO
封裝原始 SQL 查詢、參數綁定和類型對應。此層包含資料庫特定的操作（getAll、getById、create），與 HTTP 傳輸或框架細節完全解耦。
```js
import { pool } from "@/app/day3/lib/db";

export async function getAll() {
  const [rows] = await pool.query("SELECT * FROM items");
  return rows;
}
```
3. Server Actions Layer (app/actions/item.ts)
取代傳統的 REST API 控制器。這些函數標記為“使用伺服器”，它們處理來自客戶端元件的傳入 FormData，執行驗證，呼叫 DAO/服務層，並透過 revalidatePath 觸發 UI 快取失效。
```js
"use server";

import { revalidatePath } from "next/cache";
import * as itemService from "@/app/services/itemService";

export async function listItems() {
  return itemService.getAll();
}
```
將 db.ts（純連接）與 itemService.ts（純 DAO 查詢）分離，可確保嚴格遵守單一職責原則，使您的 Next.js 後端像傳統的企業後端架構一樣模組化、可測試和可維護。

## 後端流程
1. 連線層 (lib/db.ts)

職責：專責建立與管理 MySQL 連線池（Connection Pool）。

運作：維護單例模式的連線實例，提供底層的 pool 供資料存取層引入使用。
* 記得設定環境變數

2. 資料存取與型別層 (services 與 types.ts)

職責：實作資料庫的 CRUD 操作與型別安全。

運作：引入 db.ts 的 pool，並結合 types.ts 定義的介面（如 Item, CreateItemInput），封裝所有的 SQL 查詢、參數綁定與資料列轉換，對上層提供乾淨的資料操作介面。

3. 業務與動作層 (actions/item.ts)

職責：專注於業務邏輯、請求解析與快取控制。

運作：加上 "use server" 宣告，引入 itemService。負責接收客戶端傳來的 FormData、進行資料驗證與轉換，呼叫 Service 層執行資料庫異動，最後透過 revalidatePath 觸發畫面的快取更新。

#### 資料庫
```sql
CREATE DATABASE IF NOT EXISTS nextjs_db;
USE nextjs_db;

CREATE TABLE IF NOT EXISTS items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  done BOOLEAN NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO items (title, done) VALUES 
('學習 Next.js 全端架構', 1),
('設定 MySQL 資料庫連線', 1),
('實作 Server Actions 與 Service 層', 0),
('測試 API 與 CRUD 功能', 0);
```
