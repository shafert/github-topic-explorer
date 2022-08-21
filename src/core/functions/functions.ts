import axios from "axios";

export const getTasks = async(): Promise<any> => {
    return axios.get("tasks")
}
