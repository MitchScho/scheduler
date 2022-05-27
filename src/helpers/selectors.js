
export function getAppointmentsForDay(state, day) {

  const foundDay = state.days.find(someDay => someDay.name === day);

  if (!foundDay) {
    return [];
  }

  return foundDay.appointments.map(id => {

    return state.appointments[id];
  });
}

//Create new interview object 
export function getInterview(stateObject, interviewObject) {

  if (!interviewObject || !interviewObject.interviewer) {
    return null;
  }

  const returnObject = {
    student: interviewObject.student,
    interviewer: stateObject.interviewers[interviewObject.interviewer]
  };

  return returnObject;
};


export function getInterviewersForDay(state, day) {

  const foundDay = state.days.find(someDay => someDay.name === day);
  if (!foundDay) {
    return [];
  }

  return foundDay.interviewers.map(id => {

    return state.interviewers[id];
  });
};