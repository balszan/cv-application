import { useState } from "react"

function Experience() {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const toggleVisible = () => {
    setIsFormVisible(true)
  }

  return (
    <>
      <h2>Experience</h2>

      {isFormVisible ? (
        <form id="experience" className="interactive-section">
          <label htmlFor="company">Company Name:</label>
          <input type="text" id="company" name="company"></input>

          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title"></input>

          <label htmlFor="start">Start:</label>
          <input type="date" id="start" name="start"></input>

          <label htmlFor="finish">Finish:</label>
          <input type="date" id="finish" name="finish"></input>

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location"></input>

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description"></input>

          <button type="submit">Save</button>
        </form>
      ) : (
        <button onClick={toggleVisible}>Add New</button>
      )}
    </>
  )
}

export default Experience
