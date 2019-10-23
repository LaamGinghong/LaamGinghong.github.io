```tsx
import React, {FC, ReactElement, useEffect, useLayoutEffect, useRef, useState} from 'react';

const UseLayoutEffect: FC = (): ReactElement => {
    const [width, setWidth] = useState(0);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
        if (titleRef.current) {
            const titleWidth = titleRef.current.getBoundingClientRect().width;
            if (titleWidth !== width) {
                setWidth(titleWidth);
            }
        }
    });

    useEffect(() => {
        console.log('useEffect');
    });

    return <div>
        <h1 ref={titleRef}>hello</h1>
        <h2>{width}</h2>
    </div>;
};

export default UseLayoutEffect;
```
