import React, {FC, ReactElement} from 'react';
import {Alert} from 'antd';

const Description: FC = (): ReactElement => {
    const info = 'useEffect相当于class组件中的生命周期（挂载、更新、销毁），开发者可以选择在某些时候执行useEffect';
    return <Alert message={info} type='info'/>;
};

export default Description;
