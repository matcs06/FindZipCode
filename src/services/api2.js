import axios from "axios";
const api2 = axios.create({
  baseURL: "https://www.google.com/search?imghp?hl=pt-BR&source=lnms&tbm=isch",
});

export default api2;
