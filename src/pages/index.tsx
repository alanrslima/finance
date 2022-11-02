import { withSSRAuth } from 'hoc/withSSRAuth';
import { ReactElement } from 'react';
import { HomePage } from 'templates/home/HomePage';

export default function Home(): ReactElement {
  return <HomePage />;
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
