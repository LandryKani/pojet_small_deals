import config from "./config.json";

let url_api = config.apiUrl;

export const api_route = {
  home: {
    method: "GET",
    url: url_api + "/bootstrap",
  },
  adverts:{
    method: "GET",
    url: url_api + "/category-products/"
  },
  categories:{
    method: "GET",
    url: url_api + "/categorys"
  },
  shareProducts: {
    method: "POST",
    url: url_api + "/share-product",
  },
  language: {
    method: "GET",
    url: url_api + "/languages"
  },
  product_detail: {
    method: "GET",
    url: url_api + "/product/1-affiche-encadree-today-is-a-good-day"
  },
  share_product: {
    method: "POST",
    url: url_api + "/share-product/1-produit-de-test?id_lang=1"
  },
};
