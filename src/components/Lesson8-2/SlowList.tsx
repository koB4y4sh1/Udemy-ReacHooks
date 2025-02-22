import { memo } from "react";

const SlowList = memo(function SlowList({ text }: { text: string }) {
    console.log("[ARTIFICIALLY SLOW] Rendering 200 <SlowItem />");

    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(<SlowItem key={i} text={text} />);
    }
    return <ul className="items">{items}</ul>
});

function SlowItem({ text }: { text: string }) {
    const startTime = performance.now();
    while (performance.now() - startTime < 1) {

    }

    return <li className="item">Text: {text}</li>
}

export default SlowList;