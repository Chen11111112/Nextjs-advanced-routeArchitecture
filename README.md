# Next.js Full-Stack Practice Project 🚀

你好！歡迎來到本教學專案！本專案旨在透過實際路由與畫面，帶領開發者掌握現代 Next.js App Router 的核心觀念。

* **聚焦 App Router**：本專案**不會**花時間講解過於基礎的 React 語法（如 `useState`、`useEffect` 基本操作等）。
* **核心練習**：特殊檔案慣例、平行路由、攔截路由，以及 `sitemap.ts` / `robots.ts` 等 SEO 動態檔案。

---

## 📁 專案怎麼走

用真正的網址學路由，不是 `day-01` 資料夾。啟動後從首頁進入三條路線：

| 路徑 | 在練什麼 |
| --- | --- |
| `/` | 全站 `layout`、`template`、`error`、`loading`、`not-found` |
| `/dashboard` | 平行路由：`@sidebar`、`children`、`@analytics` |
| `/gallery` | 攔截路由：`(.)`、`(..)`、`(...)` 模態框 |
| `/login` | 完整頁；從精選相簿攔截時會改以模態框呈現 |

路由放在 `app/`，共用 UI 放在 `components/`，模擬資料與網站設定放在 `lib/`。

---

## 🛠️ 技術核心 (Tech Stack)

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Styling**: Tailwind CSS
* **Language**: TypeScript
* **Rendering**: Server Components (RSC)

---

## 🚀 快速開始

```bash
npm install
npm run dev
```

瀏覽器開啟 [http://localhost:3000](http://localhost:3000)。

---

## 🤝 貢獻與回饋

如果你在學習過程中發現任何問題、Bug，或是想提供更好的實作建議，歡迎隨時透過 Pull Request 或 Issues 一起交流成長！
