import "../styles/preview.css";
import PreviewHeader from "./PreviewHeader";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

function Preview() {
  return (
    <div id="preview">
      <PreviewHeader />
      <PreviewEducation />
      <PreviewExperience />
    </div>
  );
}

export default Preview;
