function PreviewExperience({ experienceData, experienceSingleData }) {
  return (
    <div className="experience-container">
      <h2 id="experience-title">Experience</h2>
      {experienceData.map((position) => {
        return (
          <div className="single-position" key={position.id}>
            <div className="position-info">
              <h4>{position.companyName}</h4>
              {position.title}
              {position.location}
            </div>
            <div className="dates">
              {position.start}
              {position.finish}
            </div>
            <div className="position-description">{position.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default PreviewExperience
