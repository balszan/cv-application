import "../styles/preview.css";
import PreviewHeader from "./PreviewHeader";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

function Preview({
  generalData,
  setGeneralData,
  educationData,
  setEducationData,
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
      <PreviewExperience />
    </div>
  );
}

export default Preview;
