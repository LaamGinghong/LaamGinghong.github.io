import React, {FC, ReactElement, useEffect, useState} from 'react';
import md from './common.md';
import {Button, message} from 'antd';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';

const Special: FC = (): ReactElement => {
    const [count, changeCount] = useState(0);
    const [markdown, changeMarkdown] = useState('');

    useEffect(() => {
        fetch(md).then(value => value.text()).then(value => changeMarkdown(value));
    }, []);

    useEffect(() => {
        message.info(`Welcome to this page !`);
    }, []);

    const click = (): void => changeCount(count + 1);

    return (
        <>
            <div>
                <p>You click {count} times</p>
                <Button onClick={click}>Click</Button>
            </div>
            <br/>
            <div>
                <ReactMarkdown source={markdown} renderers={{code: CodeBlock}}/>
            </div>
        </>
    );
};

export default Special;
