import React, {FC, ReactElement} from 'react';
import {Input, Button, Row, Col} from 'antd';

const UseState: FC = (): ReactElement => {
    return (
        <Row type='flex'>
            <Col span={12}><Input/></Col>
            <Col><Button>Button</Button></Col>
        </Row>
    );
};

export default UseState;
