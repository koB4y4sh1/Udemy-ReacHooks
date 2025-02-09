import { useState } from 'react';

const Lesson1_1 = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');
    
    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        console.log(text)
    }

    const handleCount = () => {
        setCount(count + 1); // setCount(0+1)
        console.log(count); // 1
        setCount(count + 1); // setCount(0+1)
        console.log(count); // 1
        setCount(count + 1); // setCount(0+1)
        console.log(count); // 1
        // このように、setCountを複数回呼び出すと、
        // それぞれの呼び出しが非同期で実行されるため、
        // 最終的なcountの値が意図したものにならないことがある。

        // ここでhandleCountのバッチ処理が終了し、再レンダリングされる。
    };

    const handleCount2 = () => {
        setCount((prev) => prev + 1); //setCount((0) => 0+1)
        console.log(count); // 0 ⇒　3
        setCount((prev) => prev + 1); //setCount((1) => 1+1)
        console.log(count); // 0 ⇒　3
        setCount((prev) => prev + 1); //setCount((2) => 2+1)
        console.log(count); // 0 ⇒　3
        // このように、更新関数を使用すると、
        // それぞれの呼び出しがバッチ処理されるため、
        // 最終的なcountの値が意図したものになる。
    }

    // レンダリングされるタイミングについて記述する
    // 初回レンダリング
    console.log('first rendering');

    // 再レンダリング
    // 状態が更新されたときに発生する（ボタンを押したときなど）
    // 更新されるのは、useStateなどで値が更新するときである

    // 親コンポーネントが再レンダリングされたとき
    // 子コンポーネントも再レンダリングされる


    // コンソールに２回出力される（２回レンダリングされる）理由
    // これはStrictModeによるもので、
    // 開発モードでは、コンポーネントのマウントとアンマウントを２回行うため、２回レンダリングされることになる
    // これを行う理由は、関数コンポーネントが純関数であるかをチェックするためである
    // 純関数であるかをチェックすることで、コンポーネントが副作用を持っているかをチェックすることができる
    // 副作用を持っている場合は、useEffectなどを使用して副作用を管理する必要がある

    // 純関数とは、引数に依存して結果が変わらない関数である
    // つまり、引数が同じであれば、同じ結果が返る関数である
    // 純関数であるかをチェックすることで、コンポーネントが副作用を持っているかをチェックすることができる
    // 副作用を持っている場合は、useEffectなどを使用して副作用を管理する必要がある


        
    return (
        <>
            <input type="text" onChange={onChangeText} />
            <button 
                onClick={handleCount2}
                className='border p-2 rounded-md bg-red-100'
            >
                count
            </button>
            <p>{count}</p>
        </>
    );
};

export default Lesson1_1;
