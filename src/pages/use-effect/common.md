```tsx
import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Button, message} from 'antd';

const Common: FC = (): ReactElement => {
    const [count, changeCount] = useState(0);

    useEffect(() => {
        message.info(`You click ${count} times`);
    });

    const click = (): void => changeCount(count + 1);

    return <Button onClick={click}>Click</Button>;
};

export default Common;

```
