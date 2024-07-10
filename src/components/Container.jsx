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

  return (
    <>
      <Interactive generalData={generalData} setGeneralData={setGeneralData} />
      <Preview />
    </>
  )
}
