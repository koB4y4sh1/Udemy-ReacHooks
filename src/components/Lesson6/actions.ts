// メッセージ送信前に、1.5秒停たってからメッセージを送信する関数
export const deliverMessage = async (message:string) => {
    await new Promise((res) => setTimeout(res, 1500)); // APIフェッチング中を想定

    return message;
}