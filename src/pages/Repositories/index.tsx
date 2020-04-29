import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Header } from './style';

interface RepositoryParams {
  repository: string;
}

const Repositories: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return <Header />;
};

export default Repositories;
