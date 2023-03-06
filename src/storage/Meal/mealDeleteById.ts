import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLENCTION_MEALS } from "storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function deleteBlankAttributes() {
  try {
    const storagedMeals = await mealGetAll();
    Object.keys(storagedMeals).forEach(
      (key) => storagedMeals[key].length == 0 && delete storagedMeals[key]
    );
    const storage = JSON.stringify(storagedMeals);

    await AsyncStorage.setItem(`${COLLENCTION_MEALS}`, storage);
  } catch (error) {
    throw error;
  }
}

export async function mealDeleteById(id: string, date: string) {
  try {
    const storagedMeals = await mealGetAll();
    const storagedMealsList =
      storagedMeals[date].filter((meal) => meal.id !== id) ?? [];

    const storage = JSON.stringify({
      ...storagedMeals,
      [date]: [...storagedMealsList],
    });

    await AsyncStorage.setItem(`${COLLENCTION_MEALS}`, storage);

    await deleteBlankAttributes();
  } catch (error) {
    throw error;
  }
}
