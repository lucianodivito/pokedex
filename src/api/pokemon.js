import { apiHost } from "../utils/contastant";

export async function getPokemons(endpointUrl) {
  try {
    const url = `${apiHost}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetails(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonInfo(id) {
  try {
    const url = `${apiHost}/pokemon/${id}`;
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
