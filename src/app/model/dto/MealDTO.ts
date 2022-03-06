
export interface MealDTO {
    id: number;
    name: string;
    mealTypeId: number;
    mealSizeId: number;
    description: string;
    contributions: string;
    price: number;
    image: string;
    dailyMenuId: number;
}