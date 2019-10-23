```tsx
import React, {ChangeEvent, FC, ReactElement, useEffect, useRef, useState} from 'react';
import {Button, Input, message} from 'antd';

// If you change the value immediately after clicking the button, you will find that the output value has changed to the modified value.

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
```
