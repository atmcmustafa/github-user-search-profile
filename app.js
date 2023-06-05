let input = document.getElementById("input");
let form = document.querySelector("form");
let userContainer = document.querySelector(".user-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getProfile();
});

function getProfile() {
  const API = `https://api.github.com/users/${input.value}`;
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      if (input.value <= 0) {
        userContainer.innerHTML =
          "<h3 class='text-2xl'>Please enter a valid username</h3>";
        userContainer.classList.remove("border");
      } else {
        console.log(data);
        userContainer.classList.add("border");
        userContainer.innerHTML = `
        <div class="flex flex-col md:flex-row">
        <div
          class="w-36 h-36 rounded-full md:mr-12 mx-auto md:mx-0 md:mb-0 mb-8"
        >
          <img src="${data.avatar_url}"  class="rounded-full"/>
        </div>

        <!-- profile card -->
        <div>
          <div class="flex justify-between">
            <h1 class="text-3xl">${data.name}</h1>
            <p class="text-gray-400">${data.created_at}</p>
          </div>
          <small class="text-sm mb-8 inline-block mt-1">@${data.login}</small>

          <!-- repo -->
          <div class="rounded-md p-4 flex gap-12 border justify-between">
            <div class="flex flex-col gap-2">
              <span class="text-lg">Repos</span>
              <span class="text-center font-bold">${data.public_repos}</span>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-lg">Followers</span>
              <span class="text-center font-bold">${data.followers}</span>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-lg">Following</span>
              <span class="text-center font-bold">${data.following}</span>
            </div>
          </div>

          <!-- sci -->
          <div
            class="flex flex-col md:flex-row flex-wrap border mt-4 justify-between"
          >
            <div
              class="rounded-md p-4 flex flex-row mx-auto md:mx-0 md:flex-col gap-2 text-center items-center justify-center"
            >
              <i class="fa-solid fa-location-dot"></i>
              <span>${
                data.location === null ? "No Location" : data.location
              }</span>
            </div>
            <div
              class="rounded-md p-4 flex flex-row mx-auto md:mx-0 md:flex-col gap-2 text-center items-center justify-center"
            >
              <i class="fa-brands fa-twitter"></i>
              <span>${
                data.twitter_username === null
                  ? "No Twitter"
                  : data.twitter_username
              }</span>
            </div>
            <div
              class="rounded-md p-4 flex flex-row mx-auto md:mx-0 md:flex-col gap-2 text-center items-center justify-center"
            >
              <i class="fa-solid fa-link"></i>
              <span>${data.blog === null ? "No Link" : data.blog}</span>
            </div>
            <div
              class="rounded-md p-4 flex flex-row mx-auto md:mx-0 md:flex-col gap-2 text-center items-center justify-center"
            >
              <i class="fa-regular fa-building"></i>
              <span>${
                data.company === null ? "No Company" : data.company
              }</span>
            </div>
          </div>
        </div>
      </div>
        `;
      }
    })
    .catch((err) => err);
}
