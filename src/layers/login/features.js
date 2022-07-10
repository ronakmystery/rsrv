import "./features.scss";

export const Features = () => {
  return (
    <div id="features">
      {[
        {
          icon: "event_available",
          feat: "Reservations",
          desc: "Take detailed reservations which are then automatically sorted"
        },
        {
          icon: "menu_book",
          feat: "Floorchart",
          desc: "A simple floorchart with an auto-tally of guests per server"
        },
        {
          icon: "note",
          feat: "Note",
          desc: "Take a daily note"
        },
        {
          icon: "description",
          feat: "Summary",
          desc: "See a summary of reservations for the day"
        }
      ].map((x, i) => (
        <div
      
          className="feature"
          key={x.feat}
        >
          <i className="material-icons-round feature-icon">{x.icon}</i>
          <div className="feature-name">{x.feat}</div>
          <div className="feature-description">{x.desc}</div>
        </div>
      ))}
    </div>
  );
};
