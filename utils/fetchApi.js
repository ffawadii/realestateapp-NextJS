
import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com"




export const fetchApi = async (url) => {
    const res = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'd7470e0af0mshabc4c371597978dp17b991jsn0d4d3d624527',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    const data = res.data
    return data
}