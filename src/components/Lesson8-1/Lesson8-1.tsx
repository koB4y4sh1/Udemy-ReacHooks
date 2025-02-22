import { Suspense, useDeferredValue, useState } from "react";
import SearchResult from "./SearchResult";

const Lesson8_1 = () => {
  const [query, setQuery] = useState("");
  // 値を遅延する。
  // ↑値が更新されるまで、前の値（検索結果）を表示し再レンダリングを防ぐ⇒UXの向上
  // 検索のたびに再レンダリングし、パフォーマンス低下を防ぐことができる
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <label>
        アルバム検索
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`border-2 px-3 py-3 rounded-md ${query !== deferredQuery ? 'opacity-20' : 'opacity-100'}`}
        />
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResult query={deferredQuery} />
        </Suspense>
      </label>
    </div>)
};

export default Lesson8_1;