import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) { 
  //console.log("props daylist", props);
  
  const allDays = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        id={day.id}
        name={day.name}
        spots={day.spots}
        setDay={props.setDay}
        selected={props.onChange}
      />
    );
  });

  return (<>
    <ul >{allDays}</ul>
  </>);
};