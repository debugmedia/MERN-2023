import { useState } from "react";
import "../Components/Accordion.css";

const faq = [
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
];
const Accordion = () => {
  const [currentActiveFaqId, setCurrentActiveFaqId] = useState("");

  const handleFaqView = (faqId) => {
    setCurrentActiveFaqId(currentActiveFaqId === faqId ? "" : faqId);
  };

  return (
    <div className="faq">
      {faq.map((data, index) => (
        <div key={data.id} className="acccontainer">
          <div className="acctitle">
            <p>{data.title}</p>
            <button className="accview" onClick={() => handleFaqView(data.id)}>
              {currentActiveFaqId === data.id ? "Hide" : "Show"}
            </button>
          </div>
          {currentActiveFaqId === data.id && (
            <div className="accdetails">
              <p>{data.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
