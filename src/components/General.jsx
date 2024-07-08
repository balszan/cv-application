function General() {
  return (
    <>
      <h2>General Information</h2>
      <form id="general-information" className="interactive-section">
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname"></input>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"></input>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber"></input>

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city"></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default General;
