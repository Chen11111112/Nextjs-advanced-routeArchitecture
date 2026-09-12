// 這裡是父層元件（page）

import Child from '@/app/day1/components/Child'

export default async function Page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <>
            <Child users = {users}/>
        </>
    )

}