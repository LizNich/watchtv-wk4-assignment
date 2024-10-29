const watchtvContainer = document.getElementById("watchtv-container");
const form = document.querySelector("form");

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/watchtv", {
    method: "POST",
    body: JSON.stringify(formObj),
    //was (data)
    headers: { "Content-Type": "application/json" },
  });
  const reply = await response.json();
  console.log(reply);
}
form.addEventListener("submit", handleSubmit);

async function getWatchtv() {
  const response = await fetch(
    "https://watchtv-wk4-assignment-server.onrender.com/"
  );
  const watchtv = await response.json();

  for (let i = 0; i < watchtv.length; i++) {
    const username = watchtv[i].username;
    const message = watchtv[i].message;
    const p = document.createElement("p");
    p.textContent = `${username} recommends ${message}`;

    watchtvContainer.appendChild(p);
  }
}
getWatchtv();
