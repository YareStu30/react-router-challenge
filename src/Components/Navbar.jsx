import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1> Happy Cake</h1>
      <Link to="/" className="navbar-brand text-uppercase navbar-dark">Home</Link>
      <Link to="/contact" className="navbar-brand text-uppercase navbar-dark">Contact</Link>
      <img
        className="icono"
        src="https://cdn-icons-png.flaticon.com/512/1784/1784096.png"
        alt=""
      />
    </>
  );
};
export default Navbar;
