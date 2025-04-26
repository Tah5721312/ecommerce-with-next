import React from 'react';

const Cart = () => {
  const arr = [
    { productImg: "/images/4.webp" },
    { productImg: "/images/5.webp" },
    { productImg: "/images/6.webp" },
  ];

  return (
    <main style={{ textAlign: "center" }}>
      <section className="cart">
        {arr.map((item, index) => (
          <article key={index} className="product flex">
            <button>
              <i className="fa-solid fa-trash-can"></i>
            </button>
            <p className="price">$133</p>
            <div className="flex" style={{ marginRight: "1rem" }}>
              <button className="decrease">-</button>
              <div className="quantity flex">3</div>
              <button className="increase">+</button>
            </div>
            <p className="title">Product Title</p>
            <img
              style={{ borderRadius: "0.22rem" }}
              width={70}
              height={70}
              alt={`product-${index}`}
              src={item.productImg}
            />
          </article>
        ))}
      </section>

      <button className="clear">
        <i
          style={{ color: "#fff", marginRight: "0.2rem" }}
          className="fa-solid fa-trash-can icon"
        ></i>
        Clear Cart
      </button>

      <section className="summary">
        <h1>Cart Summary</h1>
        <div className="flex">
          <p className="Subtotal">Subtotal</p>
          <p>$1999</p>
        </div>
        <button className="checkout">CHECKOUT</button>
        <a href="./signin.html"> Please Sign in to continue. </a>
      </section>
    </main>
  );
};

export default Cart;
