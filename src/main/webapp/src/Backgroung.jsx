import "./Background.css";
import MyProfile from "./MyProfile";
const acadmicInfo=[
  { name: "Name", value: "Sumit Kumar", editable: false },
  { name: "Roll No.", value: "2101280130002", editable: false },
  { name: "Father Name", value: "Hariprasad", editable: false },
  { name: "Mother Name", value: "Phool Kumari", editable: false },
  { name: "Gender", value: "Male", editable: false },
  { name: "D.O.B.", value: "18/02/2004", editable: false },
  { name: "Course", value: "Bechlor of Technology", editable: false },
  { name: "Branch", value: "Information Technology", editable: false },
]
const personalData = [
  { name: "Blood Group", value: "A+", editable: true },
  { name: "Date of Admission", value: "dd-mm-yy", editable: false },
  { name: "Admission Session", value: "2020-21", editable: false },
  { name: "Admission Semester", value: "1", editable: false },
  { name: "College", value: "Bharat Institute of Technology, Meerut", editable: false },
  { name: "Semester", value: "6", editable: false },
  { name: "Mobile No.", value: "8439060298", editable: true },
  { name: "Email ID", value: "sumitkumar84390@gmail.com", editable: true },
  { name: "Address", value: "278 Pocket C, Sector 4C", editable: true },
  { name: "City", value: "Meerut", editable: true },
  { name: "State", value: "Utter Pradesh", editable: true },
  { name: "Country", value: "India", editable: true },
  { name: "Pincode", value: "250103", editable: true },
  { name: "Addhar No.", value: "XXXX XXXX XXXX", editable: true },
  { name: "Home Mobile No.", value: "XXXXXXXXXX", editable: true },
];
const Background = () => {
  return (
    <>
      <div className="main-background-container">
        <div className="background-container">
          <div className="background-header">
            <div className="arrow">{"<"}</div>
            <div className="middle-button">
              <span>Attandance</span>
              <span>Holidays</span>
            </div>
            <div className="right-button">Done</div>
            <div className="for-mobile">
              <div className="upper-button">
                <div className="mobile-arrow">{"<"}</div>
                <div className="mobile-right-button">Done</div>
              </div>
              <div className="mobile-middle-button">
                <span>Attandance</span>
                <span>Holidays</span>
              </div>
            </div>
          </div>

          <div className="background-curve">
            <MyProfile acadmicInfo={acadmicInfo} personalData={personalData} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Background;
