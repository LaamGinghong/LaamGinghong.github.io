```tsx
import React, {FC, ReactElement} from 'react';
import SomeComponent from './some-component';

interface Props = {
    message: string;
};

const App: FC<Props> = (props): ReactElement => {
    const handleClick = (): void => {
        console.log('click!');
    };

    const {message} = props;

    return <SomeComponent message={message} onClick={handleClick}/>;
};
```
