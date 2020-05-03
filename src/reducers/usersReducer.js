import Man1 from "../Assets/PNG/man1.png";
import Man2 from "../Assets/PNG/man2.png";
import Girl3 from "../Assets/PNG/girl3.png";
import Girl4 from "../Assets/PNG/girl4.png";
import Girl5 from "../Assets/PNG/girl5.png";
import Girl6 from "../Assets/PNG/girl6.png";
import Girl7 from "../Assets/PNG/girl7.png";
import Girl8 from "../Assets/PNG/girl8.png";

const initState = [
  {
    id: 1,
    name: "Adriana Pazos",
    email: "adriana.pazos@gmail.com",
    phone: "+19876543210",
    role: "Administrator",
    color: "#41e590",
    images: Man1,
  },
  {
    id: 2,
    name: "John Doe",
    email: "adriana.pazos@gmail.com",
    phone: "+19876543210",
    role: "Administrator",
    color: "#a4d8fb",
    images: Man2,
  },
  {
    id: 3,
    name: "Jakie Pinto",
    email: "adriana.pazos@gmail.com",
    phone: "+19876543210",
    role: "Administrator",
    color: "#ea5455",
    images: Girl3,
  },
  {
    id: 4,
    name: "Shariff Momann",
    email: "adriana.pazos@gmail.com",
    phone: "+19876543210",
    role: "Administrator",
    color: "#41e590",
    images: Girl4,
  },
  {
    id: 5,
    name: "Jennie K",
    email: "adriana.pazos@gmail.com",
    phone: "+19876543210",
    role: "Administrator",
    color: "#ffc594",
    images: Girl5,
  },
  {
    id: 6,
    name: "Alexa M",
    email: "adriana.pazos@gmail.com",
    phone: "+19876543210",
    role: "Administrator",
    color: "#ea5455",
    images: Girl6,
  },
  {
    id: 7,
    name: "Suman Kumari",
    email: "adriana.pazos@gmail.com",
    phone: "+19876543210",
    role: "Administrator",
    color: "#a4d8fb",
    images: Girl7,
  },
  {
    id: 8,
    name: "Zozo P",
    email: "adriana.pazos@gmail.com",
    phone: "+19876543210",
    role: "Administrator",
    color: "#fec08a",
    images: Girl8,
  },
];

export default function usersReducer(state = initState, action) {
  switch (action.type) {
    default:
      return [...state];
  }
}
