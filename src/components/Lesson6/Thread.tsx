import { useRef, useOptimistic } from "react"
import { Message } from "./Lesson6-1"

const Thread = ({ messages, sendMessage }: { messages: Message[], sendMessage: (formData: FormData) => Promise<void> }) => {

    const formRef = useRef<HTMLFormElement>(null);

    const formAction = async (formData: FormData) => {
        // e.preventDefault();
        // const formData = new FormData(formRef.current!);
        // 楽観的UI更新
        addOptimisticMessage(formData.get("message"))
        formRef.current?.reset();
        await sendMessage(formData);
    };

    // useOptimistic(state, update)
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state: Message[], newMessage: Message) => [
            ...state,
            {
                text: newMessage,
                sending: true,
            }
        ]);

    return (
        <div>
            {optimisticMessages.map((message: Message, index: number) => (
                <div key={index}>{message.text} {!!message.sending && <small>送信中...</small> }</div>
            ))}
            <form action={formAction} ref={formRef}>
                <input
                    type="text"
                    name="message"
                    className="border-2 px-2 py-2 rounded-md"
                    placeholder="Hello"
                />
                <button
                    type="submit"
                    className="border-2 px-2 py-2 rounded-md ml-2"
                >
                    送信
                </button>
            </form>
        </div>
    )
}

export default Thread;