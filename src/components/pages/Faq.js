import React from "react";
import { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/cart.css";
import "../../assets/css/faq.css";
import { faq } from "../../utils/faqData";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <>
      <div className="head display-flex-center">
        <div className="header-blog ">
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
      <div className="container">
        <div className="accordion">
          {faq.map((accordion_items, index) => (
            <div className="accordion_items"> 
              <div className={ selected === index ? "accordion-item-header active" : "accordion-item-header"} onClick={() => toggle(index)}>
                <span className="number-accordion">{accordion_items.id}</span>
                <span>{accordion_items.question}</span>
                <span className="icon-accordion">+</span>
              </div>
              <div className="accrodion-item-body">
                <div class={selected === index ? "accordion-item-body-content" : "accordion-item-body close"}>
                  {accordion_items.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
