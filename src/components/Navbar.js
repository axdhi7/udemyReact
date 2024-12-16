import sale from "../assets/images/sale.jpg"



function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__s1">
          <h1 className="navbar__s1__title">Udemy</h1>
        </div>
        <div className="navbar__s2">
          <i className="fa-solid fa-magnifying-glass" style={{ color: "#000205" }}></i>
          <input placeholder="Search for anything here. Tech, Business, Art..." />
        </div>
        <div className="navbar__s3">
          <p>Courses</p>
          <p>MyLearning</p>
          <i className="fa-solid fa-cart-shopping" style={{ color: "#000000" }}></i>
          <i className="fa-solid fa-bell" style={{ color: "#000000" }}></i>
          <i className="fa-solid fa-user" style={{ color: "#000000" }}></i>
        </div>
      </div>
      <div className="categories">
        <p>Development</p>
        <p>Business</p>
        <p>IT & Software</p>
        <p>Personal Development</p>
        <p>Design</p>
        <p>Marketing</p>
      </div>
      <div className="sale-image">
        <img src={sale} alt="Sale Image" />
        <div className="sale-image__offer">
          <h2>Udemy Flash Sale! 24 hours to save.</h2>
          <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
      </div>
    </div>
  );
}
 
export default Navbar