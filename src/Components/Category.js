import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper ,SwiperSlide } from 'swiper/react';
import './Category.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';


function Category() {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
           const response = await fetch(`https://fakestoreapi.com/products`);
           const jsonData = await response.json();

           const uniqueCategory = {};
           jsonData.forEach((item)=>{
             if(!uniqueCategory[item.category]){
                uniqueCategory[item.category] = item
             }
           });

           setCategory(Object.values(uniqueCategory))
        }
        fetchData()
    },[]);




  return (
    <section>
    <div>
        <h2 className='text-2xl font-semibold ml-3'> Categorys </h2>

        <div className='container  mt-3 '>
        <Swiper
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper" 
            breakpoints={{
              1024: { slidesPerView: 6 },
              768: { slidesPerView: 3 },
              576: { slidesPerView: 1 },
              375: { sliderPerView: 1 },
            }}
            style={{height:"260px"}}
          >
          <>
          {category.map((item, index) =>{
            return(
             <SwiperSlide key={index}>
                <NavLink to={`/Products/${item.category}`}>
                <div className='category shadow-md rounded-md w-48 h-[235px] py-4 border-1 border-gray-200 '>
                <img src={item.image}  alt={item.title}  className='category-imgs'/>
                 <div className='text-center mt-4'>
                     <span className='px-4 capitalize'> {item.category}</span>
                 </div>
                </div>
                </NavLink>
             </SwiperSlide>
            )
          })}
          </>
         </Swiper>
        </div>
    </div>
  </section>
  )
}

export default Category
