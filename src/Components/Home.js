import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="">
      <section id="hero">
         <div className="mt-48">
            <h4 className="text-4xl font-semibold">Trade-in-fair</h4>
            <h2 className="text-4xl font-semibold">Super value deals</h2>
            <h1 className="text-4xl font-semibold">On all Products</h1>
            <p className="text-3xl">Save more with coupons and up to 70% off!</p>
            <button className="text-4xl">Shop Now</button>
         </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="https://i.postimg.cc/PrN2Y6Cv/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>

        <div className="fe-box">
          <img src="https://i.postimg.cc/qvycxW4q/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>

        <div className="fe-box">
          <img src="https://i.postimg.cc/1Rdphyz4/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>

        <div className="fe-box">
          <img src="https://i.postimg.cc/GpYc2JFZ/f4.png" alt="" />
          <h6>Promotions</h6>
        </div>

        <div className="fe-box">
          <img src="https://i.postimg.cc/4yFCwmv6/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>

        <div className="fe-box">
          <img src="https://i.postimg.cc/gJN1knTC/f6.png" alt="" />
          <h6>F24/7 Support</h6>
        </div>
      </section>
    </div>
  );
}

export default Home;
