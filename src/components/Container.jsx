import Interactive from "./Interactive"
import Preview from "./Preview"
import { useState } from "react"

export default function Container() {
  const [generalData, setGeneralData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
  })

  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    start: "",
    finish: "",
    location: "",
  })

  const [experienceData, setExperienceData] = useState([])

  const [experienceSingleData, setExperienceSingleData] = useState({
    companyName: "",
    title: "",
    start: "",
    finish: "",
    location: "",
    description: "",
    id: crypto.randomUUID(),
  })

  return (
    <>
      <Interactive
        generalData={generalData}
        setGeneralData={setGeneralData}
        educationData={educationData}
        setEducationData={setEducationData}
        experienceData={experienceData}
        setExperienceData={setExperienceData}
        experienceSingleData={experienceSingleData}
        setExperienceSingleData={setExperienceSingleData}
      />
      <Preview
        generalData={generalData}
        setGeneralData={setGeneralData}
        educationData={educationData}
        setEducationData={setEducationData}
        experienceData={experienceData}
        setExperienceData={setExperienceData}
        experienceSingleData={experienceSingleData}
        setExperienceSingleData={setExperienceSingleData}
      />
    </>
  )
}
