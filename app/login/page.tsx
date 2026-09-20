import type { Metadata } from 'next';
import { LoginForm } from '@/components/login-form';

export const metadata: Metadata = {
  title: '登入',
  description: '完整登入頁。從精選相簿以 (...)login 攔截時，會改以模態框呈現。',
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-4 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Full Route</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-100">登入</h1>
      <p className="mt-3 mb-8 text-sm leading-6 text-slate-400">
        直接造訪或重新整理這個網址時，會看到完整頁面而不是模態框。
      </p>
      <LoginForm />
    </main>
  );
}
