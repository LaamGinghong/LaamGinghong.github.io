import React, {FC, ReactElement,Suspense} from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import {menu} from './menu';

const {Sider, Content} = Layout;
const {Item} = Menu;

const Pages: FC = (): ReactElement => {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider>
                <Menu style={{height:'100%'}}>
                    {menu.map((item, index) => <Item key={index}><Link to={item.url}>{item.title}</Link></Item>)}
                </Menu>
            </Sider>
            <Content>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/' exact render={() => <Redirect to='/useState'/>}/>
                        {menu.map((item, index) => <Route key={index} path={item.url} component={item.component}/>)}
                    </Switch>
                </Suspense>
            </Content>
        </Layout>
    );
};

export default Pages;
