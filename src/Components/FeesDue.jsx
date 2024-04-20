import FeesDueCSS from "../CSS/FeesDue.module.css";
import Box from "./Box";
const data = [
  {
    "Receipt No.": "#98761",
    Month: "November",
    "Payment Date	": "10 Nov 20",
    "Total Pending Amount":"₹899",
    "button":"Pay Now"
  },
  {
    "Receipt No.": "#98762",
    Month: "October",
    "Payment Date	": "10 Oct 20",
    "Total Pending Amount":"₹999",
    "button":"Pay Now"
  },
  {
    "Receipt No.": "#98763",
    Month: "January",
    "Payment Date	": "10 Jan 20",
    "Total Pending Amount":"₹1099",
    "button":"Pay Now"
  },
  {
    "Receipt No.": "#9874",
    Month: "February",
    "Payment Date	": "10 Feb 20",
    "Total Pending Amount":"₹1599",
    "button":"Pay Now"
  },
];
const FeesDue = () => {
  return (
    <>
      <div className={FeesDueCSS.container}>
        <Box data={data} />
      </div>
    </>
  );
};

export default FeesDue;
