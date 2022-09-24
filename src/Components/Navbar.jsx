import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-default" role="navigation">
        <img
          className="icon1"
          src="https://cdn-icons-png.flaticon.com/512/8244/8244509.png"
          alt=""
        />
        <Link to="/" className="navbar-brand text-uppercase ">
          Home
        </Link>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3158/3158480.png"
          alt=""
          className="icon1"
        />
        <Link to="/contact" className="navbar-brand text-uppercase ">
          Contact
        </Link>

        <h1 className="title"> Happy Cake</h1>
        <img
          className="icono"
          src="https://cdn-icons-png.flaticon.com/512/1784/1784096.png"
          alt=""
        />
      </nav>
    </>
  );
};
export default Navbar;
