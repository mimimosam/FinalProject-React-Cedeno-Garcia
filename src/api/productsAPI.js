import axios from "axios";

export const productsApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async () => {
  const res = await productsApi.get("/products");
  return res.data;
};

export const getProduct = async () => {
  try {
    const resp = await productsApi.get("/products", {
      params: { id: resp.id },
    });

    return resp.data;
  } catch (error) {
    throw error;
  }
};
