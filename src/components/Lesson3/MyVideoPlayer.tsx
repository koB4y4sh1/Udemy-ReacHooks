import { forwardRef } from "react";

type MyVideoPlayerProps = {
    width: string;
    type: string;
    src: string;
    // 独自コンポーネントだとref属性で渡しても機能しない
    // ref:any;
};

// forwardRefでラップすることで、独自コンポーネントでもuseRefを使用できる
export const MyVideoPlayer = forwardRef<HTMLVideoElement,MyVideoPlayerProps>(
        (props, ref)=>{
        return (
            <video width ={props.width} ref={ref}>
                <source src={props.src} type={props.type}/>
            </video>
        )
    }
)