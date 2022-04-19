import { getUserInfo } from "../localStorage";
import { parseRequestUrl } from "../utils";

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    const { value } = parseRequestUrl();
    return ` 
  <div class="brand">
    <p>Freshmart</p>
  </div>
  <div class="sideheader">
  ${
    name
      ? `<a href="/#/profile">${name}</a>`
      : `<a href="/#/signin">Sign-In</a>`
  }    
    <a href="/#/cart">Cart</a>
    ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ""}
  </div>`;
  },
  after_render: () => {},
};
export default Header;
