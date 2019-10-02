import {Button, InputNumber, message} from 'antd';
import React, {FC, ReactElement, useEffect, useReducer, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';
import md from './lazy.md';

interface State {
    count: number;
}

type ActionType = 'increment' | 'decrement' | 'reset';

interface Action {
    type: ActionType;
    number?: number;
    payload?: number;
}

function init(initialCount: number): State {
    return {count: initialCount};
}

function reducer(state: State, action: Action): State {
    const {type, number, payload} = action;
    const {count} = state;
    switch (type) {
        case 'increment':
            return {count: count + (number as number)};
        case 'decrement':
            return {count: count - (number as number)};
        case 'reset':
            return init(payload as number);
        default:
            throw new Error('Please enter the correct type !');
    }
}

function Counter(value: { initialCount: number }) {
    const {initialCount} = value;
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    const {count} = state;
    const [number, changeNumber] = useState();
    const [markdown, changeMarkdown] = useState('');

    useEffect(() => {
        fetch(md).then(value => value.text()).then(value => {
            changeMarkdown(value);
        });
    }, []);

    const click = (type: ActionType, reset?: boolean): void => {
        message.success('You have changed the number !');
        dispatch(reset ? {type, payload: initialCount} : {type, number});
    };

    return (
        <>
            <h2>Count:{count}</h2>
            <InputNumber value={number} onChange={changeNumber}/>
            <br/><br/>
            <Button type='primary' onClick={() => click('increment')}>Increment</Button>
            <Button onClick={() => click('decrement')}>Decrement</Button>
            <Button type='danger' onClick={() => click('reset', true)}>Reset</Button>
            <br/><br/>
            <div>
                <ReactMarkdown source={markdown} renderers={{code: CodeBlock}}/>
            </div>
        </>
    );
}

const Lazy: FC = (): ReactElement => {
    return <Counter initialCount={10}/>;
};

export default Lazy;
