'use client';

import { useState } from 'react';

// 定義 User 型別
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export default function Child({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <>
      <div className="container">
        <p className="hint">點擊用戶查看詳細資訊</p>
        <ul className="user-list">
          {users?.map((u) => (
            <li 
              key={u.id} 
              className="user-item"
              onClick={() => setSelectedUser(u)}
            >
              <span className="name">{u.name}</span>
              <span className="email">{u.email}</span>
            </li>
          ))}
        </ul>
      </div>

      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedUser.name}</h2>
            <div className="modal-body">
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Website:</strong> {selectedUser.website}</p>
              <p><strong>Company:</strong> {selectedUser.company.name}</p>
            </div>
            <button className="close-btn" onClick={() => setSelectedUser(null)}>
              關閉視窗
            </button>
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </>
  );
}

const styles = `
  .container {
    padding: 2rem;
    background-color: #0b0f19;
    color: #f3f4f6;
    max-width: 600px;
    margin: 2rem auto;
    border-radius: 1rem;
    border: 1px solid #374151;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .hint {
    font-size: 0.95rem;
    color: #9ca3af;
    margin-bottom: 1.25rem;
    text-align: center;
  }

  .user-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .user-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f2937;
    border: 1px solid #374151;
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .user-item:hover {
    background-color: #374151;
    border-color: #4b5563;
  }

  .user-item .name {
    font-weight: 600;
    color: #f9fafb;
  }

  .user-item .email {
    font-size: 0.875rem;
    color: #9ca3af;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
  }

  .modal-content {
    background-color: #1f2937;
    border: 1px solid #4b5563;
    padding: 2rem;
    border-radius: 1rem;
    width: 90%;
    max-width: 400px;
    color: #f3f4f6;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
  }

  .modal-content h2 {
    margin-top: 0;
    margin-bottom: 1.25rem;
    color: #60a5fa;
    font-size: 1.5rem;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    color: #9ca3af;
  }

  .modal-body strong {
    color: #f3f4f6;
  }

  .close-btn {
    width: 100%;
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .close-btn:hover {
    background-color: #2563eb;
  }
`;