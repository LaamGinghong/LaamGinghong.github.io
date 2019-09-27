```tsx
    import React, {ChangeEvent, FC, ReactElement, useState} from 'react';
    import {Input, Button, Row, Col, message} from 'antd';
    
    const UseState: FC = (): ReactElement => {
        const [value, changeValue] = useState('');
    
        const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
            changeValue(event.target.value);
        };
    
        const handleClick = (): void => {
            message.info(`The current value is ${value ? value : null} !`);
        };
    
        return (
            <Row type='flex' gutter={5}>
                <Col span={4}><Input value={value} onChange={handleInputChange} placeholder='Please enter the value !'/></Col>
                <Col><Button type='primary' onClick={handleClick}>Button</Button></Col>
            </Row>
        );
    };
    
    export default UseState;
```
