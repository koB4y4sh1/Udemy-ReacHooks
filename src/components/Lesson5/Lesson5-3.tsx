import { useMemo, useState } from "react";

const Lesson5_3 = () => {
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);

    console.log("Renderd!!")
    const double = (count: number) => {

        console.log("double Renderd!!")
        //重い処理
        let i = 0;
        while (i < 10000000) i++;

        return count * 2
    }

    // 値をメモ化する　⇒　useMemo
    const doubleCount = useMemo(() => double(count2),[count2]);

    return (
        <div>
            <p>Counter: {count1}</p>
            <button
                onClick={() => setCount1(count1 + 1)}
                className="border-2 px-2 py-2 rounded-md"
            >
                Increment count1
            </button>
            <br />
            <p>Counter: {count2}, {doubleCount}</p>
            <button
                onClick={() => setCount2(count2 + 1)}
                className="border-2 px-2 py-2 rounded-md"
            >
                Double count2
            </button>
        </div>
    )
}

export default Lesson5_3;