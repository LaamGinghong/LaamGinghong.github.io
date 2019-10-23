import React, {FC, ReactElement, useEffect, useLayoutEffect, useRef, useState} from 'react';
import markdown from './markdown.md';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';

const UseLayoutEffect: FC = (): ReactElement => {
    const [width, setWidth] = useState(0);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [md, changeMd] = useState('');

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
        fetch(markdown).then(value => value.text()).then(value => changeMd(value));
    }, []);

    useEffect(() => {
        console.log('useEffect');
    });

    return <div>
        <h1 ref={titleRef}>hello</h1>
        <h2>{width}</h2>
        <ReactMarkdown source={md} renderers={{code: CodeBlock}}/>
    </div>;
};

export default UseLayoutEffect;
