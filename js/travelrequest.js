function updateToDate() {
    // Get the selected number of days from the dropdown
    const numOfDaysSelect = document.getElementById("numOfDays");
    const selectedNumOfDays = parseInt(numOfDaysSelect.value, 10);

    // Get the selected "From Date" value
    const fromDateInput = document.getElementById("fromdate");
    const fromDate = new Date(fromDateInput.value);

    // Calculate the "To Date" based on the selected number of days
    if (!isNaN(selectedNumOfDays) && fromDate instanceof Date && !isNaN(fromDate)) {
        const toDate = new Date(fromDate);
        toDate.setDate(fromDate.getDate() + selectedNumOfDays - 1); // Subtract 1 day to get the correct "To Date"

        // Format the "To Date" as YYYY-MM-DD
        const formattedToDate = toDate.toISOString().split('T')[0];
        
        // Set the "To Date" input value
        const toDateInput = document.getElementById("todate");
        toDateInput.value = formattedToDate;
    }
}

const travelRequestForm = document.getElementById('travel-request-form');
        const travelRequestsContainer = document.getElementById('travel-requests');

        travelRequestForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const empid = document.getElementById('empid').value;
            const empname = document.getElementById('empname').value;
            const project = document.getElementById('project').value;
            const cause = document.getElementById('cause').value;
            const source = document.getElementById('source').value;
            const destination = document.getElementById('destination').value;
            const fromdate = document.getElementById('fromdate').value;
            const numOfDays = document.getElementById('numOfDays').value;
            const todate = document.getElementById('todate').value;
            const mode = document.getElementById('mode').value;


            // Example: create a new request element and append it to the container
            const requestElement = document.createElement('div');
            requestElement.innerHTML = `
                <p>empid: ${empid}</p>
                <p>empname: ${empname}</p>
                <p>project: ${project}</p>
                <p>cause: ${cause}</p>
                <p>source: ${source}</p>
                <p>destination: ${destination}</p>
                <p>fromdate: ${fromdate}</p>
                <p>numOfDays: ${numOfDays}</p>
                <p>todate: ${todate}</p>
                <p>mode: ${mode}</p>
                
            `;

            travelRequestsContainer.appendChild(requestElement);

            // Clear the form for the next request
            travelRequestForm.reset();
        });

        const button2 = document.getElementById("button2");
        const options1 = document.getElementById("options1");

        button2.addEventListener("click", () => {
            if (options1.style.display === "block") {
                options1.style.display = "none";
            } else {
                options1.style.display = "block";
            }
        });
function login(){
        if (true) {
            window.location.href = 'login.html'}
        }

        function showTable(tableId) {
            var table = document.getElementById(tableId);
            if (table.style.display === 'none') {
                table.style.display = 'table'; // Show the table
            } else {
                table.style.display = 'none'; // Hide the table
            }
        }

const form = document.getElementById('travel-request-form');
        const toggleFormButton = document.getElementById('toggle-form-button');

        // Initial state: form is hidden
        let isFormVisible = false;

        toggleFormButton.addEventListener('click', () => {
            if (isFormVisible) {
                form.style.display = 'none'; // Hide the form
                isFormVisible = false;
            } else {
                form.style.display = 'block'; // Show the form
                isFormVisible = true;
            }
        });