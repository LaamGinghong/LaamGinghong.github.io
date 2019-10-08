``` tsx
import React, {FC, ReactElement, useMemo, useCallback} from 'react';

const UseMemo: FC = (): ReactElement => {
    const child1 = useMemo(() => <p>child1</p>, []); // 返回的是<p>child1</p>
    const child2 = useCallback(() => <p>child2</p>, []); //返回的是匿名函数

    return <>
        {child1}
        {child2}
    </>
};

export default UseMemo;
```
