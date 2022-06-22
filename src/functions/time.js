import moment from "moment";

export function convert24to12(time) {
  return moment(time, ["hh.mm"]).format("h:mm");
}

export function convertToHour(time) {
  return moment(time, ["hh.mm"]).format("hA");
}
