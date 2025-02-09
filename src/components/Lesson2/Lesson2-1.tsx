import { useEffect, useState } from "react";

const Lesson2_1 = () => {
    // 何かしらの副作用が実行された場合に実行するのがuseEffect
    // 副作用とは、データの取得や更新など、ユーザーの操作によらないもの
    // 例：リアルタイムにデータを更新する、データ取得のAPIを実行後の発火する時にデータフェッチしたいなど

    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        function handleMove(e: PointerEvent) {
            setPosition({ x: e.clientX, y: e.clientY})
        }
        // ウィンドウオブジェクトはJSXでは表現できないため、
        // ウィンドウオブジェクトのポインターが移動したときに発火する副作用を実行する必要がある
        window.addEventListener("pointermove",handleMove)

        // クリーンアップ関数
        // コンポーネントがアンマウントされたときに実行される
        // アンマウントとは、コンポーネントがDOMから削除されること
        // クリーンアップ関数を使用することで、メモリリークを防ぐことができる
        return () => {
            window.removeEventListener("pointermove", handleMove)
        }
    }, [])


    return (
        <div
            style={{
                position: "absolute",
                backgroundColor: "blue",
                borderRadius: "50%",
                opacity: 0.6,
                pointerEvents: "none",
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -20,
                top: -20,
                width: 50,
                height: 50,
            }}>
            <p>lesson2-1</p>
        </div>
    )
}

export default Lesson2_1;
