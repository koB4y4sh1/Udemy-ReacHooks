import { memo, useState } from "react";

const Lesson5_1 = () => {
    const [count1,setCount1] = useState<number>(0);
    const [count2,setCoutn2] = useState<number>(0);

    console.log("Rendering!!")

    return (
        <div>
            <button
                onClick={() => setCount1(count1+1)}
                className="border-2 px-2 py-2 rounded-md" 
            >
                Parent Count
            </button>
            <button
                onClick={() => setCoutn2(count2+2)}
                className="border-2 px-2 py-2 rounded-md ml-2"
            >
                Child Count
            </button>
            <p>Parent: {count1}</p>
            <Child count2={count2} />
        </div>
    )
};

// 重い処理のため、メモ化する（親コンポーネントがレンダリングしても、再レンダリングしない）メモリに保存される
// 以下の記述で第一引数props (count2)が変更されたときに再レンダリングされる
const Child = memo(({count2}:{count2:number}) => {

    console.log("Child Rendering")

    // 重い処理が発生する（あまりレンダリングしたくない）
    // アプリケーションの負荷が大きいときがメモ化のタイミング（反応までに3秒かかるなど）
    let i=0;
    while (i <100000000) i++;
    return <p>Child: {count2}</p>;
});

export default Lesson5_1;