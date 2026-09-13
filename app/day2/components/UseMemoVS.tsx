'use client';

import React, { useState, useMemo } from 'react';

interface VirtualListProps {
  items: string[];
  itemHeight: number;
  windowHeight: number;
}

export default function UseMemoVS({ items, itemHeight, windowHeight }: VirtualListProps) {
  const [scrollTop, setScrollTop] = useState(0);

  // 總列表高度不需要隨滾動改變，也可以用 useMemo 或直接計算
  const totalHeight = items.length * itemHeight;

  // 利用 useMemo 快取切片與索引計算結果
  const { startIndex, visibleItems, offsetY } = useMemo(() => {
    const visibleCount = Math.ceil(windowHeight / itemHeight);
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - 2);
    const end = Math.min(items.length, start + visibleCount + 4);
    
    return {
      startIndex: start,
      visibleItems: items.slice(start, end),
      offsetY: start * itemHeight,
    };
  }, [scrollTop, items, itemHeight, windowHeight]);

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
      <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
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
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}