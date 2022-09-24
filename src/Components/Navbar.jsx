import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <h1 classname="Nav"> Happy Cake</h1>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1784/1784096.png"
        alt=""
      />
    </>
  );
}
