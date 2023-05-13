import axios from "axios";
import {  waitress } from "../config/data";

export const fetchEmployeesApi = async (
  endpoint: string = "employees"
) => {
  try {
    // const response = await axios.get(
    //   `/api${endpoint}/`
    // );
    // return response.data;

    return { data: waitress };
  } catch (error) {
    throw new Error("Failed to fetch employees");
  }
};
