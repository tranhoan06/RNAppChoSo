import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigation/StackNavigation";
import { Provider } from "react-redux";
import store from "./src/redux-setup/store";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <HomeStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
