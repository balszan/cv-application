import "../styles/preview.css"
import PreviewHeader from "./PreviewHeader"
import PreviewEducation from "./PreviewEducation"
import PreviewExperience from "./PreviewExperience"

function Preview({ generalData, setGeneralData }) {
  return (
    <div id="preview">
      <PreviewHeader
        generalData={generalData}
        setGeneralData={setGeneralData}
      />
      <PreviewEducation />
      <PreviewExperience />
    </div>
  )
}

export default Preview
