function Education() {
  return (
    <>
      <h2>Education</h2>
      <form id="education" className="interactive-section">
        <label htmlFor="school">School:</label>
        <input type="text" id="school" name="school"></input>

        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree"></input>

        <label htmlFor="start">Start:</label>
        <input type="date" id="start" name="start"></input>

        <label htmlFor="finish">Finish:</label>
        <input type="date" id="finish" name="finish"></input>

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location"></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Education;
