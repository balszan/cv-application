function PreviewHeader({ generalData, setGeneralData }) {
  const { fullname, email, phone, city } = generalData

  console.log(Object.keys(generalData))
  console.log(fullname)
  return (
    <div className="header-container">
      <h2 className="previewTitle">{fullname || "Name Placeholder"}</h2>
      <div className="general-container">
        <p className="previewGeneral" id="email">
          {email || "Email Placeholder"}
        </p>
        <p className="previewGeneral" id="phone">
          {phone || "Phone Placeholder"}
        </p>
        <p className="previewGeneral" id="city">
          {city || "City Placeholder"}
        </p>
      </div>
    </div>
  )
}

export default PreviewHeader
