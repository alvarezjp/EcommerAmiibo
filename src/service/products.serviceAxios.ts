import axios from "axios";
import type { ProductType } from "../type/products.type";

export const getProducts = async ():Promise<ProductType[]> => {
  try {
    const response = await axios.get<ProductType[]>('http://localhost:3000/products');
    console.log(response.data);
    return response.data;
  } catch (error){
    console.log("Ocurrio el siguiente error",error);
    throw error;
  }
}