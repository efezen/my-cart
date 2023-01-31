import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, amount } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h3>your wishlist</h3>
          <h4 className="empty-cart"> is currentşy empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your wishlist </h2>
      </header>
      {/* cart */}
      <div>
        {
            cart.map((item)=> {
                return <CartItem key={item.id} {...item}/>
            })
        }
      </div>
      {/* cart footer */}
      <footer>
        <h2/>

        <div className="cart-total">
            <h4>total <span>{amount}</span></h4>
        </div>
        <button className="btn clear-btn" onClick={() => console.log("clear cart")}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
