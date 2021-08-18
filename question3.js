var employee =
{
company: 'Rohit'
}
var emp1 = Object.create(employee);
delete emp1.company 
console.log(emp1.company);


// OUTPUT=> Rohit