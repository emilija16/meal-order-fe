import { DailyMenu } from "./DailyMenu";
import { MealSize } from "./MealSize";
import { MealType } from "./MealType";

export interface Meal {
    id: number;
    name: string;
    mealType: MealType;
    mealSize: MealSize;
    description: string;
    contributions: string;
    price: number;
    dailyMenus: DailyMenu[];
    image: string;
    tomorrow: boolean;
}