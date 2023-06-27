export const fetchPositionsApi = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    filterRequest: {},
    pageInfo: {
      pageIndex: 0,
      size: 5,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch(
    "http://16.16.142.144/api/v1/account/listAccounts",
    requestOptions
  );

  const data = await response.json();

  return data;
};
