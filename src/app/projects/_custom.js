import { Octokit } from '@octokit/rest';
import { Card } from './_card';
import './card.css';
import { Bleed } from 'nextra/components'

const octokit = new Octokit();

const ORGNAMES = ["RaineBlog"]
const USERNAMES = ["RainPPR", "RaineMtF"]

async function fetchReposForOwner(owner, type) {
  console.log(`[INFO] 开始获取 ${type} '${owner}' 的仓库...`);
  try {
    const repos = await octokit.paginate(
      type === 'user' ? octokit.repos.listForUser : octokit.repos.listForOrg,
      {
        [type === 'user' ? 'username' : 'org']: owner,
        per_page: 100,
      }
    );
    console.log(`[SUCCESS] 成功获取 ${owner} 的 ${repos.length} 个仓库。`);
    return repos;
  } catch (error) {
    if (error.status === 404) {
      console.error(`[ERROR] ${type} '${owner}' 未找到，已跳过。`);
    } else {
      console.error(`[ERROR] 获取 '${owner}' 的仓库时出错: ${error.message}`);
    }
    return [];
  }
}

async function fetchAndCombineAllRepos(usernames, orgnames) {
  const userPromises = usernames.map(username => fetchReposForOwner(username, 'user'));
  const orgPromises = orgnames.map(orgname => fetchReposForOwner(orgname, 'org'));

  const allPromises = [...userPromises, ...orgPromises];
  const results = await Promise.all(allPromises);

        // stargazers_count : data.stargazers_count,
        // watchers_count   : data.watchers_count,
        // forks_count      : data.forks_count,

  const allRepos = results.flat();
  allRepos.sort((a, b) => 
    (b.stargazers_count + b.watchers_count + b.forks_count)
  - (a.stargazers_count + a.watchers_count + a.forks_count));

  return allRepos;
}

const combinedRepos = await fetchAndCombineAllRepos(USERNAMES, ORGNAMES);

export async function GithubCard({ children }) {
  return (
    <div className="github-list">
      <h2>来自「{children}」的仓库：</h2>
      {combinedRepos.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  )
}
