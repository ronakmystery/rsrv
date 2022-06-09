import { ID } from "../functions/id";

let today = new Date().toLocaleDateString();

export const SampleReservations = [
  {
    name: "jane",
    people: 3,
    note: "birthday",
    confirmed: false,
    day: today,
    email: "jane@gmail.com",
    id: ID(),
    phone: "777-777-7777",
    time: "17:00"
  },
  {
    name: "john",
    people: 3,
    note: "",
    confirmed: true,
    day: today,
    email: "john@gmail.com",
    id: ID(),
    phone: "111-777-7777",
    time: "15:00"
  }
];
