import useSWR from "swr";
import {cache } from "swr/_internal"
const fetcher = (url:string) => fetch(url).then(r => r.json())

const Lesson2_3:React.FC = () => {

    // カスタムフックを使用してユーザー情報を取得
    // const {user, loading} = useFetchUser(5);
    const {data:user, error , isLoading:loading} = useSWR(`https://jsonplaceholder.typicode.com/users/6`,fetcher)
    console.log(cache);
    if (loading) {
        return <p>Loading...</p>
    }

    if(!user) {
        return <p>ユーザーが見つかりません</p>
    }

    return (
        <div>
            <h1>ユーザー情報</h1>
            <p><strong>名前:</strong> {user.name}</p>
            <p><strong>ユーザー名:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>年齢:</strong> {user.age}</p>
        </div>
    );
}

export default Lesson2_3;