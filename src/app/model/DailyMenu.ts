import { Meal } from "./Meal";
import { WeeklyMenu } from "./WeeklyMenu";

export interface DailyMenu {
    id?: number;
    date: any;
    weeklyMenu?: WeeklyMenu;
    meals: Meal[];
}