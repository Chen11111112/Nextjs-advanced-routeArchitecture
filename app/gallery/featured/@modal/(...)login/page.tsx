import { LoginForm } from '@/components/login-form';
import { Modal } from '@/components/modal';

export default function RootInterceptedLoginModal() {
  return (
    <Modal title="從根路徑攔截 (...)login">
      <p className="mb-4 text-sm leading-6 text-slate-400">
        這是從精選頁攔截根路徑 `/login` 的模態框。重新整理會看到完整登入頁。
      </p>
      <LoginForm />
    </Modal>
  );
}
