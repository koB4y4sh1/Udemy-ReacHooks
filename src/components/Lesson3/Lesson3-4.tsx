import { useRef } from "react";
import { MyVideoPlayer } from "./MyVideoPlayer";

const Lesson3_4 = () => {

    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div>
            <button onClick={() => videoRef.current?.play()}>Play</button>
            <button onClick={() => videoRef.current?.pause()}>Pause</button>
            <br />
            <MyVideoPlayer
                src="https://v.ftcdn.net/09/65/46/27/700_F_965462763_XBDwqlug7dQVB0d7SCCp5mkRB2stKSK8_ST.mp4"
                type="video/mp4"
                width="250"
                ref={videoRef}
            />
        </div>
    )
}

export default Lesson3_4;