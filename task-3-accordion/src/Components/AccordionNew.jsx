import { useState } from "react";
import "../Components/Accordion.css";

const AccordionDetails = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="acccontainer">
      <div className="acctitle">
        <p>{data.title}</p>
        <button
          className="accview"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          {showDetails ? "Hide" : "Show"}
        </button>
      </div>
      {showDetails && (
        <div className="accdetails">
          <p>{data.content}</p>
        </div>
      )}
    </div>
  );
};

const AccordionNew = () => {
  const [faq] = useState([
    {
      id: 1,
      title: "FAQ 1",
      content:
        "Content1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
    },
    {
      id: 2,
      title: "FAQ 2",
      content:
        "Content2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
    },
    {
      id: 3,
      title: "FAQ 3",
      content:
        "Content3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
    },
    {
      id: 4,
      title: "FAQ 4",
      content:
        "Content4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
    },
  ]);

  return (
    <div className="faq">
      {faq.map((data) => (
        <AccordionDetails data={data} />
      ))}
    </div>
  );
};

export default AccordionNew;
