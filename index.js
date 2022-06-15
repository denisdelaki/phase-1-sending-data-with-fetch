// Add your code here
function submitData(name, email) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
        body: JSON.stringify({
            name,
            email,
        }),
    })
        .then(res => res.json())
        .then(users => document.body.innerHTML=users['id'])
        .catch((error) => {
            let message = "Unauthorized Access";
            document.body.appendChild(message)
            console.log(error.message)
        })
}