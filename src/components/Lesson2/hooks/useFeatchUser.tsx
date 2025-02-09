import { useState,useEffect } from "react";

// ユーザー情報の型を定義
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    age: number;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}
export const useFetchUser = (userId: number) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    // 避難ハッチ
    useEffect(() => {
        let isMouted = true; // このフラグはコンポーネントのマウント状態を追跡します。

        const fetchUser = async () => {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                if(!response.ok){
                    throw new Error("データの取得に失敗しました");
                }
                const userData: User = await response.json();

                if(isMouted){
                    setUser(userData);
                    setLoading(false);
                }
            } catch(error){
                if(isMouted){
                    console.error("データの取得に失敗しました", error);
                    setLoading(false);
                }

            }
        }
        fetchUser();

        return () => {
            isMouted = false;
        }
    }, [userId]);

    return { user, loading };
}