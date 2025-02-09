import { useCallback, useMemo, useState, useTransition } from "react"

export const usePageNumber = () => {
    const [page, setPageNumber] = useState<number>(1)
    const [isPending, startTansition] = useTransition();

    // UIブロッキングされないため、２回連続押した場合は２回目処理が優先される。
    // ※ １回目の読み込みが長くても、押下時は２回目の処理が実行され、優先度の低い１回目は中断される
    // ページネーションで連続でクリックした場合も最後のページがスムーズに表示される。
    const incrementPage = useCallback(() => {
        startTansition(()=>setPageNumber((p) => p + 1));
    }, []);

    const decrementPage = useCallback(() => {
        startTansition(()=>setPageNumber((p) => Math.max(p - 1, 1)));
    },[]);
// Suspenseを使用することで、子要素が読み込みを完了するまでフォールバック（代替）を表示することができる。
    return useMemo(()=>({ page,isPending, incrementPage, decrementPage }),[page,isPending,incrementPage,decrementPage])
}