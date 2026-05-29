import "./Header.css";
import Footer from "../footer/Footer.jsx";
function Header() {
  return (
    <div id="nav">
      <section id="title">
        <h1>
          <i class="bi bi-align-end"></i> Take-Talent-10x
        </h1>
      </section>
      <section id="menus">
        <a href="">
          <i class="bi bi-house-check-fill"></i> Home
        </a>
        <a href="">
          <i class="bi bi-person-circle"></i> Profile
        </a>
        <a href="">
          <i class="bi bi-apple"></i> Products
        </a>
        <a href="">
          <i class="bi bi-cart-check-fill"></i> Cart
        </a>
        <a href="">
          <i class="bi bi-person-lines-fill"></i> Contactus
        </a>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Header;
