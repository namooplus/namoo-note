import styled from 'styled-components';

function Header()
{
    return (
        <Container>
            <Title><h1>나무의 노트</h1></Title>
            <Navigation>
                <NavigationList>
                    <NavigationItem>소개</NavigationItem>
                    <NavigationItem>메뉴1</NavigationItem>
                    <NavigationItem>메뉴2</NavigationItem>
                    <NavigationItem>메뉴3</NavigationItem>
                    <NavigationItem>메뉴4</NavigationItem>
                </NavigationList>
            </Navigation>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    width: 100%;
`

const Title = styled.div`
    order: 1;
    width: 100%;
    height: 100px;
    text-align: center;
    background-color: #a8ff78;
`

const Navigation = styled.div`
    order: 1;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavigationList = styled.ul`
    width: 90%;
    display: flex;
    margin: 0 auto;
`

const NavigationItem = styled.li`
    width: 60px;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`