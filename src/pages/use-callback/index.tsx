import React, {FC, ReactElement} from 'react';
import Description from './description';
import Example from './example';

const UseCallback: FC = (): ReactElement => {
    return <>
        <Example/>
        <Description/>
    </>;
};

export default UseCallback;
