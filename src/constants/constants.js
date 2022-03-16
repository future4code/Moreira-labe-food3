export const BaseUrl = "https://us-central1-missao-newton.cloudfunctions.net/";
export const token = localStorage.getItem("token");
export const header = {
  headers: {
    Authorization: token,
    // Authorization: "Content-Type: application/json",
  },
};
