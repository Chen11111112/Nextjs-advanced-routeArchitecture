export interface Item {
  id: number;
  title: string;
  done: boolean;
  created_at: string;
}

export interface CreateItemInput {
  title: string;
}

export interface UpdateItemInput {
  title?: string;
  done?: boolean;
}