import axios from "axios";
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const Apicalls = {
  handleLogin() {
    const response = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/login`,
      {
        email: email,
        password: password,
      }
    );
    return response;
  },
  async handleAddProducts(product) {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}products`,
      product
    );
    return response;
  },
  async handleGetProducts() {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}products`
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
