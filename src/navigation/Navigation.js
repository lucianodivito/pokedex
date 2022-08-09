import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import PokedexScreen from "../screens/Pokedex";
import AccountScreen from "../screens/Account";
import FavoritesScreen from "../screens/Favorites";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeballIcon(),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeballIcon() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 75,
        height: 75,
        top: -15,
      }}
    />
  );
}
