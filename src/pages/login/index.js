import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Menu } from 'antd';
// import axios from 'axios'

var axios = require('axios')


class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }

            axios({
                method: 'post',
                url : 'http://localhost:4000/api/login',
                data : {
                    username : values.username,
                    password : values.password
                }
            }).then(function (response) {
                console.log(response.data);
                if(response.data[0] !== undefined){
                    alert('USER MATCH')
                }else{
                    alert('WRONG CREDENTIALS')
                }
              })

        });
    }
    render() { 
        const { getFieldDecorator } = this.props.form;
        return (
                <div className="jaren-main-container">
                    <div className="jobelle-login-container">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <br/>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <br/>
                            Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </div>
                    
                </div>
  
         );
    }
}

export default  Form.create({ name: 'login' })(LoginForm);