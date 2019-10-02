import {Card} from 'antd';
import {CardTabListType} from 'antd/es/card';
import React, {FC, lazy, ReactElement, useState} from 'react';
import {withRouter, RouteComponentProps, Route, Redirect} from 'react-router-dom';

const title: CardTabListType[] = [
    {
        key: 'common',
        tab: 'Common'
    },
    {
        key: 'lazy',
        tab: 'Lazy'
    }
];

const content: { [index: string]: FC } = {
    common: lazy(() => import('./common')),
    lazy: lazy(() => import('./lazy'))
};

const UseReducer = withRouter((props: RouteComponentProps): ReactElement => {
    const [key, changeKey] = useState('common');

    const changeTab = (event: string): void => {
        changeKey(event);
        props.history.push(`/useReducer/${event}`);
    };
    return <>
        <Card style={{marginTop: '20px'}} tabList={title} activeTabKey={key} onTabChange={changeTab}>
            <Route exact path='/useReducer' render={() => <Redirect to='/useReducer/common'/>}/>
            {Object.entries(content).map(([key, value]) => <Route key={key} path={`/useReducer/${key}`}
                                                                  component={value}/>)}
        </Card>
    </>;
});

export default UseReducer;
