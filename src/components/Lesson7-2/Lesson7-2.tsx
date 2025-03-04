import { usePageNumber } from "./hooks/usePageNumber";
import Issues from "./Issues";

const Lesson7_2 =() => {
    const {page, isPending,incrementPage, decrementPage} = usePageNumber();
    
    return (
        <div>
            <button
                onClick={decrementPage}
                className="border-2 px-4 py-2 border-slate-600 mr-2"
            >
                Back
            </button>
            <button
                onClick={incrementPage}
                className="border-2 px-4 py-2 border-slate-600 mr-2"
            >
                Next
            </button>
            <div>{isPending&& "Loading..."}</div>
            <Issues page={page} />
        </div>
    )
}

export default Lesson7_2;