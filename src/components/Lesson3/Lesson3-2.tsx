import { RefObject, useRef } from "react";

const Lesson3_2 = () => {

    const listRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null)
    ;
    const scrollToIndex = (index:number) => {
        console.log(listRef)
        const listNode = listRef.current
        const imgNode = listNode?.querySelectorAll("li > img")[index]
        console.log(imgNode)

        imgNode?.scrollIntoView({
            behavior:"smooth",
            block:"nearest",
            inline:"center"
        })
        // このように、DOMの要素に対して何かしらのjs操作を加えたいときuseRefを使用する
        // useRefを使用してDOM要素を取得⇒要素に対してアニメーションを使用する
        // 例：スクロール制御

        // Lesson6-1参照：FormタグのDOM情報を取得したいときに使用。
    };

    return (
        <div>
            <nav>
                <button onClick={() => scrollToIndex(0)}>Cat1</button>
                <button onClick={() => scrollToIndex(1)}>Cat2</button>
                <button onClick={() => scrollToIndex(2)}>Cat3</button>
            </nav>
            <div style={{ overflow: "auto", maxWidth: "700px", margin: "auto" }}>
                <ul
                    className="flex items-center justify-between"
                    style={{ minWidth: "1300px" }}
                    ref={listRef}
                >
                    <li>
                        <img src="https://t3.ftcdn.net/jpg/02/36/99/22/240_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg" alt="Cat 1" />
                    </li>
                    <li>
                        <img src="https://t4.ftcdn.net/jpg/03/03/62/45/240_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg" alt="Cat 2" />
                    </li>
                    <li>
                        <img src="https://t4.ftcdn.net/jpg/00/74/15/95/240_F_74159556_67n5823V7Ei87a4g6JJnYHC0yMSo1AEy.jpg" alt="Cat 3" />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Lesson3_2