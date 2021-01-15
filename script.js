{
  /*fetch('https://developer.github.com/v4/explorer/', {
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      query { 
        repositoryOwner(login: "pro-munachi") { 
         repositories(isFork: false, first: 20) {
          edges{
            node{
              ... on Repository{
                name
                url
                isFork
                updatedAt
                forkCount
                stargazerCount
              }
            }
          }
        }
        }
      `
  })
})
  .then(res => res)
  .then(data => {
    console.log(res.data)
  })
*/
}

const query = `query { 
  repositoryOwner(login: "pro-munachi") { 
   repositories(isFork: false, first: 20) {
    edges{
      node{
        ... on Repository{
          name
          url
          isFork
          updatedAt
          forkCount
          stargazerCount
        }
      }
    }
  }
  }`
fetch('https://developer.github.com/v4/explorer/' + encodeURIComponent(query), {
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
