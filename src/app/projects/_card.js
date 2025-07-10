export function Card({ data }) {
  return (
    <div className="github-card" href={data.html_url} target="_blank" rel="noopener noreferrer">
        <h4>{data.full_name}</h4>
        <p>Description: {data.description}</p>
    </div>
  )
}

/*
.map(repo => ({
		owner            : repo.owner.login,
		name             : repo.name,
		full_name        : repo.full_name,
		fork             : repo.fork,
		size             : repo.size,
		stargazers_count : repo.stargazers_count,
		watchers_count   : repo.watchers_count,
		forks_count      : repo.forks_count,
		url              : repo.html_url,
		description      : repo.description,
    }));
*/
