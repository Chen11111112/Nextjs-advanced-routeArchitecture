# Day 0

## Layout
Layout 可以是一個 Server Component，也就是說權限驗證（Authentication Guard）、共用資料預取（Data Prefetching）（例如大頭貼、權限清單），可以在 Layout 內先 fetch 一次，再透過 React Context 或直接往下傳遞，避免每個子頁面重複發送相同的 API 請求。

## SEO
搜尋引擎（如 Google）非常依賴 HTML 標籤來理解頁面結構。直接用 <main> 把核心內容包起來，讓爬蟲一眼就能辨識出「這是一篇內容導向的網頁（例如部落格、文章或重要資訊頁）」。
而在 Next.js App Router 中，layout.tsx 可以直接導出 metadata。這讓搜尋引擎能夠正確讀取網頁標題（Title）、描述（Description）以及 Open Graph（用於社群分享預覽），省去額外寫 Head 標籤的麻煩。

## Tailwind CSS
Tailwind CSS 是一個以工具類別（Utility-first）為核心的 CSS 框架，提供如 bg-blue-500、flex、text-center 等現成的原子級樣式類別。

具備強大的響應式設計支援、容易透過設定檔自定義設計系統（Design System），且內建 Purge/Tree-shaking 機制，在打包時會自動移除未使用的樣式，確保生產環境的檔案體積非常輕量。

## Link & router
在 Next.js 中，`<Link>` 元件和 `router.push()`（透過 `useRouter`  HOOK 取得）都是用來實現**客戶端導航（Client-side Navigation）**、達成換頁不重整網頁的效果。

它們的核心差異在於「觸發換頁的時機與情境」：

`<Link>` 是 Next.js 內建的 HTML 標籤替代方案（底層其實就是 `<a>` 標籤）。

* **使用情境**：適合用於**靜態的導覽列、選單、文章列表、按鈕連結**等使用者一眼就能看見並點擊的地方。
* **自動預載入（Prefetching）**：當 `<Link>` 出現在使用者的視口（Viewport）中時，Next.js 會自動在背景悄悄預先下載該頁面的程式碼。因此當使用者真正點擊下去時，幾乎是**秒開**，體驗極佳。
* **SEO 友善**：它渲染出來的 HTML 是一個標準的 `<a href="...">` 標籤，搜尋引擎的爬蟲可以輕易抓取連結。
* **無障礙支援（Accessibility）**：天生支援鍵盤 Tab 鍵切換、螢幕閱讀器等。

`router.push()` 是一個 JavaScript 函式，透過呼叫它來手動觸發頁面跳轉。

* **使用情境**：適合用於**動態邏輯判斷後**的跳轉。例如：使用者按下「登入」按鈕，等後端驗證 API 回傳成功後，才跳轉到首頁。
* **需搭配事件觸發**：通常寫在 `onClick` 事件或 `async` 函式裡。
* **無法自動預載入**：因為它是透過程式碼邏輯觸發的，Next.js 無法預測使用者何時會觸發它（雖然也可以手動用 `router.prefetch()` 補救，但通常不會這樣做）。
* **非 HTML 連結**：它不是真正的 `<a>` 標籤，對 SEO 爬蟲來說沒有連結效益。
