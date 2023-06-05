import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts';
import Main from '../components/Main';

function Home() {
  const { query } = useContext(ThemeContext);
  
  return (
    <div style={{ backgroundColor: '#6443' }}>
      <Main word={query} />
    </div>
  );
}

export default Home;


