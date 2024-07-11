import { useState } from "react"

function General({ generalData, setGeneralData }) {
  const { fullname, email, phone, city } = generalData

  const [formData, setFormData] = useState(generalData)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setGeneralData(formData)
  }

  return (
    <>
      <h2>General Information</h2>
      <form id="general-information" className="interactive-section">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          defaultValue={fullname}
          onChange={handleChange}
        ></input>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={email}
          onChange={handleChange}
        ></input>

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          defaultValue={phone}
          onChange={handleChange}
        ></input>

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          defaultValue={city}
          onChange={handleChange}
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </>
  )
}

export default General
