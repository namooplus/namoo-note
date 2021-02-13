import styled from 'styled-components';
import Header from './layout/Header';

function App() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`
