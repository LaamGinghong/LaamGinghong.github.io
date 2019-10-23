import React, {FC, forwardRef, ReactElement, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {Input} from 'antd';
import markdown from './markdown.md';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';

const Child = forwardRef((props, ref) => {
    const inputRef = useRef<Input>(null);
    useImperativeHandle(ref, () => inputRef.current);

    return <Input ref={inputRef}/>;
});

const UseImperativeHandle: FC = (): ReactElement => {
    const inputRef = useRef<Input>(null);
    const [md, changeMd] = useState('');

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        fetch(markdown).then(value => value.text()).then(value => changeMd(value));
    }, []);

    return <>
        <Child ref={inputRef}/>
        <div>
            <ReactMarkdown source={md} renderers={{code: CodeBlock}}/>
        </div>
    </>;
};

export default UseImperativeHandle;
