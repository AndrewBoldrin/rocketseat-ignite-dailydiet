import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLENCTION_MEALS } from "storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { mealDTO } from "./mealStorageDTO";

export async function mealAdd(date: string, meal: mealDTO) {
  try {
    const storagedMeals = await mealGetAll();
    const storagedMealsList = storagedMeals[date] ?? [];

    const storage = JSON.stringify({
      ...storagedMeals,
      [date]: [...storagedMealsList, meal],
    });

    await AsyncStorage.setItem(`${COLLENCTION_MEALS}`, storage);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
