import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLENCTION_MEALS } from "storage/storageConfig";
import { mealStorageDTO } from "./mealStorageDTO";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(COLLENCTION_MEALS);
    const meals: mealStorageDTO = storage ? JSON.parse(storage) : {};
    return meals;
  } catch (error) {
    throw error;
  }
}
