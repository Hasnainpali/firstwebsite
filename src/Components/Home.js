import React, { useContext, useEffect } from "react";
import './Home.css';
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import ProductList from "./ProductList";
import { useNavigate } from "react-router-dom";
import { Data } from "./Context/SigninSignupContext";
// import { useDispatch, useSelector } from "react-redux";
// import { Decrement, Increment } from "./Redux/Action";

function Home() {
  // const counter = useSelector(state => state.Counter )
  // const dispatch = useDispatch()
  const {setNavFooter} = useContext(Data)
  // const navigate = useNavigate();

  useEffect(()=>{

    setNavFooter(true)
   
  },[setNavFooter]);

  return (
    <div className="">
      <section id="hero">
         <div className="mt-48">
            <h4 className="text-3xl font-semibold sm: text-3xl">Trade-in-fair</h4>
            <h2 className="text-2xl font-semibold sm: text-2xl">Super value deals</h2>
            <h1 className="text-2xl font-semibold sm: text-2xl">On all Products</h1>
            <p className="text-2xl sm: text-xl">Save more with coupons and up to 70% off!</p>
            <button className="text-4xl">Shop Now</button>
         </div>
      </section>
      <ProductList/>
        {/* <div className=" flex flex-col mx-3 my-3">
           {counter}
           <button onClick={() => dispatch(Increment())}>Add</button>
           <button onClick={() => dispatch(Decrement())}>sub</button>
        </div> */}
      <section id="feature" className="section-p1">
      <Swiper
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper mt-4" 
            breakpoints={{
              1024: { slidesPerView: 6 },
              768: { slidesPerView: 3 },
              576: { slidesPerView: 1 },
              375: { sliderPerView: 1 },
            }}
            style={{height:"210px"}}
          >
            <SwiperSlide>
            <div className="fe-box m-auto">
          <img src="https://i.postimg.cc/PrN2Y6Cv/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
            </SwiperSlide>
        
        <SwiperSlide>
        <div className="fe-box m-auto">
          <img src="https://i.postimg.cc/qvycxW4q/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="fe-box m-auto">
          <img src="https://i.postimg.cc/4yFCwmv6/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="fe-box m-auto">
          <img src="https://i.postimg.cc/gJN1knTC/f6.png" alt="" />
          <h6>F24/7 Support</h6>
        </div>
        </SwiperSlide>
       
        </Swiper>
      </section>
    </div>
  );
}

export default Home;
