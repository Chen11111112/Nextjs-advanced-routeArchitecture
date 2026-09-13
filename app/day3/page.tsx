// 父層，負責從後端拿資料
import { listItems, createItem } from "@/app/day3/actions/items";
import ItemCard from "@/app/day3/components/Child";
import styles from "@/app/day3/page.module.scss";

export default async function Page() {
  const items = await listItems(); // GetAll取得清單內所有內容

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>待辦事項清單</h1>

      {/* server action的表單寫法：直接將後端寫在標籤內 */}
      <form action={createItem} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="輸入新的待辦事項..."
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          新增
        </button>
      </form>

      <ul className={styles.list}>
        {items.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}