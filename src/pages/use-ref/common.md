```tsx
import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';
import {Input} from 'antd';

const UseRef: FC = (): ReactElement => {
    const inputRef = useRef<Input>(null);
    const [value, changeValue] = useState();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return <>
        <Input ref={inputRef} value={value} onChange={({target: {value}}) => changeValue(value)}/>
    </>;
};

export default UseRef;
```
