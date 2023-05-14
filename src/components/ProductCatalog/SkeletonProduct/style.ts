import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
`;
export const Content = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 50px;
    grid-template-areas: 'image info';
`;
export const ContainerImage = styled.div`
    grid-area: image;
`;
export const Image = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'small big';
`;
export const Small = styled.div``;
export const Big = styled.div`
    grid-area: big;
    width: 540px;
    height: 540px;
`;
export const SmallImage = styled.div`
    grid-area: small;
    width: 100px;
    height: 100px;
    margin: 0 10px 10px 0;
    :last-child {
        margin: 0 10px 0 0;
    }
`;
export const Info = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
