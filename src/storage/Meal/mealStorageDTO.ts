export type mealDTO = {
  id: string;
  name: string;
  description: string;
  time: string;
  inDiet?: boolean;
};

export type mealStorageDTO = {
  [date: string]: mealDTO[];
};
