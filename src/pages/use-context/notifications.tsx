import React, {FC, ReactElement, useContext} from 'react';
import {contextDemo} from './current-user';

const Notifications: FC = (): ReactElement => {
    const value = useContext(contextDemo);
    return <>
        <p>This is inside component !</p>
        <p>The value is {value} .</p>
    </>;
};

export default Notifications;
