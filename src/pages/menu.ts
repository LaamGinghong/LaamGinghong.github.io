import {FC, lazy, LazyExoticComponent} from 'react';

interface Menu {
    title: string
    url: string
    component?: LazyExoticComponent<FC>
}

export const menu: Menu[] = [
    {title: 'useState', url: '/useState', component: lazy(() => import('./use-state'))}
];