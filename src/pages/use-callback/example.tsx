import React, {FC, ReactElement, useCallback, useState} from 'react';
import {InputNumber, message} from 'antd';

interface Props {
    count: number;

    onClick(): void;
}

const Inner: FC<Props> = (props): ReactElement => {
    const {count = 1, onClick} = props;
    return <p onClick={onClick}>You had clicked {count} {count > 1 ? 'times' : 'time'}</p>;
};

const Example: FC = (): ReactElement => {
    const [count, changeCount] = useState();
    const handleClick = useCallback(() => {
        message.info('click');
    }, []);

    return <>
        <InputNumber value={count} onChange={changeCount}/>
        <Inner count={count} onClick={handleClick}/>
    </>;
};

export default Example;
