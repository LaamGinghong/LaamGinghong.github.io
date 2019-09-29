import {ComponentClass, ComponentState, FC, lazy, LazyExoticComponent} from 'react';

interface Menu {
    title: string
    url: string
    component: LazyExoticComponent<FC> | LazyExoticComponent<ComponentClass<ComponentState>>,
}

export const menu: Menu[] = [
    {title: 'useState', url: '/useState', component: lazy(() => import('./use-state'))},
    {title: 'useEffect', url: '/useEffect', component: lazy(() => import('./use-effect'))}
];
