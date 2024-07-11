function PreviewEducation({ educationData, setEducationData }) {
  const { school, degree, start, finish, location } = educationData
  return (
    <div className="education-container">
      <h2 id="education-title">Education</h2>
      <div className="education-smaller-container">
        <div className="education-content">
          <h4>{degree}</h4>
          <p>{school}</p>
          <p>{location}</p>
        </div>
        <div className="education-dates">
          <p>{start ? start + " to " + finish : ""}</p>
        </div>
      </div>
    </div>
  )
}

export default PreviewEducation
