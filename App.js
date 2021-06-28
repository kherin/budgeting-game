import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import screens
import IntroScreen from "./screens/intro";
import BudgetAllocationScreen from "./screens/budget_allocation";
import CreditCardScreen from "./screens/credit_card";
import EmergencyFundScreen from "./screens/emergency_fund";
import FromScreen from "./screens/form";
import InflationScreen from "./screens/inflation";
import InstructionsScreen from "./screens/instructions";
import InterestRateScreen from "./screens/interest_rate";
import MutualFundsScreen from "./screens/mutual_funds";
import TrophyCaseScreen from "./screens/trophy_case";
import FormScreen from "./screens/form";

// Create Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="intro"
          component={IntroScreen}
          options={{ title: "Welcome!" }}
        />

        <Stack.Screen
          name="budget_allocation"
          component={BudgetAllocationScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="credit_card"
          component={CreditCardScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="emergency_fund"
          component={EmergencyFundScreen}
        ></Stack.Screen>

        <Stack.Screen name="form" component={FormScreen}></Stack.Screen>

        <Stack.Screen
          name="inflation"
          component={InflationScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="instructions"
          component={InstructionsScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="interest_rate"
          component={InterestRateScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="mutual_funds"
          component={MutualFundsScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="trophy_case"
          component={TrophyCaseScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
