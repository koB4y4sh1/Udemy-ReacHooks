export async function fetchBio(user: string) {
    // 仮のネットワークレイテンシをシミュレートするために少し遅延させる
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const bio = `This is a bio of ${user}`
    return bio;
}