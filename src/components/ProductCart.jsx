import React from "react";
import {AiOutlineShoppingCart,AiOutlineHeart} from "react-icons/ai";
import {FiEye} from "react-icons/fi";
import image1 from "../assets/Product1.jpg"; 
import image2 from "../assets/Product2.jpg"; 
import image3 from "../assets/Product 3.jpg"; 
import image4 from "../assets/Product4.jpg"; 
import image5 from "../assets/Product5.jpg"; 
import image6 from "../assets/Product6.jpg"; 

const ProductCart = ({data}) =>{
    console.log(data)
    return (
        // card-section-start
        <div className="py-14 bg-pink-300 ">
            <div className="conatiner text-center">
                <h3 className="text-black text-center mb-2 text-5xl font-bold">hello</h3>
                <h2 className="text-3xl w-full text-center text-red-600 mt-8">best selling</h2>
                <div className="flex justify-center mb-10">
                  <div className="bg-amber-300 w-20 h-1 rounded  flex justify-center"></div>
                </div>
                {/* card-1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-4 items-center justify-center gap-2 lg:mx-20">
                    <div className="bg-yellow-300 mt-10">
                    <img src={image1} alt="" className="w-90" />
                    <div>
                        <h3 className="text-black font-bold text-2xl">{data.title}</h3>
                        
                        <p>{data.price}</p>
                        <img src={data.image} alt="" />
                        </div>
                    <button><AiOutlineShoppingCart/></button>
                    <button><FiEye/></button>
                    <button><AiOutlineHeart/></button>

                    </div>
                </div>
            </div>
        </div>
     // card-section-end

    );
};

export default ProductCart;