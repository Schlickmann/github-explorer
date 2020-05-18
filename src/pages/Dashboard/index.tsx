import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form>
        <input type="text" placeholder="Type the repository's name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/11969565?s=460&u=87d76ecd6761fd3604e618a9318a107d7957dfc3&v=4"
            alt="Juliani Schlickmann"
          />
          <div>
            <strong>schlickmann/be-the-hero</strong>
            <p>
              Application created to help Non-Governmental Organization's to
              share their cases
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/11969565?s=460&u=87d76ecd6761fd3604e618a9318a107d7957dfc3&v=4"
            alt="Juliani Schlickmann"
          />
          <div>
            <strong>schlickmann/be-the-hero</strong>
            <p>
              Application created to help Non-Governmental Organization's to
              share their cases
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/11969565?s=460&u=87d76ecd6761fd3604e618a9318a107d7957dfc3&v=4"
            alt="Juliani Schlickmann"
          />
          <div>
            <strong>schlickmann/be-the-hero</strong>
            <p>
              Application created to help Non-Governmental Organization's to
              share their cases
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/11969565?s=460&u=87d76ecd6761fd3604e618a9318a107d7957dfc3&v=4"
            alt="Juliani Schlickmann"
          />
          <div>
            <strong>schlickmann/be-the-hero</strong>
            <p>
              Application created to help Non-Governmental Organization's to
              share their cases
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
