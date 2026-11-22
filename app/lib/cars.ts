export type Car = {
  id: string;
  name: string;
  type: string;
  category: "SUV" | "Sport" | "Electric";
  seats: number;
  price: number;
  rating: number;
  image: string;
  description: string;
};

export const cars: Car[] = [
  {
    id: "porsche-911",
    name: "Porsche 911 Carrera",
    type: "Sports · 2024",
    category: "Sport",
    seats: 2,
    price: 289,
    rating: 4.98,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
    description:
      "A spirited sports car made for the long way around. Enjoy a refined cabin, responsive handling, and a memorable drive along the coast or through the city.",
  },
  {
    id: "mercedes-g-class",
    name: "Mercedes-Benz G-Class",
    type: "SUV · 2024",
    category: "SUV",
    seats: 5,
    price: 345,
    rating: 4.96,
    image:
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1400&q=85",
    description:
      "A confident, comfortable SUV with room for friends and weekend bags. Ready for city plans, scenic routes, and everything in between.",
  },
  {
    id: "tesla-model-s",
    name: "Tesla Model S",
    type: "Electric · 2024",
    category: "Electric",
    seats: 5,
    price: 179,
    rating: 4.93,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=85",
    description:
      "Quiet, all-electric comfort with a clean, modern interior. A smooth choice for getting around town or making a road trip feel effortless.",
  },
  {
    id: "range-rover-sport",
    name: "Range Rover Sport",
    type: "SUV · 2023",
    category: "SUV",
    seats: 5,
    price: 259,
    rating: 4.91,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
    description:
      "A spacious premium SUV with a comfortable ride and room to bring what matters. Ideal for a relaxed weekend escape.",
  },
  {
    id: "bmw-m4",
    name: "BMW M4 Competition",
    type: "Sports · 2024",
    category: "Sport",
    seats: 4,
    price: 219,
    rating: 4.95,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
    description:
      "A bold, athletic coupe that brings a little excitement to every mile. Take it for a spirited drive or make an occasion of the everyday.",
  },
  {
    id: "audi-e-tron-gt",
    name: "Audi e-tron GT",
    type: "Electric · 2024",
    category: "Electric",
    seats: 4,
    price: 199,
    rating: 4.89,
    image:
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1400&q=85",
    description:
      "An elegant electric grand tourer with a quiet cabin and room for a small group. A refined way to make the journey part of the plan.",
  },
];
