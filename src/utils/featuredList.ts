import { ServerUrl } from "../api/Api";
export const FeaturedList = [
  {
    id: "123",
    name: "IPAD",
    imageUrl: `${ServerUrl}images/ipad.jpg`,
    price: "$200",
    route: "shop/videogames/playstation5",
  },
  {
    id: "456",
    name: "GEFORCE GTX 1080",
    imageUrl: `${ServerUrl}images/graphicCard.jpg`,
    price: "$300",
    route: "shop/VIDEOGAMES/951055",
  },
  {
    id: "789",
    name: "PLAYSTATION 5",
    imageUrl: `${ServerUrl}images/ps5.jpg`,
    price: "$500",
    route: "shop/videogames/playstation5",
    size: "large",
  },
  {
    id: "134",
    name: "SMARTWATCH XIAOMI",
    imageUrl: `${ServerUrl}images/smartwatch.jpg`,
    price: "$100",
    route: "shop/videogames/playstation5",
  },
  {
    id: "254",
    name: "HTC VR HEADSET",
    imageUrl: `${ServerUrl}images/vrheadset.jpg`,
    price: "$600",
    route: "shop/videogames/playstation5",
  },
];

export const FeaturedBrands = [{ id: "569", imageUrl: "link", name: "Apple" }];

export const Categories = [
  { id: "8934", name: "Laptops", popular: true },
  { id: "0934", name: "Videogames", popular: true },
  { id: "9934", name: "Cameras", popular: true },
  { id: "3457", name: "Smart Phones", popular: false },
  { id: "2345", name: "Monitors", popular: false },
  { id: "8799", name: "Gaming Pc", popular: true },
  { id: "9903", name: "Tablets", popular: true },
  { id: "3464", name: "Headsets", popular: false },
];
