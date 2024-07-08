import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/interactive.css";
import "../styles/interactive-section.css";

function Interactive() {
  return (
    <div id="interactive">
      <div className="interactive-section">
        <General />
      </div>

      <div className="interactive-section">
        <Education />
      </div>

      <div className="interactive-section">
        <Experience />
      </div>
    </div>
  );
}

export default Interactive;
