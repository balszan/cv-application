import General from "./General"
import Education from "./Education"
import Experience from "./Experience"
import "../styles/interactive.css"
import "../styles/interactive-section.css"

function Interactive({
  generalData,
  setGeneralData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
  experienceSingleData,
  setExperienceSingleData,
}) {
  return (
    <div id="interactive">
      <div className="interactive-section">
        <General generalData={generalData} setGeneralData={setGeneralData} />
      </div>

      <div className="interactive-section">
        <Education
          educationData={educationData}
          setEducationData={setEducationData}
        />
      </div>

      <div className="interactive-section">
        <Experience
          experienceData={experienceData}
          setExperienceData={setExperienceData}
          experienceSingleData={experienceSingleData}
          setExperienceSingleData={setExperienceSingleData}
        />
      </div>
    </div>
  )
}

export default Interactive
