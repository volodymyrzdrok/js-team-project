import axios from 'axios';
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const fetchProductsByName = async name => {
  try {
    const { data } = await axios.get(`${BASE_URL}search.php?s=${name}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProductsRandom = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}search.php?f=e`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProductsByLetter = async letter => {
  try {
    const { data } = await axios.get(`${BASE_URL}search.php?f=${letter}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchInfoProductById = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}lookup.php?i=${id}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchInfoIngredientByName = async name => {
  try {
    const { data } = await axios.get(`${BASE_URL}search.php?i=${name}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
