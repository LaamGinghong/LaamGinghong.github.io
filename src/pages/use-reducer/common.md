```tsx
import {Button, InputNumber, message} from 'antd';
import React, {FC, ReactElement, useReducer, useState} from 'react';

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
    </>;
};

export default Common;
```
