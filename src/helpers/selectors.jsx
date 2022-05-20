
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

    return state.appointments[id]
  });
}



// const getAppointmentsForDay = (state, day) => {

//   // Find the object in our state.days array who's name matches the provided day. 
//   const foundDay = state.days.find(someDay => someDay.name === day);

//   // If there are no appointments on the given day, our days data will be empty
//   // return an empty array.
//   if (!foundDay) {
//     return [];
//   }

//   // now access that specific days appointment array.
//   // iterate through it, comparing where it's id matches the id of states.appointments and return that value.
//   return foundDay.appointments.map(id => {

//     return state.appointments[id]
//   });
// }

// export default getAppointmentsForDay;