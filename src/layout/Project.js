import styled from 'styled-components';

function Project({ history })
{
    return (
        <Container>
            <Title><h1>나무의 노트</h1></Title>
            <ul>
                <h4>블로그</h4>
                <List><a onClick={() => { history.goBack() }}>뒤로 가기</a></List>
                <List><a>카테고리 별로 보기</a></List>
                <List><a>태그 별로 보기</a></List>
                <hr/>
                <h4>프로젝트</h4>
                <List><a>안드로이드 앱 개발</a></List>
                <List><a>나무의 그림 농장</a></List>
            </ul>
        </Container>
    );
}

export default Project;

const Container = styled.div`
    padding: 30px;
`

const Title = styled.div`
    text-align: center;
`
const List = styled.li`
    text-align: center;
`

const Text = styled.div`
    text-align: center;
`