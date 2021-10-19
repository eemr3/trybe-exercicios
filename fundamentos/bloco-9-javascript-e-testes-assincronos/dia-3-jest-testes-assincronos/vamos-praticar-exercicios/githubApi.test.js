const fetch = require("node-fetch");

const getRepos = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name));

// implemente seus testes aqui
test('restorna repositório conforme url passada', async () => {
  const URL = `https://api.github.com/orgs/tryber/repos`;
  const result = await getRepos(URL);

  expect(result).toContain("sd-01-week4-5-project-pixels-art");
});