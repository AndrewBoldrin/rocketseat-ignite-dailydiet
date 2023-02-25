import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "screens/Feedback";
import { Form } from "screens/Form";
import { Home } from "screens/Home";
import { Stats } from "screens/Stats";
import { ViewMeal } from "screens/ViewMeal";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="form" component={Form} />
      <Screen name="meal" component={ViewMeal} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
}
