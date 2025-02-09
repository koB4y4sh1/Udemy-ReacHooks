import { useState } from "react";
import { useAuth } from "./context/AuthContext";


const Lesson4_1 = () => {
    const [username, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const { user, login, logout } = useAuth();

    const handleLogin = () => {
        login({
            id: "1",
            username,
            email
        });

    };

    return (
        <div>
            {user ?(
                <div>
                    <p>ログイン済み：{user.username}</p>
                    {/* logout()だとレンダリング時にlogout関数が即座に実行される。logoutもしくは()=>logout()で実装すること */}
                    <button onClick={logout}>ログアウト</button>
                </div>
            ):(
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleLogin}>ログイン</button>
                </div>
            )}
        </div>
    )
}

export default Lesson4_1;