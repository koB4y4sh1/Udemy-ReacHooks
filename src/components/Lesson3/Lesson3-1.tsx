import { useRef, useState } from "react";

const Lesson3_1 = () => {

    const [input, setInput] = useState<string>("");
    const ref = useRef(0);

    console.log(ref.current);


    function handleClick() { 
        // 値は変更されるが、コンポーネント自体は再レンダリングされない
        // ただ値を書き換えたいときに有用
        ref.current = ref.current+1
        // またuseStateでの再レンダリング時にも値を保持している
        alert("You clicked "+ref.current)
    }

    return (
        <div>
            
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Click me!</button>
            <p></p>
        </div>
    );
};

export default Lesson3_1;