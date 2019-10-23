import React, {ChangeEvent, FC, ReactElement, useEffect, useRef, useState} from 'react';
import {Button, Input, message} from 'antd';
import md1 from './demo1.md';
import md2 from './demo2.md';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';

const Demo1: FC = (): ReactElement => {
    const [value, changeValue] = useState('');

    const showValue = () => {
        message.info(`You said ${value}. `);
    };

    const handleClick = () => {
        setTimeout(showValue, 3000);
    };

    return <>
        <Input value={value} onChange={({target: {value}}) => changeValue(value)}/>
        <Button onClick={handleClick}>Button</Button>
    </>;
};

const Demo2: FC = (): ReactElement => {
    const latestValue = useRef('');

    const showValue = () => {
        message.info(`You said ${latestValue.current}. `);
    };

    const handleClick = () => {
        setTimeout(showValue, 3000);
    };

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        latestValue.current = event.target.value;
    };

    return <>
        <Input onChange={handleChangeValue}/>
        <Button onClick={handleClick}>Button</Button>
    </>;
};

const Capture: FC = (): ReactElement => {
    const [demo1, changeDemo1] = useState('');
    const [demo2, changeDemo2] = useState('');

    useEffect(() => {
        fetch(md1).then(value => value.text()).then(value => changeDemo1(value));
        fetch(md2).then(value => value.text()).then(value => changeDemo2(value));
    }, []);

    return <>
        <Demo1/>
        <div>
            <ReactMarkdown source={demo1} renderers={{code: CodeBlock}}/>
        </div>
        <Demo2/>
        <div>
            <ReactMarkdown source={demo2} renderers={{code: CodeBlock}}/>
        </div>
    </>;
};

export default Capture;
