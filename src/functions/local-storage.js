import {
  SampleReservations,
  SampleNotes,
  SampleServers,
  SampleCanvas
} from "../database/sample";

export const LS = {
  init() {
    this.name = "rsrv-beta";
    let data = JSON.parse(localStorage.getItem(this.name));
    if (data !== null) {
      this.data = data;
    } else {
      this.data = {
        dailynotes: SampleNotes,
        reservations: SampleReservations,
        servers: SampleServers,
        canvas: SampleCanvas
      };
      this.save(this.data);
    }
  },
  save(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }
};
