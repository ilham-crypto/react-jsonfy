import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Photos extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/photos';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
              <nav>
                    <Mui.AppBar>
                        <Mui.Toolbar>
                        <a href="#!" class="brand-logo right">Data Json Photos</a>
                            <Mui.Typography>
                    <div class="nav-wrapper red accent-4">
                    <ul class="left hide-on-med-and-down">
                        <li><a href="/">Users</a></li>
                        <li><a href="/Comments">Comments</a></li>
                        <li><a href="/Post">Posts</a></li>
                        <li><a href="/Albums">Albums</a></li>
                        <li><a href="/Photos">Photos</a></li>
                        <li><a href="/Categories">Categories</a></li>
                        <li><a href="/Brands">Brands</a></li>
                        <li><a href="/Items">Items</a></li>
                    </ul>
                    </div>
                    </Mui.Typography>
                    </Mui.Toolbar>
                    </Mui.AppBar>
                    </nav>
                <Mui.Container Fixed>
                    <Mui.Paper class="card-panel indigo">
                <h2>Data Json Photos</h2>
                </Mui.Paper><br/>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow class="card-panel indigo">
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">ALB_PHO_FK</TableCell>
                            <TableCell align="left">CAPTION</TableCell>
                            <TableCell align="left">URL</TableCell>
                            <TableCell align="left">THUMBNAIL_URL</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map(todo =>
                            <TableRow key={todo.id}>
                            <TableCell component="th" scope="row">
                                {todo.id}
                            </TableCell>
                            <TableCell align="left">{todo.alb_pho_fk}</TableCell>
                            <TableCell align="left">{todo.caption}</TableCell>
                            <TableCell align="left">{todo.url}</TableCell>
                            <TableCell align="left">{todo.thumbnail_url}</TableCell>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Photos;