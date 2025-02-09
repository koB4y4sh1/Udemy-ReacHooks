import { useRef, useState } from "react";

const Lesson3_3 = () => {

    // const [inputText, setInputText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // useRefを使用することで、再レンダリングされない
    // そのため、重たい処理がある場合はuseRefでチューニングすることができる
    console.log("renderd")


    const handleClick = () => { 
        // alert(inputText)
        alert(inputRef.current?.value)
    };

    return (
        <div>
            <input
                type="text"
                className="border-b"
                // value = {inputText}
                // onChange={(e) => setInputText(e.target.value)} 
                
                // ref属性を指定することでuseRefが機能する
                ref={inputRef}
                />
            <button onClick={handleClick}>input入力値を見る</button>
        </div>
    )
};

export default Lesson3_3;