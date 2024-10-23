"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductDetails = ({ params }) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const id = params.id;
    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(
                        `https://fakestoreapi.com/products/${id}`
                    );
                    setProduct(response.data);
                } catch (error) {
                    setError(error.message);
                }
            };
            fetchProduct();
        }
    }, [id]);
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={`full-${index}`} className="text-yellow-400" />
                ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <FaRegStar
                        key={`empty-${index}`}
                        className="text-yellow-400"
                    />
                ))}
            </>
        );
    };
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Loading...</p>;
    return (
        <div className="max-w-5xl mx-auto mt-6">
            <div className="flex justify-between items-start gap-10">
                <div className="flex flex-col items-center">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width="300"
                        height="300"
                        className="rounded-lg"
                    />
                </div>
                <div className="w-full">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <h2 className="text-xl text-gray-700">
                        {product.category}
                    </h2>
                    <p className="text-green-500 text-2xl">${product.price}</p>
                    <div className="flex items-center mt-3">
                        {renderStars(product.rating.rate)}
                        <span className="ml-2">({product.rating.count})</span>
                    </div>
                    <p className="mt-5">{product.description}</p>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;
