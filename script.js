var projects = document.querySelector('.projects')
const repos = 'https://api.github.com/users/Manas140/repos';
const api = 'https://api.github.com/users/Manas140';

fetch(api)
  .then(res => res.json())
  .then(data => {
    var followers = data.followers;
  })

fetch(repos)
  .then(res => res.json())
  .then(data => {
    i = 0;
    num = 3;
    while (i < num) {
      repo=data[i]
      projects.innerHTML += `
        <a href="${repo.html_url}"><div> 
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <p>Stars: ${repo.stargazers_count}</p>
        </div></a>
      `;
      i++;
    }
  })
