```tsx
import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Button, message} from 'antd';

const Special: FC = (): ReactElement => {
    const [count, changeCount] = useState(0);
    const [markdown, changeMarkdown] = useState('');

    useEffect(() => {
        message.info(`You click ${count} times`);
    }, []);

    const click = (): void => changeCount(count + 1);

    return (
        <>
            <p>You click {count} times</p>
            <Button onClick={click}>Click</Button>
        </>
    );
};

export default Special;

```
