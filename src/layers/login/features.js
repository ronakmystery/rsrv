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
          feat: "Floorplan",
          desc: "A quick and easy of way of creating a floorplan"
        },
        {
          icon: "lightbulb_outline",
          feat: "Simplify",
          desc: "Various features that simply handling reservations"
        }
      ].map((x, i) => (
        <div className="feature" key={x.feat}>
          <i className="material-icons-round feature-icon">{x.icon}</i>
          <div className="feature-name">{x.feat}</div>
          <div className="feature-description">{x.desc}</div>
        </div>
      ))}
    </div>
  );
};
