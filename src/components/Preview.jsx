import "../styles/preview.css"
import PreviewHeader from "./PreviewHeader"
import PreviewEducation from "./PreviewEducation"
import PreviewExperience from "./PreviewExperience"

function Preview({
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
    <div id="preview">
      <PreviewHeader
        generalData={generalData}
        setGeneralData={setGeneralData}
      />
      <PreviewEducation
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <PreviewExperience
        experienceData={experienceData}
        setExperienceData={setExperienceData}
        experienceSingleData={experienceSingleData}
        setExperienceSingleData={setExperienceSingleData}
      />
    </div>
  )
}

export default Preview
