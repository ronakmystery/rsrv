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
    time: "17:00",
    server: "logan"
  },
  {
    name: "john",
    people: 4,
    note: "",
    confirmed: true,
    day: today,
    email: "john@gmail.com",
    id: ID(),
    phone: "777-777-7777",
    time: "15:00",
    server: "vincent"
  },
  {
    name: "jack",
    people: 5,
    note: "",
    confirmed: false,
    day: today,
    email: "jack@gmail.com",
    id: ID(),
    phone: "777-777-7777",
    time: "15:30",
    server: "adam"
  }
];

export const SampleNotes = {
  [today]: "Daily Note..."
};
