
const employees = [
    {  
        "employeeID": 1,
        "name": "Jose",
        "computerID": 1,
        "departmentID": 2
    },
    {
        "employeeID": 2,
        "name": "Miguel",
        "computerID": 2,
        "departmentID": 1
    },
    {
        "employeeID": 3,
        "name": "Jesus",
        "computerID": 3,
        "departmentID": 3
    }
]

const computers = [
    {
        "computerID": 1,
        "computer": "Mac"
    },
    {
        "computerID": 2,
        "computer": "Dell"
    },
    {
        "computerID": 3,
        "computer": "Acer"
    }
]

const departments = [
    {
        "departmentID": 1,
        "department": "Sales"
    },
    {
        "departmentID": 2,
        "department": "Accounting"
    },
    {
        "departmentID": 3,
        "department": "Management"
    }

]
//loops through employee array
for (let i = 0; i < employees.length; i++) {
    const element = employees[i];
    console.log(element)
    //creates new section and text node that shows the current name
    const newSection = document.createElement("h2")
    const newStatement = document.createTextNode(employees[i].name);
    newSection.appendChild(newStatement);
    document.body.appendChild(newSection);
    console.log(employees[i].departmentID)
    if (employees[i].departmentID === 1) {
        //if the employee has a department id of 1 they get "sales"
        const newSection1 = document.createElement("section")
        const newStatement1 = document.createTextNode("Sales");
        newSection1.appendChild(newStatement1);
        document.body.appendChild(newSection1);
        //if the employee has a department id of 2 they get "accounting"
    } else if (employees[i].departmentID === 2) {
        const newSection2 = document.createElement("section")
        const newStatement2 = document.createTextNode("Accounting");
        newSection2.appendChild(newStatement2);
        document.body.appendChild(newSection2);
    } else {
        //if they dont have a department id of 1 or 2 they get "management"
        const newSection3 = document.createElement("section")
        const newStatement3 = document.createTextNode("Management");
        newSection3.appendChild(newStatement3);
        document.body.appendChild(newSection3);

    }
    if (employees[i].computerID === 1) {
        const newSection4 = document.createElement("section")
        const newStatement4 = document.createTextNode("MAC");
        newSection4.appendChild(newStatement4);
        document.body.appendChild(newSection4);
    } else if (employees[i].computerID === 2) {
        const newSection5 = document.createElement("section")
        const newStatement5 = document.createTextNode("Dell");
        newSection5.appendChild(newStatement5);
        document.body.appendChild(newSection5);

    } else {
        const newSection6 = document.createElement("section")
        const newStatement6 = document.createTextNode("Acer")
        newSection6.appendChild(newStatement6);
        document.body.appendChild(newSection6)
    }
  

}

