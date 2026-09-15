# Day 4

## useTransition
在傳統的 React 應用中，所有的狀態更新和非同步操作通常具有相同的優先級。當使用者點擊某個會觸發大量計算或網路請求的操作時，瀏覽器的主執行緒可能會被佔滿，導致畫面出現暫時的停格、按鈕無反應或輸入框延遲。

useTransition 透過將任務分為兩類來解決這個問題：

* 緊急更新 (Urgent Updates)：直接對應使用者的視覺與物理操作，例如輸入框打字、勾選 Checkbox、點擊按鈕。這些操作必須在毫秒內完成，給予使用者即時回饋。
* 非遷移更新 (Transitions)：指會改變畫面或觸發伺服器互動的背景任務（例如透過 Server Action 寫入資料、過濾大量資料列表）。React 會允許緊急更新隨時「打斷」或優先於這些非遷移任務執行。

```ts
const [isPending, startTransition] = useTransition();
```
* startTransition (函式)：將會改變狀態或執行非同步動作（如呼叫 Server Action）的程式碼包在其中。React 會將這段程式碼標記為低優先級。
* isPending (布林值)：用來追蹤該過渡狀態是否正在進行中。當非同步任務尚未結束時為 true，結束後自動轉為 `false」。

> startTransition能讓重要的先更新（使用者操作），比較不重要的（後端資料）在背景更新，避免讓使用者覺得網頁很卡

## 模擬延遲
```ts
await new Promise((resolve) => setTimeout(resolve, 1000)); // 模擬延遲
```
如果直接寫`〔筆畫〕await setTimeout(2000)`，程式完全不會等待。
透過`Promise`讓await暫停此async所有動做，直到Promise完成。