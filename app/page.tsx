// page.tsx
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  const totalDays = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <span className={styles.badge}>教學專案</span>
        <h1 className={styles.title}>Next.js 全端實戰訓練</h1>
        <p className={styles.description}>
          你好！歡迎來到本教學專案！
          本專案聚焦於 <strong>Next.js App Router</strong> 與 <strong>Server Actions</strong> 等全端核心實現（跳過基礎的 React 語法）。
        </p>
        <div className={styles.actions}>
          <Link href="https://hyc.eshachem.com/" target="_blank" className={styles.githubBtn}>
            我的網站
          </Link>
          <Link href="https://eminent-glider-8c3.notion.site/Next-js-93b94cbf6abf4675a28850821a725f7b" target="_blank" className={styles.githubBtn}>
            基礎 React
          </Link>
          <Link href="https://github.com/你的帳號/你的專案庫" target="_blank" className={styles.githubBtn}>
            前往 GitHub 專案庫
          </Link>
        </div>

        <div className={styles.features}>
          <div className={styles.card}>
            <h3>📁 學習方式</h3>
            <p>透過專案中的各個 <code>dayx</code> 資料夾進行學習。每個資料夾皆附有專屬的 README，詳細說明該單元的實作內容與重點。</p>
            我故意用 <strong>Day</strong> 而非 Chapter 命名，
            希望大家能維持「一天專心學一種技術」的節奏穩扎穩打。
          </div>
          <div className={styles.card}>
            <h3>🚀 技術核心</h3>
            <p>深入探討現代 Next.js 全端開發架構，包含 Server Component、Client Component 協作與 Server Actions 資料互動。</p>
          </div>
        </div>
        <div className={styles.navigationSection}>
          <h2 className={styles.navTitle}>選擇你的學習天數 (Day)</h2>
          <div className={styles.buttonGrid}>
            {totalDays.map((day) => (
              <Link key={day} href={`/day${day}`} className={styles.dayButton}>
                Day {day}
              </Link>
            ))}
          </div>
        </div>

        
      </div>
    </main>
  );
}