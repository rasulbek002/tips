export const fetchEmployeeApi = async (id: string) => {
  const response = await fetch(
    `http://16.16.142.144/api/v1/account/getAccount/${id}`
  );
  const data = await response.json();

  return data;
};
