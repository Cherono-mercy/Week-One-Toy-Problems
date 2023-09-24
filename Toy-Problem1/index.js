//Student Grade Generator
//Initializing the variables.
let grade;
let studentMarks;

function studentGradeGenerator() {
  //Getting student marks as input from the grading form.
  studentMarks = parseInt(gradingForm.studentMarks.value);

  //Using the if..else statement to grade the student's marks and printing out the grade in bold
  if (studentMarks > 79 && studentMarks <= 100) {
    document.write("The student's grade is: " + "<b>" + "A" + "<b>");
  } else if (studentMarks <= 79 && studentMarks >= 60) {
    document.write("The students grade is: " + "<b>" + "B" + "<b>");
  } else if (studentMarks <= 59 && studentMarks > 49) {
    document.write("The stdent's grade is: " + "<b>" + "C" + "<b>");
  } else if (studentMarks <= 49 && studentMarks >= 40) {
    document.write("The student's grade is: " + "<b>" + "D" + "<b>");
  } else if (studentMarks < 40 && studentMarks >= 0) {
    document.write("The student's grade is: " + "<b>" + "E" + "<b>");
  } else if (studentMarks < 0 || studentMarks > 100) {
    document.write("Please input a value between 0 and 100");
  }
}
