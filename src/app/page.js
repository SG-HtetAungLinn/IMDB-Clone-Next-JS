"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function Home({ searchParams }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const genre = searchParams.genre || "fetchTrending";
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                setProducts(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProducts();
    }, [genre]);

    const details = (productId) => {
        if (typeof window !== "undefined") {
            router.push(`/products/${productId}`); // Navigate to product details page
        }
    };

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

    if (error) return <p>Error fetching data: {error}</p>;

    return (
        <div className="max-w-7xl mx-auto mt-6">
            <ul className="flex justify-center gap-5 flex-wrap">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="w-[400px] h-[500px] dark:bg-slate-900 dark:text-gray-50 bg-slate-200 text-gray-950 shadow-lg p-5 rounded-lg overflow-hidden"
                    >
                        <div className="h-[150px]">
                            <h1 className="text-cyan-800">
                                {product.category}
                            </h1>
                            <h1 className="text-xl">{product.title}</h1>
                            <span className="text-green-500">
                                ${product.price}
                            </span>
                        </div>
                        <div className="flex justify-center align-middle h-[200px]">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={100}
                                height={100}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between mt-5">
                            <div>
                                <div className="flex items-center">
                                    <p className="mr-2">Rating :</p>
                                    <div className="flex items-center">
                                        {renderStars(product.rating.rate)}
                                    </div>
                                </div>
                                <p>Count: {product.rating.count}</p>
                            </div>
                            <div>
                                <Button
                                    onClick={() => details(product.id)}
                                    className={"py-1"}
                                >
                                    View
                                </Button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
