import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Button, message} from 'antd';
import md from './special.md';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';

const Common: FC = (): ReactElement => {
    const [count, changeCount] = useState(0);
    const [markdown, changeMarkdown] = useState('');

    useEffect(() => {
        fetch(md).then(value => value.text()).then(value => changeMarkdown(value));
    }, []);

    useEffect(() => {
        message.info(`You click ${count} times`);
    }, [count]);

    const click = (): void => changeCount(count + 1);

    return (
        <>
            <div>
                <Button onClick={click}>Click</Button>
            </div>
            <br/>
            <div>
                <ReactMarkdown source={markdown} renderers={{code: CodeBlock}}/>
            </div>
        </>
    );
};

export default Common;
