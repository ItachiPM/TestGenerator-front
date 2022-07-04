export const fetchFunction = async (address: string) => {
    const res = await fetch(`http://localhost:3001/${address}`)
    return res.json()
}
