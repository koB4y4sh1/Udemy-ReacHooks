import { memo, useState } from "react";
import { useToggle } from "./hooks/useToggle";

const Lesson5_2 = () => {

    const [count, setCount] = useState<number>(0);
    // カスタムフックを使用している
    // const [on, toggle] = useToggle(false);

    console.log("Parent renderd")

    return (
        <div>
            <p>Parent: {count}</p>
            <button
                onClick={() => setCount(count+1)}
                className="border-2 px-2 py-2 rounded-md"
            >
                Parent Count
            </button>
            <Child  />
        </div>
    )
};

export default Lesson5_2;

// コンポーネントをmemo化する ⇒ memo
// toggleが再生成されてしまうため、memoが意味をなさない。
const Child = memo(() =>{
    console.log("Child renderd");
    const [on, toggle] = useToggle(false)
    // 重い処理
    let i=0;
    while(i < 1000000)i++;
    return (
        <div>
            <p>Child: {on ? "ON": "OFF"}</p>
            <button
                onClick={toggle}
                className="border-2 px-2 py-2 rounded-md">
                    Toggle
                </button>
        </div>
    );
});