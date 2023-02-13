function allMessage() {
  var div = document.getElementById("comment-cord");
  div.innerHTML = ``;
  const blogId = localStorage.getItem("blogId");
  const id = JSON.parse(blogId);
  const localUrl = `https://shumbusho-emile.onrender.com/blog/${id}/comments`;
  fetch(localUrl, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.comments.forEach((item) => {
        div.innerHTML += `
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 20px 0 0 0;
          "
        >
          <div style="display: flex">
            <svg
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z"
              />
            </svg>
            <div style="display: flex; flex-direction: column; margin: 10px">
              <h3 style="color: black; font-size: 16px">
                ${item.fullName}
              </h3>
            </div>
          </div>
        </div>
        <p class="article-pragraphs">
          ${item.comment}
        </p>
              `;
      });
    }).catch(error=>{
        console.log(error);
    })
}
