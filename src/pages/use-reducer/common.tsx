import {Button, InputNumber, message} from 'antd';
import React, {FC, ReactElement, useEffect, useReducer, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';
import md from './common.md';

interface State {
    count: number;
}

interface Action {
    type: ActionType;
    number: number;
}

type ActionType = 'increment' | 'decrement';

const initialStatus: State = {count: 0};

function reducer(state: State, action: Action): State {
    const {type, number} = action;
    const {count} = state;
    switch (type) {
        case 'increment':
            return {count: count + number};
        case 'decrement':
            return {count: count - number};
        default:
            throw new Error('Please enter the correct type !');

    }
}


const Common: FC = (): ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialStatus);
    const [number, changeNumber] = useState();
    const {count} = state;
    const [markdown, changeMarkdown] = useState('');

    useEffect(() => {
        fetch(md).then(value => value.text()).then(value => changeMarkdown(value));
    }, []);

    const click = (type: ActionType): void => {
        message.success('You have changed the number !');
        dispatch({type, number});
    };
    return <>
        <h2>Count:{count}</h2>
        <InputNumber value={number} onChange={changeNumber}/>
        <br/><br/>
        <Button type='primary' onClick={() => click('increment')}>Increment</Button>
        <Button onClick={() => click('decrement')}>Decrement</Button>
        <br/><br/>
        <div>
            <ReactMarkdown source={markdown} renderers={{code: CodeBlock}}/>
        </div>
    </>;
};

export default Common;
