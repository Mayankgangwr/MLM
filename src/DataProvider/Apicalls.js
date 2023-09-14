import axios from "axios";

const Apicalls = {
  handleLogin() {
    const response = axios.post(
      `https://mlm-backend-api.onrender.com/api/users/login`,
      {
        email: email,
        password: password,
      }
    );
    return response;
  },
  async handleAddProducts(product) {
    const response = await axios.post(
      `https://mlm-backend-api.onrender.com/api/products`,
      product
    );
    return response;
  },
  async handleGetProducts() {
    const response = await axios.get(
      `https://mlm-backend-api.onrender.com/api/products`
    );
    return response;
  },
  async handleAddCartItem(item) {
    const crtData = await localStorage.getItem("userCartData");
    let cart = crtData ? JSON.parse(crtData) : [];
    if (cart.length > 0) {
      let isData = cart.find((el) => el._id == item._id);
      isData == undefined && cart.push(item);
    } else {
      cart.push(item);
    }
    localStorage.setItem("userCartData", JSON.stringify(cart));
  },
};
export default Apicalls;
