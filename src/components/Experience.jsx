import { useState } from "react"

function Experience({
  experienceData,
  setExperienceData,
  experienceSingleData,
  setExperienceSingleData,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const { companyName, title, start, finish, location, description, id } =
    experienceSingleData

  const toggleVisible = () => {
    setIsFormVisible(true)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setExperienceSingleData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSave = (e) => {
    e.preventDefault()

    const newExperienceEntry = {
      ...experienceSingleData,
      id: crypto.randomUUID(),
    }
    setExperienceData((prevExperienceData) => [
      ...prevExperienceData,
      newExperienceEntry,
    ])
    setExperienceSingleData({
      companyName: "",
      title: "",
      start: "",
      finish: "",
      location: "",
      description: "",
      id: "",
    })

    setIsFormVisible(false)
  }

  return (
    <>
      <h2>Experience</h2>

      {isFormVisible ? (
        <form id="experience" className="interactive-section">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={handleChange}
          ></input>

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          ></input>

          <label htmlFor="start">Start:</label>
          <input
            type="date"
            id="start"
            name="start"
            value={start}
            onChange={handleChange}
          ></input>

          <label htmlFor="finish">Finish:</label>
          <input
            type="date"
            id="finish"
            name="finish"
            value={finish}
            onChange={handleChange}
          ></input>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={handleChange}
          ></input>

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
          ></input>

          <button type="submit" onClick={handleSave}>
            Save
          </button>
        </form>
      ) : (
        <button onClick={toggleVisible}>Add New</button>
      )}
    </>
  )
}

export default Experience
