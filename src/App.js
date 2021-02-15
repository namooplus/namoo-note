import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home, Blog, Project_App, Project_Draw } from './sites';
// import HeaderBackground from './assets/img/header-background.png';

function App() {
  return (
    <Container>
      <Route path="/" exact component={ Home } />
      <Route path="/blog" component={ Blog } />
      <Route path="/project_app" component={ Project_App } />
      <Route path="/project_draw" component={ Project_Draw } />
    </Container>
  );
}

export default App;

const Container = styled(Router)`
  display: flex;
  height: 100vh;
  flex-flow: row wrap;
`

const Header = styled.header`
  display: flex;
  width: 350px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 1px white;
  background-color: #dcf5f0;
`

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 50px;
  font-size: 3em;
`

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
`

const ListItem = styled.li`
  padding: 5px;
  text-decoration: none;
`

const SubNavigator = styled.span`
  font-size: 0.9em;
  font-weight: lighter;
  text-shadow: 0px 0px 5px gray;
  color: black;
  letter-spacing: 8px;
`

const Navigator = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  color: black;
`
