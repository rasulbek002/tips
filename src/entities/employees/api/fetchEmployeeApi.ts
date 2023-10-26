import { endpoint } from "@/App/endpoint";

export const fetchEmployeeApi = async (id: string) => {
  const response = await fetch(`${endpoint}account/getAccount/${id}`);
  const data = await response.json();

  return data;
};
