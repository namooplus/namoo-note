import { React, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


function Home()
{
    // State
    const [opacity, setOpacity] = useState(1.0);
    const [margin, setMargin] = useState(70 + 'px');
    
    // 스크롤 효과
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });

    const onScroll = () => {
        const scrollDegree = window.scrollY / document.documentElement.clientHeight;
        setOpacity(1 - scrollDegree);
        setMargin(70 - scrollDegree * 70 + 'px');
    }

    // 레이아웃
    return (
        <Container>
            <Cover>
                <Title opacity={opacity} margin={margin}>나무의 노트</Title>
                <Introduction opacity={opacity} margin={margin}>안녕하세요!<br/>나무입니다.</Introduction>
                <BottomQuote opacity={opacity} margin={margin}>⌞</BottomQuote>
                <TopQuote opacity={opacity} margin={margin}>⌝</TopQuote>
                <Description opacity={opacity} margin={margin}>⌵</Description>
            </Cover>
            <Board color="#edfaf7">
                <Subtitle>소개</Subtitle>
                <Content vertical>
                    <TextBroad>현재 연세대학교 컴퓨터과학과를 재학중이며 1인 안드로이드 앱 개발자입니다. 최근 앱/웹 개발과 더불어 알고리즘 공부, 드로잉 등 여러가지를 시도하고 있으며 특히 UI/UX 디자인에 관심이 많습니다. 지금까지 진행했던 프로젝트들은 프로젝트 페이지를 참고해주세요.<br/><br/>블로그 주제는 특별히 정해져 있지 않고 자유롭게 포스팅이 올라갑니다 :)</TextBroad>
                    <SquareButton>이메일</SquareButton>
                    <SquareButton>깃허브</SquareButton>
                </Content>
            </Board>
            <Board color="#dcf5f0">
                <Subtitle>블로그</Subtitle>
                <Content vertical>
                    <p>좌우로 pinned 게시물 스크롤</p>
                    <SquareButton>더보기</SquareButton>
                </Content>
            </Board>
            <Board color="#edfaf7">
                <Subtitle>프로젝트</Subtitle>
                <Content>
                    <p>좌우로 프로젝트 스크롤</p>
                </Content>
                <Footer>
                    <Text>Copyright 2021 나무 All reserved.</Text>
                </Footer>
            </Board>
            {/* <NavigatorContainer>
                <Navigator><NavigatorText to="/">소개</NavigatorText></Navigator>
                <Navigator><NavigatorText to="/blog" checked={true}>블로그</NavigatorText></Navigator>
                <Navigator><NavigatorText to="/project">프로젝트</NavigatorText></Navigator>
            </NavigatorContainer> */}
        </Container>
    );
}

export default Home;

// 커버
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
    background-attachment: scroll;
`

const Title = styled.h1.attrs(props => ({
    style: {
        margin: props.margin,
        opacity: props.opacity
    },
}))`
    display: inline-block;
    position: fixed;
    top: 0;
    left: 0;
    font-weight: bold;
`

const Introduction = styled.h2.attrs(props => ({
    style: {
        margin: props.margin,
        opacity: props.opacity
    },
}))`
    display: inline-block;
    position: fixed;
    bottom: 0;
    right: 0;
    font-weight: lighter;
`

const BottomQuote = styled.h1.attrs(props => ({
    style: {
        margin: props.margin,
        opacity: props.opacity
    },
}))`
    display: inline-block;
    position: fixed;
    bottom: 0;
    left: 0;
    font-weight: bold;
    font-size: 5em;
`

const TopQuote = styled.h1.attrs(props => ({
    style: {
        margin: props.margin,
        opacity: props.opacity
    },
}))`
    display: inline-block;
    position: fixed;
    top: 0;
    right: 0;
    font-weight: bold;
    font-size: 5em;
`

const Description = styled.h1.attrs(props => ({
    style: {
        marginBottom: props.margin,
        opacity: props.opacity
    },
}))`
    display: inline-block;
    position: fixed;
    width: 100%;
    bottom: 0;
    text-align: center;
`

// 소개
const Board = styled.div`
    display: flex;
    position: relative;
    min-height: 100%;
    width: 100%;
    flex-flow: column wrap;
    align-items: center;
    background-color: ${props => props.color};
`

const Subtitle = styled.h1`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    margin: 70px;
    font-size: 3em;
    font-weight: bold;
    opacity: 0.6;
`

const Content = styled.div`
    display: flex;
    flex-grow: 1;
    flex-flow: row wrap;
    ${props => props.vertical && css`
        flex-flow: column wrap;
    `}
    max-width: 600px;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

const TextBroad = styled.p`
    line-height: 1.5em;
    font-size: 1.1em;
`

const SquareButton = styled.button`
    background-color: black;
    width: 200px;
    padding: 10px;
    margin-top: 10px;
    font-size: 1em;
    color: white;
    border-style: none;
`

// 블로그


// 프로젝트



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

const Footer = styled.footer`
    text-align: center;
`

const Text = styled.p`
    margin-top: 25px;
    margin-bottom: 25px;
    color: black;
`
