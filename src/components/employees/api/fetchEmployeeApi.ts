import axios from "axios";
import { waitress } from "../data";

export const fetchEmployeesApi = async (
  id: string
) => {
  try {
    // const response = await axios.get(
    //   `/api${id}/`
    // );
    // return response.data;

    return { data: waitress[0] };
  } catch (error) {
    throw new Error("Failed to fetch employee");
  }
};
