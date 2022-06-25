import { motion } from "framer-motion";

import "./features.scss";

export const Features = () => {
  const feature = {
    offscreen: { x: -100, scale: 0.5, opacity: 0 },
    onscreen: { x: 0, scale: 1, opacity: 1 }
  };
  return (
    <div id="features">
      {[
        {
          icon: "📒",
          feat: "Reservations",
          desc:
            "Take detailed reservations which are then automatically sorted by hour"
        },
        {
          icon: "📋",
          feat: "Summary",
          desc: "See a daily summary of reservations for the day"
        },
        {
          icon: "🗓",
          feat: "Calendar",
          desc: "Robust calendar for daily tracking"
        },
        {
          icon: "📝",
          feat: "Note",
          desc: "Take a daily note"
        },
        {
          icon: "🗺",
          feat: "Floorchart",
          desc: "A simple floorchart with an auto-tally of guests per server"
        }
      ].map((x) => (
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false }}
          variants={feature}
          className="feature"
          key={x.feat}
        >
          <div className="feature-icon">{x.icon}</div>
          <div className="feature-name">{x.feat}</div>
          <div className="feature-description">{x.desc}</div>
        </motion.div>
      ))}
    </div>
  );
};
