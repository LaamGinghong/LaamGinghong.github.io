```tsx
import React, {FC, ReactElement, useState} from 'react';
import {Button, Input, message as Message} from 'antd';

function Demo1(): ReactElement {
    const [message, changeMessage] = useState('');

    const showMessage = () => {
        Message.info(`You said: ${message}. `);
    };

    const handleClick = () => {
        setTimeout(showMessage, 3000);
    };

    // If you update the value immediately after clicking the button, you will find the output value is still the same as before.

    return <>
        <Input value={message} onChange={({target: {value}}) => changeMessage(value)}/>
        <Button onClick={handleClick}>Button</Button>
    </>;
}

```
