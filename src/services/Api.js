import Http from "./Https";

export const getProducts = (config) => {
  return Http.get("/products", config);
};

export const getShop = (config) => {
  return Http.get("/user", config);
};

export const getDetails = (config, id) => {
  return Http.get(`/products/${id}`, config);
};

export const getShopDetails = (id, config) => {
  return Http.get(`/user/${id}`, config);
};
