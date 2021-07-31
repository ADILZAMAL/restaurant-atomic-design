import React from "react";
import Section from "../../organisms/Section/Section";

export default function Home() {
  const delivery35Min = [
    {
      newRestaurant: true,
      image:
        "https://uploads.codesandbox.io/uploads/user/7057e602-9a4b-48e2-a956-a6a83661dbe2/vDpH-burger-chips-dinner-70497.jpg",
      ad: true,
      preOrder: true,
      deliveryDuration: "20-30 min",
      restaurantName: "Ugonna's Restaurant",
      restaurantDescription:
        "☆	4.7 • ₦ • Beverages • Coffee • Shop • Doughnuts Shop • International",
    },
  ];

  const moreRestaurants = [
    {
      newRestaurant: true,
      image:
        "https://uploads.codesandbox.io/uploads/user/7057e602-9a4b-48e2-a956-a6a83661dbe2/vDpH-burger-chips-dinner-70497.jpg",
      ad: true,
      preOrder: true,
      deliveryDuration: "60-65 min",
      restaurantName: "Thelma's Restaurant",
      restaurantDescription:
        "☆	4.7 • ₦ • Beverages • Coffee • Shop • Doughnuts Shop • International",
    },
    {
      newRestaurant: true,
      image:
        "https://uploads.codesandbox.io/uploads/user/7057e602-9a4b-48e2-a956-a6a83661dbe2/vDpH-burger-chips-dinner-70497.jpg",
      ad: true,
      preOrder: true,
      deliveryDuration: "30-45 min",
      restaurantName: "Donuts",
      restaurantDescription:
        "☆	4.7 • ₦ • Beverages • Coffee • Shop • Doughnuts Shop • International",
      closed: true,
    },
    {
      newRestaurant: true,
      preOrder: true,
      deliveryDuration: "90-105 min",
      restaurantName: "Pasta Hut",
      restaurantDescription:
        "☆	4.7 • ₦₦ • Beverages • Coffee • Shop • Doughnuts Shop • International",
    },
    {
      newRestaurant: true,
      image:
        "https://uploads.codesandbox.io/uploads/user/7057e602-9a4b-48e2-a956-a6a83661dbe2/vDpH-burger-chips-dinner-70497.jpg",
      preOrder: true,
      deliveryDuration: "30-45 min",
      restaurantName: "Nigerian Cuisine",
      restaurantDescription: "☆	4.7 • ₦ • Nigerian",
    },
  ];
  return (
    <div>
      <Section
        sectionTitle="Delivers in under 35 minutes"
        restaurants={delivery35Min}
      />
      <br />
      <Section sectionTitle="More restaurants" restaurants={moreRestaurants} />
    </div>
  );
}
