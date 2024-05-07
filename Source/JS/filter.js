function searchEmployeeName() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");

    let matchFound = false;
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          // document.getElementById('table-error').style.display='block';
          console.log("show");
          matchFound = true;
        } else {
          tr[i].style.display = "none";
          // document.getElementById('table-error').style.display='none';
          console.log("hide");
        }
      }
    }
    // No result found when searching
    if(matchFound){
      document.getElementById('table-error').style.display='none';
    }
    else{
      document.getElementById('table-error').style.display='block';
    }
  }