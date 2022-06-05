import './App.css';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  children: ReactNode;
}

const App = ({ children }: Props) => {
  return (
    <>
      <Helmet title="WAVESERVICE." />
      {children}
    </>
  );
};

export default App;
