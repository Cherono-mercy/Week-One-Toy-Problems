//Net Salary Calculator
//Declaring variables
let basicSalary;
let totalBenefits;
let PAYE;
let nhifDeductions;
let nssfDeductions;

//Function to calculate individual's net salary
function netSalaryCalculator() {
  //Getting user basic salary and total benefits values from the net salary form.
  basicSalary = parseInt(salaryForm.basicSalary.value);
  totalBenefits = parseInt(salaryForm.totalBenefits.value);

  //Calculating the gross salary
  const grossSalary = basicSalary + totalBenefits;
  document.write(`Gross salary: <b> ${grossSalary}/= </b> <br/>`);

  //Calculating Payee on various monthly income classes
  if (grossSalary <= 24000) {
    PAYE = grossSalary * 0.1;
  } else if ((grossSalary > 24000 && grossSalary <= 32, 333)) {
    PAYE = grossSalary * 0.25;
  } else if ((grossSalary > 32, 333 && grossSalary <= 500000)) {
    PAYE = grossSalary * 0.3;
  } else if (grossSalary > 500000 && grossSalary <= 800000) {
    PAYE = grossSalary * 0.325;
  } else if (grossSalary > 800000) {
    PAYE = grossSalary * 0.35;
  }
  //Printing out the inividual's PAYE tax
  document.write(`PAYE tax: <b> ${PAYE}/= </b> <br/>`);

  //Calculating NHIF deductions for various pay groups using else if statement
  if ((grossSalary <= 5, 999)) {
    nhifDeductions = 150;
  } else if ((grossSalary > 5, 999 && grossSalary <= 7, 999)) {
    nhifDeductions = 300;
  } else if ((grossSalary > 7, 999 && grossSalary <= 11, 999)) {
    nhifDeductions = 400;
  } else if ((grossSalary > 11, 999 && grossSalary <= 14, 999)) {
    nhifDeductions = 500;
  } else if ((grossSalary > 14, 999 && grossSalary <= 19, 999)) {
    nhifDeductions = 600;
  } else if ((grossSalary > 19, 999 && grossSalary <= 24, 999)) {
    nhifDeductions = 750;
  } else if ((grossSalary > 24, 999 && grossSalary <= 29, 999)) {
    nhifDeductions = 850;
  } else if ((grossSalary > 29, 999 && grossSalary <= 34, 999)) {
    nhifDeductions = 900;
  } else if ((grossSalary > 34, 999 && grossSalary <= 39, 999)) {
    nhifDeductions = 950;
  } else if ((grossSalary > 39, 999 && grossSalary <= 44, 999)) {
    nhifDeductions = 1000;
  } else if ((grossSalary > 44, 999 && grossSalary <= 49, 999)) {
    nhifDeductions = 1100;
  } else if ((grossSalary > 49, 999 && grossSalary <= 59, 999)) {
    nhifDeductions = 1200;
  } else if ((grossSalary > 59, 999 && grossSalary <= 69, 999)) {
    nhifDeductions = 1300;
  } else if ((grossSalary > 69, 999 && grossSalary <= 79, 999)) {
    nhifDeductions = 1400;
  } else if ((grossSalary > 79, 999 && grossSalary <= 89, 999)) {
    nhifDeductions = 1500;
  } else if ((grossSalary > 89, 999 && grossSalary <= 99, 999)) {
    nhifDeductions = 1600;
  } else if ((grossSalary > 99, 999)) {
    nhifDeductions = 1700;
  }
  document.write(`NHIF Deductions: <b> ${nhifDeductions}/= </b> <br/>`);

  //Calculating NSSF Deductions and outputing the amount in bold
  nssfDeductions = grossSalary * 0.06;
  document.write(`NSSF Deductions: <b> ${nssfDeductions}/= </b> <br/>`);

  //Calculating total deductions and outputing the amount in bold
  const totalDeductions = PAYE + nhifDeductions + nssfDeductions;
  document.write(`Total Deductions: <b> ${totalDeductions}/= </b> <br/>`);

  //Finally calculating net salary and outputing the amount in bold
  const netSalary = grossSalary - totalDeductions;
  document.write(`Net salary: <b> ${netSalary}/= </b> </br>`);
}
