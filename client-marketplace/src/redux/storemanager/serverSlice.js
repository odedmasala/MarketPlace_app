import axios from "axios";

export const getProductsApi = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/products`
    );
    return data;
  } catch (error) {
    return;
  }
};
export const getMangerApi = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/storeManager/63a82c97c672788abe31e60f`
      );
      return data;
    } catch (error) {
      return;
    }
  };
export const createProductApi = async (product) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      product
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductApi = async (product) => {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/products/${product.id}`,
      product
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteProductsApi = async (id) => {
  try {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/products/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};
