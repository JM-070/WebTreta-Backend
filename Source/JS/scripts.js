window.onload = function() {
    myFunction();
    setTimeout(() => {employeeTable();}, 3000);
    document.getElementById('table-error').style.display='none';
};

var employeeDetails = [];
const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
var apiStatus = false;

// Make a GET request
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data['data']);
        employeeDetails = data['data'];
        apiStatus = true;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Generating Employee Table
function employeeTable(){
    
    // var responseData = {"status":"success","data":[{"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61,"profile_image":""},{"id":2,"employee_name":"Garrett Winters","employee_salary":170750,"employee_age":63,"profile_image":""},{"id":3,"employee_name":"Ashton Cox","employee_salary":86000,"employee_age":66,"profile_image":""},{"id":4,"employee_name":"Cedric Kelly","employee_salary":433060,"employee_age":22,"profile_image":""},{"id":5,"employee_name":"Airi Satou","employee_salary":162700,"employee_age":33,"profile_image":""},{"id":6,"employee_name":"Brielle Williamson","employee_salary":372000,"employee_age":61,"profile_image":""},{"id":7,"employee_name":"Herrod Chandler","employee_salary":137500,"employee_age":59,"profile_image":""},{"id":8,"employee_name":"Rhona Davidson","employee_salary":327900,"employee_age":55,"profile_image":""},{"id":9,"employee_name":"Colleen Hurst","employee_salary":205500,"employee_age":39,"profile_image":""},{"id":10,"employee_name":"Sonya Frost","employee_salary":103600,"employee_age":23,"profile_image":""},{"id":11,"employee_name":"Jena Gaines","employee_salary":90560,"employee_age":30,"profile_image":""},{"id":12,"employee_name":"Quinn Flynn","employee_salary":342000,"employee_age":22,"profile_image":""},{"id":13,"employee_name":"Charde Marshall","employee_salary":470600,"employee_age":36,"profile_image":""},{"id":14,"employee_name":"Haley Kennedy","employee_salary":313500,"employee_age":43,"profile_image":""},{"id":15,"employee_name":"Tatyana Fitzpatrick","employee_salary":385750,"employee_age":19,"profile_image":""},{"id":16,"employee_name":"Michael Silva","employee_salary":198500,"employee_age":66,"profile_image":""},{"id":17,"employee_name":"Paul Byrd","employee_salary":725000,"employee_age":64,"profile_image":""},{"id":18,"employee_name":"Gloria Little","employee_salary":237500,"employee_age":59,"profile_image":""},{"id":19,"employee_name":"Bradley Greer","employee_salary":132000,"employee_age":41,"profile_image":""},{"id":20,"employee_name":"Dai Rios","employee_salary":217500,"employee_age":35,"profile_image":""},{"id":21,"employee_name":"Jenette Caldwell","employee_salary":345000,"employee_age":30,"profile_image":""},{"id":22,"employee_name":"Yuri Berry","employee_salary":675000,"employee_age":40,"profile_image":""},{"id":23,"employee_name":"Caesar Vance","employee_salary":106450,"employee_age":21,"profile_image":""},{"id":24,"employee_name":"Doris Wilder","employee_salary":85600,"employee_age":23,"profile_image":""}],"message":"Successfully! All records has been fetched."};
    // var employeeDetails = responseData['data'];
    let table;
    console.dir(employeeDetails);
    
    if(!apiStatus){
        table = '<h3>API Response was not OK</h3>';  
        const tableContainer = document.getElementById('table-container');  
        tableContainer.innerHTML = table;
    }
    else if(employeeDetails.length > 0){
        table = '<table id="table1">';  
        table += '<tr><th onclick="sortTable(0)">First Name <img src="./Source/Images/sortIcon.png"; class="sortIcon"/></th><th onclick="sortTable(1)">Last Name <img src="./Source/Images/sortIcon.png"; class="sortIcon"/></th><th onclick="sortTable(2)">Salary <img src="./Source/Images/sortIcon.png"; class="sortIcon"/></th><th>Age</th></tr>';  
    
        employeeDetails.forEach(employee => {  
            let currentEmployeeName = employee.employee_name;
            let employeeFirstName = currentEmployeeName.split(" ")[0];
            let employeeLastName = currentEmployeeName.split(" ")[1];
        table += '<tr><td>'+employeeFirstName+'</td><td>'+employeeLastName+ `</td><td>${employee.employee_salary}</td><td>${employee.employee_age}</td></tr>`;  
        });  
        table += '</table>';  
        const tableContainer = document.getElementById('table-container');  
        tableContainer.innerHTML = table;
    }
    else{
        table = '<h3>No Records Found</h3>';  
        const tableContainer = document.getElementById('table-container');  
        tableContainer.innerHTML = table;
    }
}
        
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}