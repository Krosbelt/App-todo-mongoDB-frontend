//connection to backend throught axios
import axios from "axios";

export default axios.create({
    baseURL: "https://app-todo-stack-mern-kr.herokuapp.com"
});