const APP_URL = "https://www.my-server.cloud/my-app/api";

const app_api = async (param) => {
  const response = await fetch(APP_URL);
  console.log(response);

  const result = await response.json();
  console.log(result);

  if (response.ok) {
    const content = result;

    console.log("content is:", content);
  } else {
    console.log("error");
  }
};
