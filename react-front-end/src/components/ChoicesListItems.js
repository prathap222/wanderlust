import React from "react";
import "../styles/ActivityListItem.scss";
import classNames from "classnames";

export default function ChoicesListItems(props) {
  const dayClass = classNames("activity-list__item", {
    " activity-list__item--selected": props.selected,
    // " activity-list__item--full": props.spots === 0
  });


  return (
    <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className={dayClass}>{props.name}</h2>
    </li>
  );
}
