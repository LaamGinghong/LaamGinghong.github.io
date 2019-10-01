```tsx
import React, {createContext, FC, ReactElement, useContext} from 'react';
import Header from './header';

const contextDemo = createContext('red');

const CurrentUser: FC = (): ReactElement => {
    return <contextDemo.Provider value={'green'}>
        <p>This is outside component !</p>
        <p>The value is green .</p>
        <Header/>
    </contextDemo.Provider>;
};

const Header: FC = (): ReactElement => {
    return <Notifications/>;
};

const Notifications: FC = (): ReactElement => {
    const value = useContext(contextDemo);
    return <>
        <p>This is inside component !</p>
        <p>The value is {value} .</p>
    </>;
};
```
