"use server";

import { revalidatePath } from "next/cache";
import * as itemService from "@/app/day3/lib/itemServices";

export async function listItems() {
  return itemService.getAll();
}

export async function createItem(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) return;
  await itemService.create({ title });
  revalidatePath("/page");
}

export async function patchItem(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;
  const titleRaw = formData.get("title");
  const doneRaw = formData.get("done");
  const input: { title?: string; done?: boolean } = {};
  if (titleRaw !== null && String(titleRaw).trim()) {
    input.title = String(titleRaw).trim();
  }
  if (doneRaw !== null) {
    input.done = doneRaw === "on" || doneRaw === "true" || doneRaw === "1";
  }
  await itemService.patch(id, input);
  revalidatePath("/page");
}

export async function deleteItem(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;
  await itemService.remove(id);
  revalidatePath("/page");
}

// day3 範例中未被使用的後端：
export async function getItem(id: number) {
  return itemService.getById(id);
}
export async function replaceItem(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = String(formData.get("title") ?? "").trim();
  const done = formData.get("done") === "on" || formData.get("done") === "true";
  if (!id || !title) return;
  await itemService.replace(id, { title, done });
  revalidatePath("/page");
}