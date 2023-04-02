import { Position } from "../positions/types";
import { Employee } from "./types";

export const waitress: Position[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    image:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    image:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bobjohnson@example.com",
    image:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
  },
];

export const positions = [
  {
    id: '1',
    name: "waitress",
    name_ru: "Официанты",
    image: "/image/Waiter.png",
  },
  {
    id: '2',
    name_ru: "Повара",
    name: "povar",
    image: "/image/Waiter.png",
  },
  {
    id: '3',
    name: "hostes",
    name_ru: "Хостес",
    image: "/image/Waiter.png",
  },
  {
    id: '4',
    name: "barmen",
    name_ru: "Бармены",
    image: "/image/Waiter.png",
  },
];
