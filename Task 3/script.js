/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const message = document.querySelector("#message");

btn.addEventListener("click", function () {
  message.style.display = "none";
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      let result = "";
      data.forEach((user) => {
        result += `
       <div class="output-cointainer">
         <img src="${user.avatar_url}" alt="Avatar">
         <p>Login: ${user.login}</p>
       </div>
     `;
      });
      output.innerHTML = result;
    });
});
