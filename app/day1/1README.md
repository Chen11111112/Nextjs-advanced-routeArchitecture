# Day 1

## use client/server
在 Next.js App Router 中，預設採用 React Server Components (RSC) 架構，所有 Components 在預設情況下都在 Server 端執行，
為了明確區分 Server 與 Client 程式碼的執行環境，需要透過 'use client' 來切換。
* **預設 Server Render（Zero-Bundle-Size RSC）**： App Router 的 Components 預設是 Server  Components 。它們直接在 Server 上 Render 成 HTML，不需將 JavaScript 程式碼下載到使用者的 Browser ，能大幅提升網頁載入速度與效能。

* **支援互動與 Browser API**：  Server 端無法存取 Browser 專屬的環境與互動邏輯。所以當你使用到以下互動特性時，需寫在 Client 端：
    * 狀態與生命週期 Hooks（如 useState, useEffect, useReducer）
    * 使用者互動事件（如 onClick, onChange, onSubmit）
    *  Browser 專屬 API（如 window, document, localStorage, navigator）

建立模組邊界（Boundary）： 'use client' 是一個明確的指令，用來告訴打包工具（如 Webpack 或 Turbopack）：「從這個檔案開始到其所有子 Components ，必須被打包並送到 Browser 執行（Client-Side Rendering）。」

> 這樣的設計讓開發者能在同一個專案中自由混用伺服器與客戶端渲染，兼顧快速的初始載入（Server-side）與豐富的前端互動性（Client-side）。

## Components
在 Next.js App router 全端框架中的前端中，父層（ Server Component ）負責抓資料，子層（Client Component）負責互動與狀態（useState、彈跳視窗）。

## 事件冒泡（Event Bubbling）
當你在網頁上點擊一個元素時，這個點擊事件不只會觸發該元素本身，還會像水波一樣往外擴散，依序觸發所有父層元素的點擊事件。
* 外層遮罩（modal-overlay）綁定了 onClick={() => setSelectedUser(null)}，目的是讓使用者「點擊半透明背景時能關閉視窗」。  
* 內層內容（modal-content）包含了文字與按鈕。  

當使用者點擊彈跳視窗「裡面」的文字或空白處時，如果不加 e.stopPropagation()，這個點擊事件會往外冒泡到外層遮罩，誤導系統以為使用者「點擊了背景」，進而導致彈跳視窗瞬間被關閉。加入後，它能確保「點擊視窗內部時，事件就此打住，不會傳遞給外層背景」。

## 動態注入 CSS
在 Child.tsx 檔案最下方，宣告了一個很大的 CSS 字串 const styles = \...`;`。
但是光寫一個 JavaScript 變數，瀏覽器是不會懂它是樣式的，它只是一段普通的文字。 
因此，會需要透過寫入 `<style dangerouslySetInnerHTML={{ __html: styles }} />` 把這段 CSS 字串變成網頁上的 `<style>` 標籤，直接塞進 HTML 裡面，讓瀏覽器去讀取並套用這些樣式。
* **dangerouslySetInnerHTML**：這是 React 的一個屬性（屬性名稱故意取得很長、帶有 warning 意味），用來直接把「字串」當作原生的 HTML/CSS 塞進元件裡。
* **失去 IDE 提示**：因為 CSS 被包在字串 `...` 裡面，編輯器通常不會幫你做 CSS 的自動完成或語法檢查（Syntax Highlighting）。
* **效能與效法問題**：就像我們前面討論過的，如果 Next.js 在 Server 端與 Client 端渲染時，這個動態注入的 <style> 產生了時間差或水合（Hydration）衝突，就會導致 CSS 失效，畫面直接崩壞（例如彈跳視窗的樣式不見）。