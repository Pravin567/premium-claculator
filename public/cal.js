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
    //
     await fetch("/get", configObj)
      .then(async function (response) {
          return await response.json();
        }).then(async function (object) {
            console.log(object);
            let out= document.getElementById("output");
            out.innerHTML+=`<h1>${object[0].maturity_age}</h1>`;
         } )};
