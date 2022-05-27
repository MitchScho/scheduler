const util = require('util');

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
  // console.log("getInterview interview ===", interviewObject);
  // console.log("type of interview", typeof interviewObject);
  if (!interviewObject || !interviewObject.interviewer) {
    return null;
  }

  const returnObject = {
    student: interviewObject.student,
    interviewer: stateObject.interviewers[interviewObject.interviewer]
  };
  
  // console.log("Inside getInterview state equals", stateObject);
  // console.log(util.inspect(stateObject, { showHidden: false, depth: null, colors: true }));
  
  // console.log("getInterview returning ===>>", interviewObject);
  //do not do this interviewObject.interviewer = { id: 1, name: "Hello", avatar: " Bpom" };
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