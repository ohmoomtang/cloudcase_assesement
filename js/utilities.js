//utilities.js
//This is a file that contains all functions for calculator

export const calcAnnualTax = (annualBaseSalaryAmt, sacrificeSalaryPerMnthAmt = 0 ) => {
    if(parseFloat(sacrificeSalaryPerMnthAmt*12)>parseFloat(annualBaseSalaryAmt)){
        console.log("Sacrifice amount cannot be more than annual salary")
        return 0;
    }

    let salaryAfterSac = parseFloat(annualBaseSalaryAmt) - (parseFloat(sacrificeSalaryPerMnthAmt) * 12);
    
    if(salaryAfterSac<=18200){
        return 0;
    }
    else if(salaryAfterSac<=37000){
        return (salaryAfterSac-18200) * 0.19;
    }
    else if(salaryAfterSac<=90000){
        return 3572+((salaryAfterSac-37000) * 0.325);
    }    
    else if(salaryAfterSac<=180000){
        return 20797+((salaryAfterSac-90000) * 0.37);
    }
    else{
        return 54097+((salaryAfterSac-180000) * 0.45);
    }
}

export const calcAnnualSuper = (annualBaseSalaryAmt, sacrificeSalaryPerMnthAmt = 0 ) => {
    if(parseFloat(sacrificeSalaryPerMnthAmt*12)>parseFloat(annualBaseSalaryAmt)){
        console.log("Sacrifice amount cannot be more than annual salary")
        return 0;
    }
    
    return (0.1*parseFloat(annualBaseSalaryAmt))+parseFloat(sacrificeSalaryPerMnthAmt*12);
}

export const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2
  });