const FindClubForm = () => {
  return ( 
    <div className="form-container">
      <h1>Search For A Club</h1>
      <p>Find what clubs are available around your area based on your interests</p>
      <form>
        <input type="text" placeholder="Enter your city..." className="city-input" />
        <button>See Clubs</button>
      </form>
    </div>
  )
}
 
export default FindClubForm;