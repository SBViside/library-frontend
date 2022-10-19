import axios from "axios";

class UserController {
    static async userExist(email) {
        const response = await axios({
            method: "get",
            url: `/user/exist?email=${email}`
        });
        return response.data.length > 0;
    }
    static async sendUser(user) {
        const response = await axios.post('/user/create', user);
        return response.data;
    }
    static async getUser(email) {
        const response = await axios.get(`/user?email=${email}`);
        return response.data;
    }
}

export default UserController;