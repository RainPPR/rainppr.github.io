'use client'

import { Octokit } from '@octokit/rest';
import { Card } from './_card';

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

  const allRepos = results.flat();
  allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return allRepos;
}

export async function GithubCard({ children }) {
  const combinedRepos = await fetchAndCombineAllRepos(USERNAMES, ORGNAMES);

  return (
    <div className="github-list">
      <h3>{children}</h3>
      {combinedRepos.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  )
}
