function PreviewEducation({ educationData, setEducationData }) {
  const { school, degree, start, finish, location } = educationData
  return (
    <div className="education-container">
      <h2 id="education-title">Education</h2>
      <h4>{degree}</h4>
      <p>{school}</p>
      <p>{location}</p>
      <p>
        {start} to {finish}
      </p>
    </div>
  )
}

export default PreviewEducation
