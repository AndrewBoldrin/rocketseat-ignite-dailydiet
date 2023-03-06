import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLENCTION_MEALS } from "storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { mealDTO } from "./mealStorageDTO";

export async function mealUpdate(
  id: string,
  date: string,
  updatedDate: string,
  meal: mealDTO
) {
  try {
    const storagedMeal = await mealGetAll();

    const updatedMealList =
      storagedMeal[date].length === 1
        ? [meal]
        : [...storagedMeal[date].filter((meal) => meal.id !== id), meal];

    if (storagedMeal[date].length === 1) {
      delete storagedMeal[date];
    }

    console.log("updated: ", updatedMealList);

    const updatedStorage = JSON.stringify({
      ...storagedMeal,
      [updatedDate]: updatedMealList,
    });

    await AsyncStorage.setItem(`${COLLENCTION_MEALS}`, updatedStorage);
  } catch (error) {
    throw error;
  }
}
