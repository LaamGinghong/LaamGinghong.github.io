import React, {createContext, FC, ReactElement} from 'react';
import Header from './header';

export const contextDemo = createContext('red');

const CurrentUser: FC = (): ReactElement => {
    return <contextDemo.Provider value={'green'}>
        <p>This is outside component !</p>
        <p>The value is green .</p>
        <Header/>
    </contextDemo.Provider>;
};

export default CurrentUser;

