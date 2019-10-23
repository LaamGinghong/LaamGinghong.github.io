```tsx
import React, {FC, forwardRef, ReactElement, useEffect, useImperativeHandle, useRef} from 'react';
import {Input} from 'antd';

const Child = forwardRef((props, ref) => {
    const inputRef = useRef<Input>(null);
    useImperativeHandle(ref, () => inputRef.current);

    return <Input ref={inputRef}/>;
});

const UseImperativeHandle: FC = (): ReactElement => {
    const inputRef = useRef<Input>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return <Child ref={inputRef}/>;
};

export default UseImperativeHandle;
```
