import { DailyMenu } from "./DailyMenu";

export interface WeeklyMenu {
    id: number;
    dateFrom: any;
    dateTo: any;
    menus: DailyMenu[];
}