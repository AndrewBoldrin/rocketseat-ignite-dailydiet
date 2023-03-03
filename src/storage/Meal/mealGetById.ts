import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLENCTION_MEALS } from "storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealGetById(id: string, date: string) {
  try {
    const storage = await mealGetAll();
    return storage[date].filter((meal) => meal.id === id)[0];
  } catch (error) {
    throw error;
  }
}
