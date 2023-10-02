import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI/IconButton";
import { StyleSheet, Text } from "react-native";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpenseOverview() {
  return (
    <BottomTabs.Navigator screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: 'white' },
      tabBarStyle: styles.tabBarStyle,
      headerRight: ({ tintColor }) => (<IconButton icon={'add'} size={30} color={tintColor} onPress={() => { navigation.navigate('ManageExpense') }} />),
      tabBarLabelStyle: { fontSize: 14 },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: '#a9a9a9',
      // tabBarActiveBackgroundColor: '#ffffff',
    })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}

        options={{
          title: 'Recent Expenses',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "hourglass" : "hourglass-outline"} color={color} size={size} />,
        }} />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "calendar" : "calendar-outline"} color={color} size={size} />
        }} />
    </BottomTabs.Navigator >
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="daek" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpenseOverview}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                headerShown: false
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  }
})