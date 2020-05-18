import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storedRepositories) {
      return JSON.parse(storedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const regex = /.{3,}\/.{1,}/;
    const isValid = new RegExp(regex).test(newRepo);

    if (!isValid) {
      setInputError(
        `The input's value does not match the following pattern username/repository`,
      );
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('An error occurred while looking for repository');
    }
  }

  function handleDeleteRepository(fullName: string): void {
    setRepositories(
      repositories.filter((repository) => repository.full_name !== fullName),
    );
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Type the repository's name"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository: Repository) => (
          <div key={repository.full_name}>
            <button
              onClick={() => handleDeleteRepository(repository.full_name)}
              type="button"
            >
              Remove
            </button>
            <Link to={`/repository/${repository.full_name}`}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          </div>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
