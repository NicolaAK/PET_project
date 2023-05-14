import React from 'react';
import { Skeleton } from '@components/ReusedComponents/Skeleton/style';
import { Container, Content, ContainerImage, Small, Big, Info, SmallImage, Image } from './style';

const SkeletonProduct = () => {
    const skeletonArr = new Array(5).fill(null);
    return (
        <Container>
            <Content>
                <ContainerImage>
                    <Image>
                        <Small>
                            {skeletonArr.map((image) => (
                                <SmallImage key={image + Math.random()}>
                                    <Skeleton />
                                </SmallImage>
                            ))}
                        </Small>
                        <Big>
                            <Skeleton />
                        </Big>
                    </Image>
                </ContainerImage>
                <Info>
                    <Skeleton height={23} width={150} />
                    <Skeleton height={15} width={230} />
                    <Skeleton height={30} width={100} />
                    <Skeleton height={120} />
                    <Skeleton height={23} width={230} />
                    <Skeleton height={230} />
                </Info>
            </Content>
        </Container>
    );
};

export default SkeletonProduct;
