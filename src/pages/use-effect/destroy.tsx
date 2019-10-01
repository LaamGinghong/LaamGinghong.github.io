import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Alert, Button} from 'antd';


interface Props {
    changeCount(count: number): void;
}

let timer: NodeJS.Timer;

const DestroyInner: FC<Props> = (props): ReactElement => {
    const [seconds, changeSeconds] = useState(0);
    const {changeCount} = props;

    useEffect(() => {
        timer = setInterval(() => {
            changeSeconds(prevState => prevState + 1);
            changeCount(seconds + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [seconds]);

    return <Alert message={`You have stayed ${seconds} seconds !`}/>;
};

const Destroy: FC = (): ReactElement => {
    const [count, changeCount] = useState(0);
    const [show, changeShow] = useState(true);

    return <>
        <p>You have stayed {count} seconds ! <Button onClick={() => changeShow(false)}>Close</Button></p>
        {show && <DestroyInner changeCount={changeCount}/>}
    </>;
};


export default Destroy;
