import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) { 
  
  const daysArray = props.days.map((day) => {

    return (
      <DayListItem
        key={day.id}
        id={day.id}
        name={day.name}
        spots={day.spots}
        setDay={props.onChange}
        selected={day.name === props.value}
      />
    );
  });

  return (
      <ul >{daysArray}</ul> 
  );
};