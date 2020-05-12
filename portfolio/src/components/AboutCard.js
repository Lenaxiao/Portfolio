import React from "react";

const AboutCard = ({
  topic,
  option,
  content,
  start,
  end,
  additional = null,
  detail = null
}) => {
  return (
    <div className="about-card-container">
      <p className="topic">{topic}</p>
      <p className="option">{option}</p>
      <div className="content">
        {content ? <p>{content}</p> : null}
        {detail ? (
          <ul className="detail-list">
            {detail.map((val, indx) => {
              return <li key={indx}>{val}</li>;
            })}
          </ul>
        ) : null}
        {additional ? <p className="additional">GPA: {additional}</p> : null}
      </div>
      <p className="period">{`${start} - ${end}`}</p>
    </div>
  );
};

export default AboutCard;
