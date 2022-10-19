import axios from "axios";

class BookController {
    static async getFilteredBooks(filter) {
        const response = await axios({
            method: "post",
            url: `/db/books/amount`,
            data: filter,
        });
        return response.data;
    }
    static async getFilteredBooksByPageAndLimit(page, limit, filter) {
        const response = await axios({
            method: "post",
            url: `/db/books?page=${page}&limit=${limit}`,
            data: filter,
        });
        return response.data;
    }
}

export default BookController;