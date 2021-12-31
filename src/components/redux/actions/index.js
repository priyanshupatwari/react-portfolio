export const incNumber = () => {
 return {
  type: "INCREMENT"
 }
}
export const decNumber = (num) => {
 return {
  type: "DECREMENT",
  payload:num
  // you can name anything
 }
}
export const incNumberByFive = () => { return { type: "incNumberByFive" } }
