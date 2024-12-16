import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"


function Popular() {
    return (
      <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
        <div className="popular__container">
          <div className="course-card">
            <img src={one} alt="Course 1" />
            <h3>2023 Python Data Visualization Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐</p>
            <p>
              449<del>1899</del>
            </p>
          </div>
          <div className="course-card">
            <img src={two} alt="Course 2" />
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>
              499<del>1899</del>
            </p>
          </div>
          <div className="course-card">
            <img src={three} alt="Course 3" />
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>
              449<del>2999</del>
            </p>
          </div>
          <div className="course-card">
            <img src={four} alt="Course 4" />
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐</p>
            <p>
              449<del>1999</del>
            </p>
          </div>
        </div>
      </div>
    );
  }
  export default Popular