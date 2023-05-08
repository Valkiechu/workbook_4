let employee = {
    employeeId: 1,
    name: "Ethan",
    jobTitle: "Theatre Teacher",
    payRate: 38.72,
  };
  
  //passing an object to a function
  function printEmployee(employee) {
    console.log("-------------passing an object to a function");
    console.log(employee.employeeId);
    console.log(employee.name);
    console.log(employee.jobTitle);
    console.log(employee.payRate);
  }
  
  printEmployee(employee);
  
  function createPayStub(id, name, payRate, hoursWorked) {
    let grossPay = 0;
    if (hoursWorked <= 40) {
      grossPay = payRate * hoursWorked;
    } else {
      grossPay = 40 * payRate + (hoursWorked - 40) * 1.5 * payRate;
    }
    
    let payStub = {
      employeeId: id,
      name: name,
      grossPay: grossPay,
    };
    return payStub;
  }
  
  console.log("--------------return functions from objects");
  
  let emp1PayStub = createPayStub("1", "Ezra", 38.46, 49);
  console.log(emp1PayStub);
  
  let emp2PayStub = createPayStub("2", "Elisha", 43.27, 42);
  console.log(emp2PayStub);





  let partCode = "ACE:1-12";

function getSupplier(code){
    let pos = code.indexOf(":");
    let supplier = code.substring(0, pos);
console.log("Supplier: " + supplier);
}

function getProductNumber(code){
    let pos = code.indexOf(":")
    let pos2 = code.indexOf("-");
    let productNumber = code.substring(pos+1, pos2);
    console.log("Product Number: " + productNumber);

}

function getSize(code){
    let pos = code.indexOf("-")
    let size = code.substring(pos+1);

console.log("Size: " + size);
}

getSupplier(partCode);
getProductNumber(partCode);
getSize(partCode);