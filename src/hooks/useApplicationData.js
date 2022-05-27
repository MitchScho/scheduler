import { useState, useEffect } from 'react';
import axios from "axios";

const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => {
    console.log("day in setDay", day);
    console.log("state within setDay", state);
    const newState = { ...state, day };
    console.log("new state within setDay", newState);
    setState(newState);
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ])
      .then((all) => {

        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({ ...state, appointments, days: updateSpots(state, appointments)
});
      })
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState({ ...state, appointments, days: updateSpots(state, appointments) });
      })
  };

  const updateSpots = (state, appointments) => {

   //days array is mapped. Find current day in array of days
    return state.days.map(day => {
      if (day.name === state.day) {
        return {
          //copy day object to allow value update
          ...day,
          //the appointments Array for the day
          spots: day.appointments
            .map((id) => appointments[id]) //for every appointment in the array find the object that mathches returns an array of appointment objects
            .filter(({ interview }) => !interview)// for every appointment check if interview is falsey
            .length// count array item which are spots availible
       }
      }
      return day
   })
  };

  return { state, setDay, bookInterview, cancelInterview }
};

export default useApplicationData;
