const form = document.getElementById("phrase");

if(form){
    form.onsubmit = async function (e) {
        e.preventDefault(); 

        const formData = new FormData(form);

        let phrase = formData.get("phrase");
        if (phrase.length <= 3){
            alertMessage("error","Please input at least 3 characters!");
              return;
        }
        const response = await window.axios.openAI(formData.get("phrase"));
        document.getElementById("output").innerHTML = JSON.stringify(response.choices[0].text).replace(/\\n/g, '');
    };
}

function alertMessage(status, phrase){
    window.Toastify.showToast({
        text: phrase,
        duration: 5000,
        stopOnFocus: true, 
        style: {
            textAlign: "center",
            background: status == "error" ? "red": "green",
            color: "white",
            padding: "5px",
            margin: "2px"
        }
      });
}