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

  return (
    <>
      <Interactive
        generalData={generalData}
        setGeneralData={setGeneralData}
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <Preview
        generalData={generalData}
        setGeneralData={setGeneralData}
        educationData={educationData}
        setEducationData={setEducationData}
      />
    </>
  )
}
