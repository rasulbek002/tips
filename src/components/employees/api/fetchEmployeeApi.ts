import axios from "axios";
import { waitress } from "../data";

export const fetchEmployeeApi = async (
  id: string
) => {
  try {
    // const response = await axios.get(
    //   `/api${id}/`
    // );
    // return response.data;

    const waitres = waitress.find(
      (item) => id === item.id
    );

    return { data: waitres };
  } catch (error) {
    throw new Error("Failed to fetch employee");
  }
};
