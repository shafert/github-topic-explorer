import axios from "axios";

export const getTasks = async (term: string): Promise<any> =>
  axios.get(`tasks/${term}`);
