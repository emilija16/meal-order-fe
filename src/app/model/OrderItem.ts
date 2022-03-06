import { Meal } from "./Meal";
import { Order } from "./Order";

export interface OrderItem {
    id: number;
    meal: Meal;
    quantity: number;
    order: Order; 
}