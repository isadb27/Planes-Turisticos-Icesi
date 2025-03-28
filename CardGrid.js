import React from "react";

const data = [
  {
    title: "Online Games How To Play To Win",
    price: "$130",
    viewers: "56 people viewing now",
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    title: "Copper Canyon",
    price: "$345",
    viewers: "112 people viewing now",
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    title: "Global Resorts Network Gm Putting Timeshares To Shame",
    price: "$213",
    viewers: "385 people viewing now",
    image: "https://picsum.photos/300/200?random=3"
  },
  {
    title: "Mandalay Bay Beach Fireworks and Food Party (Group tour)",
    price: "$267",
    viewers: "78 people viewing now",
    image: "https://picsum.photos/300/200?random=4"
  },
  {
    title: "Beach and Fireworks Night View",
    price: "$253",
    viewers: "Tickets sold out",
    image: "https://picsum.photos/300/200?random=5"
  }
];

export function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-700 mt-2">{item.viewers}</p>
            <div className="mt-3 text-xl font-bold">{item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
