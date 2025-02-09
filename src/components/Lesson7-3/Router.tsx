import { useState, useTransition } from "react"
import Layout from "./Layout";
import ArtistPage from "./ArtistPage";
import IndexPage from "./IndexPage";

const Router = () => {
    const [page, setPage] = useState("/");
    const [isPending, startTansition] = useTransition();

    function navigate(url: string) {
        startTansition(() => setPage(url));
    }

    let content;
    if (page === "/") {
        content = <IndexPage navigate={navigate} />;
    } else if (page === "/the-beatles") {
        content = (
            <ArtistPage
                artist={{
                    id: "the-beatles",
                    name: "The Beatles"
                }}
            />
        );
    };
    return <Layout isPending={isPending}>{content}</Layout>
}

export default Router;