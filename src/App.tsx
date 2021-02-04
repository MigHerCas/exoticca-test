import React from 'react';
import Logo from './components/Logo';
import ProductList from './components/ProductList';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <main className="App-main">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
