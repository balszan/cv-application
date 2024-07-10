import General from "./General"
import Education from "./Education"
import Experience from "./Experience"
import "../styles/interactive.css"
import "../styles/interactive-section.css"

function Interactive({ generalData, setGeneralData }) {
  return (
    <div id="interactive">
      <div className="interactive-section">
        <General generalData={generalData} setGeneralData={setGeneralData} />
      </div>

      <div className="interactive-section">
        <Education />
      </div>

      <div className="interactive-section">
        <Experience />
      </div>
    </div>
  )
}

export default Interactive
