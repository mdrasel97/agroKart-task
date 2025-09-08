import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Fresh Rice",
      price: 35.5,
      button: "Shop Now",
      details: "High-quality fresh rice directly from local farmers.",
      image: "/assets/agri/rice.jpg",
    },
    {
      id: 2,
      name: "Organic Wheat",
      price: 28.0,
      button: "Shop Now",
      details: "Organic wheat with natural nutrients for healthy meals.",
      image: "/assets/agri/wheat.jpg",
    },
    {
      id: 3,
      name: "Potatoes",
      price: 20.0,
      button: "Shop Now",
      details: "Fresh farm potatoes, suitable for multiple recipes.",
      image: "/assets/agri/potato.jpg",
    },
    {
      id: 4,
      name: "Tomatoes",
      price: 30.0,
      button: "Shop Now",
      details: "Ripe and juicy tomatoes, naturally grown without chemicals.",
      image: "/assets/agri/tomato.jpg",
    },
    {
      id: 5,
      name: "Onions",
      price: 25.0,
      button: "Shop Now",
      details: "Fresh red onions directly from the field.",
      image: "/assets/agri/onion.jpg",
    },
    {
      id: 6,
      name: "Green Vegetables",
      price: 40.0,
      button: "Shop Now",
      details: "Assorted seasonal green vegetables full of vitamins.",
      image: "/assets/agri/vegetables.jpg",
    },
    {
      id: 7,
      name: "Sugarcane",
      price: 15.0,
      button: "Shop Now",
      details: "Natural sugarcane fresh from the farm fields.",
      image: "/assets/agri/sugarcane.jpg",
    },
    {
      id: 8,
      name: "Mangoes",
      price: 60.0,
      button: "Shop Now",
      details: "Sweet and delicious mangoes from local orchards.",
      image: "/assets/agri/mango.jpg",
    },
    {
      id: 9,
      name: "4K Monitor",
      price: 349.99,
      button: "Shop Now",
      details: "Ultra HD 4K 27-inch monitor with HDR support and slim bezels.",
      image: "/assets/products/monitor.jpg",
    },
    {
      id: 10,
      name: "Power Bank",
      price: 29.99,
      button: "Shop Now",
      details:
        "10000mAh portable power bank with fast charging and dual USB ports.",
      image: "/assets/products/powerbank.jpg",
    },
  ];

  return NextResponse.json(products);
}
