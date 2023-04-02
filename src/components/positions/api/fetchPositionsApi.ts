import { positions } from "@/components/employees/data";
import axios from "axios";

export const fetchPositionsApi = async () => {
  try {
    // const response = await axios.get(
    //   `/api${}/`
    // );
    // return response.data;

    return { data: positions };
  } catch (error) {
    throw new Error("Failed to fetch employee");
  }
};
