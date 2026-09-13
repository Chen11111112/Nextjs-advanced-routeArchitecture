import VirtualList from '@/app/day2/components/VirtualList';
import UseMemoVS from '@/app/day2/components/UseMemoVS';

export default function Page() {
  // 產生 10 萬筆模擬資料
  const massiveData = Array.from({ length: 100000 }, (_, i) => `這是第 ${i + 1} 筆資料`);

  return (
    <div style={{ padding: '20px' }}>
      <h1>虛擬滾動高效列表 (100,000 筆)</h1>
      <VirtualList 
        items={massiveData} 
        itemHeight={40}   
        windowHeight={400} 
      />
      <h1>useMemo 優化虛擬滾動高效列表</h1>
      <UseMemoVS 
        items={massiveData} 
        itemHeight={40}   
        windowHeight={400} 
      />
    </div>
  );
}