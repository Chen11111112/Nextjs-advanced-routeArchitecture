'use client';

import React, { useState } from 'react';

interface VirtualListProps {
  items: string[];
  itemHeight: number; // 每個項目的固定高度 (px)
  windowHeight: number; // 滾動視窗的高度 (px)
}

export default function VirtualList({ items, itemHeight, windowHeight }: VirtualListProps) {
  const [scrollTop, setScrollTop] = useState(0);

  // 總列表高度
  const totalHeight = items.length * itemHeight;

  // 可視區域內能容納的項目數量
  const visibleCount = Math.ceil(windowHeight / itemHeight);

  // 計算當前應該從第幾個索引開始渲染（多預留 2 個緩衝區避免滾動時白屏）
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 2);
  
  // 計算結束索引
  const endIndex = Math.min(items.length, startIndex + visibleCount + 4);

  // 當前渲染的切片資料
  const visibleItems = items.slice(startIndex, endIndex);

  // 計算當前列表整體的位移量（推動區塊讓它在正確的絕對位置滾動）
  const offsetY = startIndex * itemHeight;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: `${windowHeight}px`,
        overflowY: 'auto',
        position: 'relative',
        border: '1px solid #ccc',
      }}
    >
      {/* 撐開總高度的隱形區塊，用來製造正常的捲軸高度 */}
      <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
        {/* 實際渲染的可視內容區塊，透過 transform 隨捲動位移 */}
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => {
            const actualIndex = startIndex + index;
            return (
              <div
                key={actualIndex}
                style={{
                  height: `${itemHeight}px`,
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #eee',
                  boxSizing: 'border-box',
                }}
              >
                {item} (Index: {actualIndex})
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}