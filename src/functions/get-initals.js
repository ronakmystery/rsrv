export function getInitals(name) {
  let x = name.split(" ");
  return `${x[0][0]} ${x[1][0]}`;
}
