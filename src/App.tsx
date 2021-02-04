import React from 'react';
import Logo from './components/Logo';
import ProductList from './components/ProductList';
import { LayoutWrapper, Header, Main } from './components/Layout/styled';

function App(): JSX.Element {
  return (
    <LayoutWrapper>
      <Header>
        <Logo />
      </Header>
      <Main>
        <ProductList />
      </Main>
    </LayoutWrapper>
  );
}

export default App;
