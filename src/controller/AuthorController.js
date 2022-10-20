import axios from "axios";

class AuthorController {
    static async getFilteredAuthors(filter) {
        const response = await axios({
            method: "post",
            url: `/db/authors/amount`,
            data: filter,
        });
        return response.data;
    }
    static async getFilteredAuthorsByPageAndLimit(page, limit, filter) {
        const response = await axios({
            method: "post",
            url: `/db/authors?page=${page}&limit=${limit}`,
            data: filter,
        });
        return response.data;
    }
    static async getNameByID(ID) {
        const response = await axios({
            method: "get",
            url: `/db/authors?id=${ID}`,
        });
        return response.data;
    }
}

export default AuthorController;