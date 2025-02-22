import { useDeferredValue, useState } from "react";
import SlowList from "./SlowList";

const Lesson8_2 = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text)

  console.log("text" + text);
  console.log("deferred text" + deferredText)

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className={`border-2 border-slate-400 px-3 py-3 rounded-md`}
        value={text} 
        />
        {/* textの値が更新される（propsの値が変わる）ため、SlowListをメモ化しても、再レンダリングを防げない */}
        {/* 遅延された値をpropsに渡してあげることで、最終的なtextの値を用いた再レンダリング１回だけで済む */}
        <SlowList text={deferredText} />
    </div>
  );
};

export default Lesson8_2;