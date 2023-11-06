import axios from "axios";
import { TaskProps, UserProps } from "./interfaces";
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
    console.log(data);

    const response = await axios.post(`${baseURL}/task`, { ...data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await axios.delete(`${baseURL}/task/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateTask = async (id: string, data: TaskProps) => {
  try {
    const response = await axios.put(`${baseURL}/task/${id}`, { ...data });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (data: UserProps) => {
  try {
    const response = await axios.post(`${baseURL}/user/register`, { ...data });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const authenticateUser = async (data: UserProps) => {
  try {
    const response = await axios.post(`${baseURL}/user/login`, { ...data });
    return response.data.token;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return {
        error: true,
        data: e.response?.data,
      };
    } else {
      console.error(e);
    }
  }
};

export const login = async (email: string) => {
  try {
    const response = await axios.get(`${baseURL}/user/email/${email}`);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return {
        error: true,
        data: e.response?.data,
      };
    } else {
      console.error(e);
    }
  }
};

export const getTasksbyId = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/task/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
