import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

type User = {
    id: string;
    username: string;
    email: string;
}

// AuthProviderとコンポーネントとの接点（境界）になるため、個人的にはtypeよりinterfaceが適している
interface AuthContextType {
    user: User | null;
    login: (userInfo: User) => void,
    logout: () => void
}

// useContextの事前準備
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    // contextの作成
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be with in a AuthProvider")
    }
    return context
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // 認証関数は各コンポーネントで使用されることを想定しメモ化する
    // 1つのコンポーネントでの仕様の場合は逆にメモリを過剰使用するため、メモ化はしない

    // 認証関数のloginとlogoutの実装
    // 認証関数を再レンダリングしないようにメモ化をする
    const login = useCallback((userInfo: User) => {
        if (
            userInfo.username === "testUser" &&
            userInfo.email === "test@gmail.com"
        ) {
            setUser(userInfo);
            console.log("Login!")
        } else {
            console.log("cant logged in");
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        console.log("Log out");
    }, []);

    // user,login,logoutが変更されたときに再レンダリングされるように
    const contextValue = useMemo(() => ({
        user,
        login,
        logout
    }), [user, login, logout])

    return (
        // ラップしたコンポーネントに渡したい値をvalueへ代入する
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;