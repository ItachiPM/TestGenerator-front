import {apiUrl} from "../../config/api";

export const fetchFunction = async (address: string) => {
    const res = await fetch(`${apiUrl}/${address}`)
    return res.json()
}
