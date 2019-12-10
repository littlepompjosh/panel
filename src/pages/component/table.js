import React, { Component } from 'react';
import { Table, Divider, Tag, Button } from 'antd';
import {GETDATA} from '../../function/getdata'

class dataTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            data : null

         }
    }

    componentDidMount = async() =>{

        var prepared_data = []

        await GETDATA().then(res => {

          try {

            res.forEach(user => {
              prepared_data.push(
                  {
                      id: user.id,
                      username: user.username,
                      name: user.name ,
                    }
              ) 
            });

          }catch(err) {

            console.log(err)

          }
               
        })

        console.log(prepared_data)

        this.setState({ data : prepared_data})

        

        // {
        //     key: '1',
        //     name: 'John Brown',
        //     age: 32,
        //     address: 'New York No. 1 Lake Park',
        //     tags: ['nice', 'developer'],
        //   }

    }

    render() { 
        return ( 
            <Table columns={columns} dataSource={this.state.data} />
         );
    }
}
 const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }
];

export default dataTable;