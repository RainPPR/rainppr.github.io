import './card.css';
import { MarkGithubIcon, RepoForkedIcon, StarIcon, EyeIcon } from '@primer/octicons-react'

export function Card({ data }) {
  return (
    <a href={data.html_url} target={data.html_url} rel="noopener noreferrer" className={`github-card ${data.fork ? 'is-fork' : ''}`}>
        <div className="card-header">
            <div className="repo-name-container">
                <MarkGithubIcon size={24} />
                <span className="repo-name">{data.full_name}</span>
            </div>
            <div className="fork-icon-container">
                <RepoForkedIcon size={24} />
            </div>
        </div>

        <div className="card-body">
            <p className="repo-description">{data.description}</p>
        </div>

        <div className="card-footer">
            <span className="last-updated">Last updated: {data.pushed_at}</span>
            <div className="repo-stats">
                <span className="stat-item">
                <StarIcon size={16} />
                {data.stargazers_count}
                </span>
                <span className="stat-item">
                <RepoForkedIcon size={16} />
                {data.forks_count}
                </span>
                <span className="stat-item">
                <EyeIcon size={16} />
                {data.watchers_count}
                </span>
            </div>
        </div>
    </a>
  )
}

/*
.map(data => ({
        owner            : data.owner.login,
        name             : data.name,
        full_name        : data.full_name,
        fork             : data.fork,
        size             : data.size,
        stargazers_count : data.stargazers_count,
        watchers_count   : data.watchers_count,
        forks_count      : data.forks_count,
        url              : data.html_url,
        description      : data.description,
    }));
*/
