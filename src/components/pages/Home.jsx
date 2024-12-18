import React from "react";
import "./Home.css"; // Add CSS specific for the Home page
import redwine from "../../assets/redwine.jpg";
import rosewine from "../../assets/rose.png";
import otherproducts from "../../assets/opener.png";

// Card Component
function Card({ title, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="card-button">Buy Now!</button>
    </div>
  );
}

// Home Component
export default function Home() {
  const cardsData = [
    {
      title: "Red Wine",
      image: redwine, 
      description: "Experience the finest red wines crafted to perfection.",
    },
    {
      title: "Rose Wine",
      image: rosewine, 
      description: "Enjoy a refreshing glass of premium rose wine.",
    },
    {
      title: "Other Products",
      image: otherproducts, 
      description: "Explore our selection of wine accessories and more.",
    },
  ];

  return (
    <div className="home">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
}
