import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home, Blog, Project } from './sites';
// import HeaderBackground from './assets/img/header-background.png';

function App() {
  return (
    <Container>
      <Route path="/" exact component={ Home } />
      <Route path="/blog" component={ Blog } />
      <Route path="/project" component={ Project } />
    </Container>
  );
}

export default App;

const Container = styled(Router)`
  display: flex;
  height: 100vh;
  flex-flow: row wrap;
`
