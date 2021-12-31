const initialState = 10;
// it's just a func returning values
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - action.payload;
    case "incNumberByFive":
      return state + 5;
    default:
      return state;
  }
}

export default changeTheNumber;