import {Alert} from 'antd';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../code-block';
import {markdown1, markdown2} from './markdown';

const Description: FC = (): ReactElement => {
    const [md1, changeMd1] = useState('');
    const [md2, changeMd2] = useState('');


    useEffect(() => {
        fetch(markdown1).then(value => value.text()).then(value => changeMd1(value));
        fetch(markdown2).then(value => value.text()).then(value => changeMd2(value));
    }, []);

    return <>
        <Alert message='在组件中，一旦组件的state或者是props发生改变，会触发组件的重新渲染'/>
        <div>
            <ReactMarkdown source={md1} renderers={{code: CodeBlock}}/>
        </div>
        <Alert message='也就是说此时，即使涉及到的修改与子组件无关，但由于重新渲染了组件，
        导致传入子组件的参数也重新生成，也就导致了子组件也重新渲染。如果子组件是一个十分庞大的组件，这就会产生很多没必要的牺牲。'/>
        <Alert message='使用useCallback可以记住一个函数，这个函数只有在特定参数修改的时候才会触发重新生成进行渲染。'/>
        <div>
            <ReactMarkdown source={md2} renderers={{code: CodeBlock}}/>
        </div>
    </>;
};

export default Description;

