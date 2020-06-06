import React, { useState, useEffect } from 'react';
import '../index.css';
import api from '../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DataTable = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const getPosts = await api.get('posts')
            setPostList(getPosts.data)
            console.log(getPosts)
        }
        loadData()

    }, []);

    const classes = useStyles();

    return (
        <div className="table">
            {!postList ? (
                <h1>Carregando...</h1>
            ) : (
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell >Title</TableCell>
                                    <TableCell>Subtitle</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {postList.map(posts =>
                                    <TableRow key={posts.id}>
                                        <TableCell component="th" scope="row">
                                            {posts.userId}
                                        </TableCell>
                                        <TableCell >{posts.title}</TableCell>
                                        <TableCell >{posts.body}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
        </div>
    );
}

export default DataTable;