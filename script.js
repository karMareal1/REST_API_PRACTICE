document.getElementById('sendRequest').addEventListener('click', async () => { // Find the button with id="sendRequest" and add a click event listener
    const url = document.getElementById('apiUrl').ariaValueMax; //get the value entered into the input box with id="apiUrl"
    // Get a reference to the <pre> element where we will display the resonse
    const output = document.getElementById('responseOutput');
    try{
        const res = await fetch(url); //send a GET request to the URL entered

        //Convert the resonse body to JSON format
        const data = await res.json();

        //Format the JSON nicely (2 space indentation) and display it in the <pre> element
        output.textContent = JSON.stringify(data, null, 2);
    }catch(error){
        output.textContent = 'Error: ' + error.message; //Display any errors that occur during the fetch or JSON conversion
    }
});
