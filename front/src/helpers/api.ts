import axios from "axios";
const baseURL = "http://localhost:5000";

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${baseURL}/tasks`);
    return response.data.allTasks;
  } catch (error) {
    console.log(error);
  }
};
