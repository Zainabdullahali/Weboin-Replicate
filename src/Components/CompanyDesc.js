import React from "react";
import "./CompanyDesc.css";

function CompanyDesc({details}) {
  const placedStudents = details.filter((student) => student.status === "Placed");
  const unplacedStudents = details.filter((student) => student.status === "Unplaced");

  return (
    <div className="companyDesc-container">
      <div className="company-slogan">
        <h1>
          Empower your future<br></br> with cutting-edge skills<br></br> New, Embrace innovation,
          master technology, &<br></br> shape the digital world<br></br> Your journey to success<br></br>
          starts here.
        </h1>
      </div>

      <div className="student-data">
        <div className="about-course">
          <p>
            Join our course with a proven track record of success,<br></br>{" "}
            where learning isn't just about gaining skills; it's about<br></br>{" "}
            growing them. Join us, learn with confidence, and<br></br> watch
            your skills soar.
          </p>
        </div>

        <div className="student-info">
          <div className="total-student-box">
            <h2 className="total-student">Total Students</h2>
            <h2 className="total-student-count">{details.length}</h2>
          </div>

          <div className="placed-student-box">
            <h2 className="placed-student">Placed Students</h2>
            <h2 className="placed-student-count">{placedStudents.length}</h2>
          </div>

          <div className="unplaced-student-box">
            <h2 className="unplaced-student">Unplaced Students</h2>
            <h2 className="unplaced-student-count">{unplacedStudents.length}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDesc;
