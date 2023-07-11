const cards = document.querySelector('.cards')
const repos = 'https://api.github.com/users/Manas140/repos';

fetch(repos)
  .then(res => res.json())
  .then(data => {
    data.map((d, i) => {
      if ( d.stargazers_count < 100 ) {
        return;
      } 
      cards.innerHTML += `
        <a href="${d.html_url}"><article> 
          <h3>${d.name}</h3>
          <p>${d.description}</p>
          <p><span class="material-symbols-rounded">star</span> ${d.stargazers_count}</p>
        </article></a>
      `;
    })
  })

const age = document.querySelector(".age");
age.textContent = `${Math.floor((new Date()-new Date("2007-04-01"))/31557600000)}`
