export function totalPeoplePerHour(reservations) {
  let n = 0;
  reservations.forEach((reservation) => {
    n += reservation.people;
  });
  return n;
}

export function totalConfirmedPeoplePerHour(reservations) {
  let n = 0;
  reservations.forEach((reservation) => {
    if (reservation.confirmed) {
      n += reservation.people;
    }
  });
  return n;
}
