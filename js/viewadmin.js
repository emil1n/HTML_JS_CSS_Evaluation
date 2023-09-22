function login() {
    if (true) {
        window.location.href = 'login.html'
    }
}
function showTable(tableId) {
    var table = document.getElementById(tableId);
    if (table.style.display === 'none') {
        table.style.display = 'table'; // Show the table
    } else {
        table.style.display = 'none'; // Hide the table
    }
}
