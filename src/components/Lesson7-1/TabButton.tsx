import { useTransition } from "react";

const TabButton = ({ children, isActive, onClick }: { children: string; isActive: boolean, onClick: () => void }) => {

    const [isPending, startTransition] = useTransition();

    if (isActive) {
        return (
            <button className="border-2 px-2 py-2 rounded-md ml-2 bg-orange-200">
                {children}
            </button>
        )
    }

    if (isPending) {
        return <div>Loading ...</div>
    }

    return (
        <button
            onClick={() => {
                startTransition(() => { onClick(); });
            }}
            className="border-2 px-2 py-2 rounded-md ml-2 "
        >
            {children}
        </button>

    )
}

export default TabButton;