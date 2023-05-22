async function pre_cal(){
    const Nam = document.getElementById("income").value;
    const Nu = document.getElementById("age").value;
    let formData={
        "Nam":Nam,
        "Nu":Nu
    }
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body:JSON.stringify(formData),
      };
    
     await fetch("/get", configObj)
      .then(async function (response) {
          return await response.json();
        }).then(async function (object) {
          
            let out= document.getElementById("output");
           out.innerHTML = "<h1>Your Net Income is : </h1>";
                out.innerHTML+=`<table>
                <tr>
                <th>MATURITY AGE</th>
                <th>DURATION</th>
                <th>PREMIUM PLAN</th>
                <th>TOTAL BONUS</th>
                <th>MATURITY amount</th>
              </tr>`;
            for(let i=0;i<object.length;i++){
                out.innerHTML+=`
            <tr>
            <td>${object[i].maturity_age}</td>
            <td>${object[i].duration} </td>
            <td>${object[i].premium} </td>
            <td>${object[i].total_bonus}</td>
            <td>${object[i].maturity_amt}</td>
          </tr>`;
            }
            out.innerHTML+=`<table>`;
         } )};
