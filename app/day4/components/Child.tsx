// 子層，負責使用者的互動
"use client";

import { useTransition } from "react";
import { patchItem, deleteItem } from "@/app/day3/actions/items";
import styles from "@/app/day3/page.module.scss";

interface Item {
  id: number;
  title: string;
  done: boolean;
  created_at: string;
}

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  const [isPending, startTransition] = useTransition();

  const handleToggle = (newDone: boolean) => {
    const formData = new FormData();
    formData.append("id", String(item.id));
    formData.append("done", String(newDone));

    // startTransition 讓使用者互動的操作不會阻塞 UI
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 模擬延遲
      await patchItem(formData);
    
    });
  };

  const handleDelete = () => {
    const formData = new FormData();
    formData.append("id", String(item.id));

    startTransition(async () => {
      await deleteItem(formData);
    });
  };

  return (
    <li className={styles.card}>
      
      <label className={styles.left}>
        <input
          type="checkbox"
          checked={item.done}
          disabled={isPending}
          onChange={(e) => handleToggle(e.target.checked)}
          className={styles.checkbox}
        />
        <span className={`${styles.title} ${item.done ? styles.done : ""}`}>
          {item.title}
          {isPending && <p>Loading...</p>}
        </span>
      </label>

      <div className={styles.right}>
        <span className={styles.date}>
          {new Date(item.created_at).toLocaleString()}
        </span>
        <button
          type="button"
          disabled={isPending}
          onClick={handleDelete}
          className={styles.deleteButton}
        >
          刪除
        </button>
      </div>
    </li>
  );
}
