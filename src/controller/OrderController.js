import axios from "axios";

class OrderController {
    static async createOrder(book_id, user_id) {
        const response = await axios.post(`/order/create`, {
            book_id: book_id,
            user_id: user_id
        });

        return response;
    }
}

export default OrderController;