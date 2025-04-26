import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Header = () => {
  return (
    <header id="headerElement" className="flex">
<Link href={"/"} className="logo">

  <FontAwesomeIcon style={{width:"1.5rem",marginRight:"0.3rem"}} icon={faBagShopping} />  {/* FontAwesomeIcon in Next */}

  <span style={{ fontWeight: "bold" }}>AWU</span>
  <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
</Link>
<nav className="links">

<Link href="/cart" className="cart" style={{ position: "relative" }}>
  <FontAwesomeIcon style={{ width: "0.8rem" }} icon={faCartShopping} />
  $0.00
  <span className="products-number">2</span>
</Link>
  <Link className="sign-in" href="signin">
  <FontAwesomeIcon style={{width:"0.8rem"}} icon={faRightToBracket} /> 

    Sign in
  </Link>
  <Link className="register" href="register">
  <FontAwesomeIcon style={{width:"0.8rem"}} icon={faUserPlus} /> 

    Register
  </Link>
</nav>
</header>
  );
}

export default Header;
