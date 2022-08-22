import axios from "axios";

export const getTasks = async(term: string): Promise<any> => {
    return axios.get(`tasks/${term}`)
}
