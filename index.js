// Write your solution in this file!
const employee = {
    name: "yoyo", 
    streetAddress :"36 street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  return {
    ...employee,
      [key]: value
  }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}


function  deleteFromEmployeeByKey(employee, key){
    const test = {...employee}
    delete test[key]
    return  test
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = employee
    delete newEmployee[key]
    return newEmployee

}

