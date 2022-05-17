//index.js
//This is a main entry point script for front-end

import {calcAnnualTax,calcAnnualSuper,formatter} from './utilities.js';

const submitButton = document.querySelector('[name="submit"]');
const resetButton = document.querySelector('[name="reset"]');

const salaryInput = document.querySelector('[name="salary"]');
const sacSalaryInput = document.querySelector('[name="sac_salary"]');

const resultContainer = document.querySelector('[name="result"]');
const taxResult = document.querySelector('[name="result_tax"]');
const superResult = document.querySelector('[name="result_super"]');

let annualBaseSalaryAmt;
let sacrificeSalaryPerMnthAmt;

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    annualBaseSalaryAmt = salaryInput.value || 0;
    sacrificeSalaryPerMnthAmt = sacSalaryInput.value || 0;

    taxResult.innerText = formatter.format(calcAnnualTax(annualBaseSalaryAmt,sacrificeSalaryPerMnthAmt));
    superResult.innerText = formatter.format(calcAnnualSuper(annualBaseSalaryAmt,sacrificeSalaryPerMnthAmt));
    resultContainer.style.removeProperty("display");
    document.location.href = "#calc_result";
});

resetButton.addEventListener('click',(e)=>{
    resultContainer.style.display = "none";
});