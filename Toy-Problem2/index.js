//Declaring variables
const speedLimit = 70;
let carSpeed;
let demeritPoints;

function speedDetector() {
  //Getting the car speed as input to the speed detector form
  carSpeed = parseInt(speedDetectorForm.carSpeed.value);
  //using if, else statement to check feedback on car speed
  if (carSpeed < speedLimit) {
    document.getElementById("demo").innerHTML =
      "The car speed is: " + "<b>" + "Ok" + "<b>";
  }
  //Calculating demerit points for exceeding speed limit and print the number of demerit points
  else if (carSpeed >= 70) {
    demeritPoints = (carSpeed - speedLimit) / 5;
    if (demeritPoints <= 12) {
      document.getElementById("demo").innerHTML =
        "The driver's demerit points is: " + "<b>" + demeritPoints + "<b>";
    }
    //License suspension if demerit points more than 12
    else if (demeritPoints > 12) {
      document.getElementById("demo").innerHTML =
        "Feedback: " + "<b>" + "License suspended" + "<b>";
    }
  }
}
