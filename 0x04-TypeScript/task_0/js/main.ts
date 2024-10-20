interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

function createStudent(student: Student) {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    };
}

const student1 = createStudent({ firstname: 'john', lastname: "charles", age: 12, location: "Nairobi" });
const student2 = createStudent({ firstname: 'Donald', lastname: "charles", age: 32, location: "USA" });

const studentsList = [student1, student2];

// Create the table
const table = document.createElement("table");

// Iterate over the studentsList to create table rows
studentsList.forEach(student => {
    const trow = document.createElement("tr");
    
    const tdata = document.createElement("td");
    const tdata1 = document.createElement("td");

    // Populate the table data
    tdata.innerHTML = student.firstname; // First name
    tdata1.innerHTML = student.location;  // Location

    // Append the data cells to the row
    trow.appendChild(tdata);
    trow.appendChild(tdata1);

    // Append the row to the table
    table.appendChild(trow);
});

// Append the table to the document body (or another container)
document.body.appendChild(table);
