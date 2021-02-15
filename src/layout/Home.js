import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Home()
{
    return (
        <Container>
            <Cover>
                <Title>나무의 노트</Title>
                <Introduction>안녕하세요!<br/>나무입니다.</Introduction>
                <BottomQuote>⌞</BottomQuote>
                <TopQuote>⌝</TopQuote>
                <Description>아래로 스크롤해주세요</Description>
            </Cover>
            <Board>
                <NavigatorContainer>
                    <Navigator><NavigatorText to="/blog">소개</NavigatorText></Navigator>
                    <Navigator><NavigatorText to="/blog" checked="true">블로그</NavigatorText></Navigator>
                    <Navigator><NavigatorText to="/blog">프로젝트</NavigatorText></Navigator>
                </NavigatorContainer>
                <Content>
                    <p>여기에 내용</p>
                </Content>
                <Footer>
                    <Text>Copyright &copy; 2021 나무</Text>
                </Footer>
            </Board>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: row wrap;
`

const Cover = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('img/icon_shadow.png');
    background-repeat: no-repeat;
    background-size: 200px 200px;
    background-position: center;
`

const Title = styled.h1`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    margin: 70px;
    font-weight: bold;
`

const Description = styled.span`
    display: inline-block;
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    margin-bottom: 70px;
`

const Introduction = styled.h2`
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 70px;
    font-weight: lighter;
`

const BottomQuote = styled.h1`
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 70px;
    font-weight: bold;
    font-size: 5em;
`

const TopQuote = styled.h1`
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 70px;
    font-weight: bold;
    font-size: 5em;
`

const Board = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-flow: column wrap;
`

const NavigatorContainer = styled.ul`
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    text-align: center;
`

const Navigator = styled.li`
    display: inline-block;
    list-style: none;
`

const NavigatorText = styled(Link)`
    padding: 10px;
    font-size: 1.5em;
    text-decoration: none;
    color: ${props => props.checked ? 'black' : 'gray'};
`

const Content = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const Footer = styled.footer`
    text-align: center;
    background-color: white;
`

const Text = styled.p`
    margin-top: 25px;
    margin-bottom: 25px;
    color: gray;
`
