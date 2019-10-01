import {Alert} from 'antd';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';
import CurrentUser from './current-user';
import md from './use-context.md';

const UseContext: FC = (): ReactElement => {
    const info = 'useContext相当于一个小型的公用状态，它作用于深层嵌套组件，是解决除父子组件之外，爷孙及更深层组件之间传值的方法';
    const [markdown, changeMarkdown] = useState('');
    useEffect(() => {
        fetch(md).then(value => value.text()).then(value => changeMarkdown(value));
    }, []);

    return <>
        <Alert message={info}/>
        <br/>
        <CurrentUser/>
        <div>
            <ReactMarkdown source={markdown} renderers={{code: CodeBlock}}/>
        </div>
    </>;
};

export default UseContext;
