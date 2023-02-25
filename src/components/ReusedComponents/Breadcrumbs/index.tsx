import React from 'react';
import ArrowR from '@assets/icons/arrowR.svg';
import { LinkMain, Navigation } from './style';

interface IBreadcrumbs {
    URL: IBreadcrumbsLink[];
}
interface IBreadcrumbsLink {
    link: string;
    path: string;
}

const Breadcrumbs = ({ URL }: IBreadcrumbs) => (
    <Navigation>
        {URL.map((i) =>
            i.path === '' ? (
                <>{i.link}</>
            ) : (
                <>
                    <LinkMain to={i.path}>{i.link}</LinkMain>
                    <ArrowR />
                </>
            ),
        )}
    </Navigation>
);

export default Breadcrumbs;
