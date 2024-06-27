import FeesDueCSS from "../CSS/FeesDue.module.css";
import Box from "./Box";
const data = [
  {
    Subject: "Chemistry",
    "Subject Code": "KCS101T",
    "Assignment Date	": "10 Nov 2024",
    "Due Date": "10 Dec 2024",
    select: "Submit",
  },
  {
    Subject: "Math",
    "Subject Code": "KCS102T",
    "Assignment Date	": "12 Nov 2024",
    "Due Date": "12 Dec 2024",
    select: "Submit",
  },
  {
    Subject: "Physics",
    "Subject Code": "KCS103T",
    "Assignment Date	": "14 Nov 2024",
    "Due Date": "14 Dec 2024",
    select: "Submit",
  },
  {
    Subject: "C Programming Language",
    "Subject Code": "KCS104T",
    "Assignment Date	": "18 Nov 2024",
    "Due Date": "18 Dec 2024",
    select: "Submit",
  },
];
const Assignment = () => {
  return (
    <>
      <div className={FeesDueCSS.container}>
        <Box data={data} />
      </div>
    </>
  );
};

export default Assignment;
