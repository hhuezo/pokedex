import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

export default function Pokedex() {

  //para cargar con la vista
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  //llamado a api
  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}