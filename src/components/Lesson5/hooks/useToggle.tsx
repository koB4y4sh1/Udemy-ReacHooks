import { useCallback, useState } from "react"

export const useToggle = (initialState: boolean):[boolean, () => void] => {

    console.log("Toggle Renderd")
    const [state, setState] = useState<boolean>(initialState)

    // 関数をメモ化する　⇒　useCallback
    // const toggleは、ParentCount押下時に再生成される。
    // 関数の再生成を防ぐため、useCallbackでconst内容を永続化（キャッシュ化）する。
    const toggle = useCallback(() => {
        setState((state) => !state);
    },[]);

    return [state, toggle]
}