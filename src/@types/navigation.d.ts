export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: undefined;
      form: {
        mealId: string;
      };
      meal: {
        id: string;
        date: string;
      };
      feedback: {
        inDiet: boolean;
      };
    }
  }
}
