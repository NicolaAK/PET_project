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
                <div key={i.link}>{i.link}</div>
            ) : (
                <div key={i.link}>
                    <LinkMain to={i.path}>{i.link}</LinkMain>
                    <ArrowR />
                </div>
            ),
        )}
    </Navigation>
);

export default Breadcrumbs;
