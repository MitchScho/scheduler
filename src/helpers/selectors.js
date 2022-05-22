
export function getAppointmentsForDay(state, day) {

  // Find the object in our state.days array who's name matches the provided day. 
  const foundDay = state.days.find(someDay => someDay.name === day);

  // If there are no appointments on the given day, our days data will be empty
  // return an empty array.
  if (!foundDay) {
    return [];
  }

  // now access that specific days appointment array.
  // iterate through it, comparing where it's id matches the id of states.appointments and return that value.
  return foundDay.appointments.map(id => {
  
    return state.appointments[id];
  });
}


//The function should return a new object containing the interview data when we pass 
//it an object that contains the interviewer.Otherwise, the function should return null. 
export function getInterview(state, interview) {
  
  if (!interview || !interview.interviewer) {
    return null;
  }
  
  const interviewerId = interview.interviewer;
  interview.interviewer = state.interviewers[interviewerId];
  
  return interview;
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