import styled from 'styled-components';

function Blog()
{
    return (
        <Container>
            <Title><h1>타이틀</h1></Title>
            <Text><span>2021.02.13</span></Text>
            <hr/>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
            <Text><p>아아아아아아</p></Text>
        </Container>
    );
}

export default Blog;

const Container = styled.div`
    overflow: scroll;
    margin: 0;
    height: 100%;
    flex-grow: 1;
`

const Title = styled.div`
    text-align: center;
`
const Text = styled.div`
    text-align: center;
`