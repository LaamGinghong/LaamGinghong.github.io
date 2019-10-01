import React, {
    ChangeEvent,
    FC,
    ReactElement,
    useEffect,
    useState
} from 'react';
import {Input, Button, Row, Col, message, Alert} from 'antd';
import ReactMarkdown from 'react-markdown';
import md from './use-state.md';
import CodeBlock from '../../code-block';

const UseState: FC = (): ReactElement => {
    const [value, changeValue] = useState('');
    const [markdown, changeMarkdown] = useState('');
    const info = 'useState接收一个参数，返回一个长度为2的数组，数组的第一个元素当前组件的状态，第二个元素为修改这个状态的方法，useState接收的参数为这个状态的默认值，每当出发修改状态的方法，React会重新渲染视图';

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        changeValue(event.target.value);
    };

    const handleClick = (): void => {
        message.info(`The current value is ${value ? value : 'null'} !`);
    };

    useEffect(() => {
        fetch(md)
            .then(value => value.text())
            .then(text => changeMarkdown(text));
    }, []);

    return (
        <>
            <Row type='flex' gutter={5}>
                <Col span={4}>
                    <Input
                        value={value}
                        onChange={handleInputChange}
                        placeholder='Please enter the value !'
                    />
                </Col>
                <Col>
                    <Button type='primary' onClick={handleClick}>
                        Button
                    </Button>
                </Col>
            </Row>
            <br/>
            <Alert message={info} type='info'/>
            <br/>
            <div>
                <ReactMarkdown source={markdown} renderers={{code: CodeBlock}}/>
            </div>
        </>
    );
};

export default UseState;
