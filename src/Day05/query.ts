const query = `
  {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        format
      }
    }
  }
`;

const getData = () =>
  fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((result) => result);

export default getData;
