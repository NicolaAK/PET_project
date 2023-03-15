import styled from 'styled-components';

interface IParams {
    height?: number;
    width?: number;
}

export const Skeleton = styled.div<IParams>`
    background-color: #eee;
    background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    display: inline-block;
    line-height: 1;
    width: ${({ width }) => width || '1'}px;
    height: ${({ height }) => height}px;
    animation: skeleton-animation 1.5s ease-in-out infinite;
    @keyframes skeleton-animation {
        0% {
            background-position: -200px 0;
        }
        100% {
            background-position: calc(200px + 100%) 0;
        }
    }
`;
