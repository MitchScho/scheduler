import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {

  const daysArray = props.days.map((day) => {


    return (
      <DayListItem
        key={day.id}
        id={day.id}
        name={day.name}
        spots={day.spots}
        setDay={props.setDay}
        selected={day.name === props.day}
      />
    );
  });
  

  return <ul>{daysArray}</ul>;
};

export default DayList;
