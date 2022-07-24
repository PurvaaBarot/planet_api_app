import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Homescreen from "/screens/home"
import DetailScreen from "/screens/detail"

export default function App(){
  return <AppContainer/>

}
const App_stack_navigator=createStackNavigator({
  Home:{
    screen:Homescreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Details:{
    screen:DetailScreen
  }
},
{
  initialRouteName:"Home"
})
const AppContainer=createAppContainer(App_stack_navigator)