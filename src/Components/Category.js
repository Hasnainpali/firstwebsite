import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Category.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

function Category() {
    const { category: currentCategory } = useParams();
    const [category, setCategory] = useState([]);
    const [filter, setFilter] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
           const response = await fetch(`https://fakestoreapi.com/products`);
           const jsonData = await response.json();

           const uniqueCategory = {};
           jsonData.forEach((item) => {
             if (!uniqueCategory[item.category]) {
                uniqueCategory[item.category] = item;
             }
           });

           setCategory(Object.values(uniqueCategory));
           setAllProducts(jsonData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (currentCategory) {
            filterProduct(currentCategory);
        }
    }, [currentCategory]);

    const filterProduct = (cat) => {
        const updatedlist = allProducts.filter((item) => item.category === cat);
        setFilter(updatedlist);
    };

    return (
        <section>
            <div>
                <h2 className='text-2xl font-semibold ml-3'> Categories </h2>

                <div className='container mt-3'>
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
                        style={{ height: "260px" }}
                    >
                        <>
                            {category.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <NavLink to={`/Products/${item.category}`}>
                                            <div className='category shadow-md rounded-md w-48 h-[235px] py-4 border-1 border-gray-200'>
                                                <img src={item.image} alt={item.title} className='category-imgs' />
                                                <div className='text-center mt-4'>
                                                    <span className='px-4 capitalize'> {item.category}</span>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </SwiperSlide>
                                );
                            })}
                        </>
                    </Swiper>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
                    {filter.map((product) => {
                        return (
                            <div
                                className="bg-white shadow-md rounded-lg hover:scale-y-105 hover:m-2"
                                key={product.id}
                            >
                                <div className="mb-5">
                                    <div className="h-full text-center p-4">
                                        <img
                                            className="h-[250px] m-auto"
                                            src={product.image}
                                            alt={product.title}
                                        />
                                        <div className="font-medium text-lg py-4 space-y-4">
                                            <h5>{product.title.substring(0, 15)}</h5>
                                            <p className="pb-4">${product.price}</p>
                                            <NavLink
                                                className="bg-white-800 text-black outline outline-1 p-1 hover:bg-black hover:text-white rounded-lg"
                                                to={`/Products/${product.id}`}
                                            >
                                                Buy Now
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Category;
