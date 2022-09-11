import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Section } from './shared/Section';
import { CardsList } from './shared/CardsList';
import { GlobalStyle } from './globalStyles';
import { NormalizeStyle } from './normalizeStyles';

function AppComponent() {
  return (
    <Layout>
      <NormalizeStyle />
      <GlobalStyle />
      <Section sectionHeader='Похожие объявления'>
        <CardsList></CardsList>
      </Section>
    </Layout>
  )
}

export const App = hot(() => (<AppComponent />));