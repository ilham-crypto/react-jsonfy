import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Comments extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/comments';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <nav>
                    <div class="nav-wrapper red accent-4">
                    <a href="#!" class="brand-logo center">Data Json Comments</a>
                    <ul class="left hide-on-med-and-down">
                        <li><a href="/">Users</a></li>
                        <li><a href="/Comments">Comments</a></li>
                        <li class="active"><a href="/Post">Posts</a></li>
                    </ul>
                    </div>
                </nav>
                <Mui.Container Fixed>
                <h1 align="center">DATA JSON COMMENTS</h1><br/><hr/>
                <table border="1">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>use_pos_fk</td> 
                            <td>pos_com_fk</td>
                            <td>comment</td> 
                            <td >date_add</td>
                            <td>date_upd</td>
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <thead>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.use_pos_fk}</td> 
                            <td>{todo.pos_com_fk}</td>
                            <td>{todo.comment}</td> 
                            <td>{todo.date_add}</td>     
                            <td>{todo.date_upd}</td>
                        </tr>
                    </thead>
                    )}
                </table>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Comments;