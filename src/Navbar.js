import React from "react";
import bag from "./media/icons/bag.svg";
function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-center">
          <h3>hotDeals</h3>
          <div className="nav-container">
            <img src={bag} alt="bag" />
            <div className="amount-container">
                <p className="total-amount">
                    5
                </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
