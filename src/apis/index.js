//connection to backend throught axios
import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3030"
});