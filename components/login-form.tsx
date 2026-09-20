'use client';

import { FormEvent, useState } from 'react';

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block space-y-2">
        <span className="text-sm text-slate-300">電子郵件</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-blue-500 focus:ring-2"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm text-slate-300">密碼</span>
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-blue-500 focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
      >
        登入
      </button>
      {submitted ? (
        <p className="text-sm text-emerald-300">這是攔截路由示範表單，不會送出真實憑證。</p>
      ) : null}
    </form>
  );
}
