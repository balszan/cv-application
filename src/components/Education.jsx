import { useState } from "react"

function Education({ educationData, setEducationData }) {
  const { school, degree, start, finish, location } = educationData
  const [formData, setFormData] = useState(educationData)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEducationData(formData)
  }

  return (
    <>
      <h2>Education</h2>
      <form id="education" className="interactive-section">
        <label htmlFor="school">School:</label>
        <input
          type="text"
          id="school"
          name="school"
          defaultValue={school}
          onChange={handleChange}
        ></input>

        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          defaultValue={degree}
          onChange={handleChange}
        ></input>

        <label htmlFor="start">Start:</label>
        <input
          type="date"
          id="start"
          name="start"
          defaultValue={start}
          onChange={handleChange}
        ></input>

        <label htmlFor="finish">Finish:</label>
        <input
          type="date"
          id="finish"
          name="finish"
          defaultValue={finish}
          onChange={handleChange}
        ></input>

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={location}
          onChange={handleChange}
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </>
  )
}

export default Education
