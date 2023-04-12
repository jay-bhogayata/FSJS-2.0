const month = prompt("Enter the month: ");
if (month === "September" || month === "October" || month === "November") {
  console.log("Autumn");
} else if (
  month === "December" ||
  month === "January" ||
  month === "February"
) {
  console.log("Winter");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("Spring");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("Summer");
} else {
  console.log("Invalid month");
}
