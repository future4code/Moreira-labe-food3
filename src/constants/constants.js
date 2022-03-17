export const BaseUrl = "https://us-central1-missao-newton.cloudfunctions.net/";
export const token = localStorage.getItem("token");
export const header = {
  headers: {
    auth: token,
  },
};

