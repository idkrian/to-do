import axios from "axios";
import { TaskProps } from "./interfaces";
const baseURL = "http://localhost:5000";

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${baseURL}/tasks`);
    return response.data.allTasks;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (data: TaskProps) => {
  try {
    const response = await axios.post(`${baseURL}/tasks`, { ...data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await axios.delete(`${baseURL}/tasks/${id}`);
    return response.data.allTasks;
  } catch (error) {
    console.log(error);
  }
};
