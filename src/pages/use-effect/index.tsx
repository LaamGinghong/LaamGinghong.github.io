import React, {FC, lazy, ReactElement, useState} from 'react';
import {Route, Redirect, withRouter, RouteComponentProps} from 'react-router-dom';
import Description from './description';
import {Card} from 'antd';
import {CardTabListType} from 'antd/es/card';

const title: CardTabListType[] = [
    {
        key: 'common',
        tab: 'Common'
    },
    {
        key: 'special',
        tab: 'Special'
    },
    {
        key: 'destroy',
        tab: 'Destroy'
    }
];

const content: { [index: string]: FC } = {
    common: lazy(() => import('./common')),
    special: lazy(() => import('./special')),
    destroy: lazy(() => import('./destroy'))
};

const UseEffect = withRouter((props: RouteComponentProps): ReactElement => {

    const [key, changeKey] = useState('common');

    const changeTab = (event: string) => {
        changeKey(event);
        props.history.push(`/useEffect/${event}`);
    };

    return (
        <>
            <Description/>
            <Card style={{marginTop: '20px'}} tabList={title} activeTabKey={key} onTabChange={changeTab}>
                <Route exact path='/useEffect' render={() => <Redirect to='/useEffect/common'/>}/>
                {Object.entries(content).map(([key, value]) => <Route key={key} path={`/useEffect/${key}`}
                                                                      component={value}/>)}
            </Card>
        </>
    );
});

export default UseEffect;
