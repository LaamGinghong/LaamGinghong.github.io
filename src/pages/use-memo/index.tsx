import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Alert} from 'antd';
import md from './markdown1.md';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';

const UseMemo: FC = (): ReactElement => {
    const [markdown, changeMarkdown] = useState();

    useEffect(() => {
        fetch(md).then(value => value.text()).then(value => changeMarkdown(value));
    }, []);

    return <>
        <Alert message='useMemo和useCallback的功能可以完全等价' description='useCallback(fn, inputs) === useMemo(() => fn, inputs)'/>
        <Alert message='唯一区别是useCallback不会执行第一额参数函数，而是将函数返回；useMemo会执行第一个参数函数，并将结果返回'/>
        <div>
            <ReactMarkdown source={markdown} renderers={{code: CodeBlock}}/>
        </div>
    </>;
};

export default UseMemo;
