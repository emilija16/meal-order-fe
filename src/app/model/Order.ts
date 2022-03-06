import { OrderItem } from "./OrderItem";
import { User } from "./User.model";

export interface Order {
    id: number;
    user: User;
    shoppingItems: OrderItem[];
    totalPrice: number;
    orderDateTime: any;
}