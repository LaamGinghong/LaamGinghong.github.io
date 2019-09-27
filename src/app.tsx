import React, {FC, ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Pages from './pages/pages';

const App: FC = (): ReactElement => {
    return (
        <BrowserRouter basename='/pages'>
            <Pages/>
        </BrowserRouter>
    );
};
export default App;
