import React from 'react';
import { todoDetail } from '../apis/fetchApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { todoDelete } from '../apis/fetchApi';
import { toast } from 'react-toastify';

function Detail() {
    const [tudu, settudu] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const header = {
            "Authorization": `Token ${sessionStorage.getItem("token")}`,
            "Content-Type": 'application/json'
        };
        todoDetail(id, header).then((res) => {
            settudu(res.data);
        });
    }, [id]);

    const header = {
        "Authorization": `Token ${sessionStorage.getItem("token")}`,
        "Content-Type": 'application/json'
    };

    const delTodo = () => {
        todoDelete(id, header).then((res) => {
            toast.warning("Data deleted");
            navigate('/');
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#e9ecef' }}>
            <Card style={{ width: '20rem', backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Card.Body style={{ padding: '20px' }}>
                    <Card.Title style={{ textAlign: 'center', color: '#007bff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        Todo Details
                    </Card.Title>
                    <Card.Text style={{ lineHeight: '1.6', color: '#343a40' }}>
                        <h2 style={{ fontSize: '2.25rem', marginBottom: '10px' }}>Id: {tudu.id}</h2>
                        <h4 style={{ fontSize: '2.1rem', marginBottom: '8px' }}>Title: {tudu.title}</h4>
                        <h5 style={{ fontSize: '2.1rem', marginBottom: '6px' }}>Description: {tudu.description}</h5>
                    </Card.Text>
                </Card.Body>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <button className='btn btn-danger' onClick={delTodo} style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                        Delete
                    </button>
                </div>
            </Card>
        </div>
    );
}

export default Detail;