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
}

export default AuthorController;