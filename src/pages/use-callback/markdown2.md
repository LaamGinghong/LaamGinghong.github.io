```tsx
import React, {FC, ReactElement, useCallback} from 'react';
import SomeComponent from './some-component';

interface Props = {
    message: string;
};

const App: FC<Props> = (props): ReactElement => {
    const memoizedHandleClick = useCallback(() => {
        console.log('click!');
    }, []);

    const {message} = props;

    return <SomeComponent message={message} onClick={memoizedHandleClick}/>
};
```
