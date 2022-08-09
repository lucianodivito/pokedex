import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonInfo } from "../api/pokemon";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  console.log(params.id);
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonInfo(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>Informacion de un pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
