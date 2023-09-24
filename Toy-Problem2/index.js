//Declaring variables
const speedLimit = 70;
let carSpeed;
let demeritPoints;

function speedDetector() {
  //Getting the car speed as input to the speed detector form
  carSpeed = parseInt(speedDetectorForm.carSpeed.value);
  //using if, else statement to check feedback on car speed
  if (carSpeed < speedLimit) {
    document.write("Ok");
  }
  //Calculating demerit points for exceeding speed limit and print the number of demerit points
  else if (carSpeed >= 70) {
    demeritPoints = (carSpeed - speedLimit) / 5;
    if (demeritPoints <= 12) {
      document.write(`Points: ${demeritPoints}`);
    }
    //License suspension if demerit points more than 12
    else {
      document.write("License suspended");
    }
  }
}
