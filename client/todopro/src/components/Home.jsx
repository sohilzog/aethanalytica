import React, { useState, useEffect } from 'react'; // Combine imports
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { listTodo } from '../apis/fetchApi';
import Detail from './Detail';
import '../css/home.css'; // Ensure this import is correct



function Home() {
    const [todos, setTodo] = useState([]);

    useEffect(() => {

        const header={
            "Authorization":`Token ${sessionStorage.getItem("token")}`,
            "Content-Type":'application/json'
          }

        listTodo(header)
        .then((res) => {
                console.log(res.data);
                setTodo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="home-background">
            <Header />

            <Container>
                <Row>
                    <Col md={3} sm={12}>
                        <Link to="/add" className='btn btn-success mt-3'>Add Todo</Link>
                    </Col>
                    <Col md={9} sm={12}>
                        <table className='mt-3 table table-bordered table-st bg-transparent'>
                            <thead>
                                <tr>
                                    
                                    {/* <th>ID</th> */}
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.length !== 0 ?
                                    todos.map((td) => (
                                            <tr key={td.id}>
                                                <td>{td.title}</td>
                                                <td>{td.description}</td>
                                                <td>
                                                    <Link to={`/detail/${td.id}`} className='btn btn-success mt-3'>View</Link>
                                                    <Link to={`/edit/${td.id}`} className='btn btn-success mt-3'>Edit</Link>
                                                </td>
                                            </tr>
                                        ))
                                        : <h4>No Data</h4>
                                }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}

export default Home;