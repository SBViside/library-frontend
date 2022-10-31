import axios from "axios";

class OrderController {
    static async createOrder(book_id, user_email) {
        const response = await axios.post(`/order/create`, {
            book_id: book_id,
            user_email: user_email
        });

        return response;
    }
}

export default OrderController;