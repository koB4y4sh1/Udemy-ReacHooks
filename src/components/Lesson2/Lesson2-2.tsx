import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
    const [user, setUser] = useState<string>("")
    const [bio, setBio] = useState<string | null>(null)
    const [count, setCount] = useState(0);

    useEffect(() => {
        let ignore = false;
        const startFetching = async () => {
            const response = await fetchBio(user);
            console.log(response);
            if (!ignore) {
                setBio(response);
            }
        }
        startFetching();
        setCount(count + 1);

        // クリーンアップ関数
        // クリーンアップ関数はコンポーネントがアンマウントされたときに実行される
        // または、依存配列(第二引数)が変更された直前に実行される
        // そのため、ユーザーが選択した直後に、再度選択するとFetching中にクリーンアップ関数が実行される
        // つまり、setBioが実行されず、再度Fetchingが実行されるため、最終的な結果のみ表示する
        return () => {
            ignore = true;
        };
        // 依存配列を指定することで、selectの値が変わったときに、useEffectが実行される
        // 以下の場合、userが変わったときに、useEffectが実行される
        // 注意：依存配列にcountを指定すると無限ループになる
        // このように依存配列に指定する変数配列は、useEffectの中で変更しないこと
    },[user])


    return (
        <div>
            <select name="" id="" onChange={(e) => setUser(e.target.value)} value={user}>
                <option value="ShinCode">ShinCode</option>
                <option value="TestUser">TestUser</option>
                <option value="SampleUser">SampleUser</option>
            </select>

            <hr />

            <p className="text-black">{bio ?? "Loading..."}</p>
            <p className="text-black">{count}</p>
        </div>
    );
};

export default Lesson2_2;
