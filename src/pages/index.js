import React, { Component } from 'react';
import Menu from './component/menu'
import Sidebar from './component/sidebar'
import Table from './component/table'
import {Row, Col} from 'antd'
import Register from './component/register'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Row>
                    <Menu />
                </Row>
                <Row gutter={300}>
                    <Col span={10}>
                        <Register />
                    </Col>
                    <Col span={14}>
                        <Table/>
                    </Col>

                </Row>
                
                
                
            </div>

          );
    }
}
 
export default Home ;