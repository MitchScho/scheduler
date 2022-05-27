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

    const newState = { ...state, day };
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
        setState({
          ...state, appointments, days: updateSpots(state, appointments)
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

        return state.days.map(day => {     //Find current day in array of days
      if (day.name === state.day) {
        return {      //If selected day is day. Copy day object 
          ...day,                       
          spots: day.appointments      //Update spots value
            .map((id) => appointments[id])      // Use appointment id for that day to find the objects that match. 
            .filter(({ interview }) => !interview)      // for every appointment check if interview is falsey
            .length       // This is the number of interviews falsy(null)
        }
      }
      return day
    })
  };

  return { state, setDay, bookInterview, cancelInterview }
};

export default useApplicationData;
