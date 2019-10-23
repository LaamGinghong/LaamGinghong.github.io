import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';
import {Input} from 'antd';
import md from './common.md'
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';

const Common: FC = (): ReactElement => {
    const inputRef = useRef<Input>(null);
    const [value, changeValue] = useState();
    const [markdown, changeMarkdown] = useState('');

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        fetch(md).then(value => value.text()).then(value => changeMarkdown(value));
    }, []);

    return <>
        <Input ref={inputRef} value={value} onChange={({target: {value}}) => changeValue(value)}/>
        <div>
            <ReactMarkdown source={markdown} renderers={{code: CodeBlock}}/>
        </div>
    </>;
};

export default Common;
