import React from "react";
import { AiOutlineEnvironment } from "react-icons/ai";

export default function Tour(props) {
  console.log(props.tour.img);
  return (
    <section className="tour">
      <div className="tour--container">
        <div className="tour--img">
          <img src={props.tour.img} />
        </div>
        <div className="tour--content">
          <div className="tour--location">
            <div className="tour--country">
              <AiOutlineEnvironment className="secondary-text" />{" "}
              {props.tour.country}
            </div>
            <div className="tour--map-link">Visit on Google Maps</div>
          </div>
          <div className="tour--title">
            <h2>{props.tour.title}</h2>
          </div>
          <div className="tour--date">
            <h5>
              {props.tour.travelDate.startDate} -{" "}
              {props.tour.travelDate.endDate}
            </h5>
          </div>
          <p className="tour--description">{props.tour.description}</p>
        </div>
      </div>
    </section>
  );
}
