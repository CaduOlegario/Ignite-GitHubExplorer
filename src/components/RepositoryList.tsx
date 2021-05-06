import React, { useEffect, useState } from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'

interface Repository {
  node_id: string;
  name: string;
  description: string;
  html_url: string;
}

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos").then(response => response.json()).then(data => setRepositories(data))
  }, [])

  return (
    <section className="repositoryList">
      <h1>Lista de Repositório</h1>

      <ul>
        {repositories && 
          repositories.map(repository => <RepositoryItem key={repository.node_id} repository={repository}/>)}
      </ul>
    </section>
  )
}

export default RepositoryList
