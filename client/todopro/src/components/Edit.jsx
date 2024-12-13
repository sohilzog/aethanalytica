import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { todoDetail } from '../apis/fetchApi';
import { useState } from 'react';
import { todoUpdate } from '../apis/fetchApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Edit() {
  const [tddetail, setTododetail] = useState({
    title: "", description: ""
  });
  const { id } = useParams();
  
  useEffect(() => {
    const header = {
      "Authorization": `Token ${sessionStorage.getItem("token")}`,
      "Content-Type": 'application/json'
    };
    todoDetail(id, header).then((res) => {
      console.log(res.data);
      setTododetail(res.data);
    });
  }, [id]);

  const navigate = useNavigate();

  const updateData = () => {
    const header = {
      "Authorization": `Token ${sessionStorage.getItem("token")}`,
      "Content-Type": 'application/json'
    };
    todoUpdate(id, tddetail, header).then((res) => {
      console.log(res.data);
      toast.success("Data Updated");
      navigate('/');
    });
  };

  return (
    <div className='container p-5 d-flex flex-column align-items-center'>
      <div className='w-50 p-5 border shadow' style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h4 className='text-center mb-4' style={{ color: '#343a40' }}>Edit Todo</h4>
        <FloatingLabel controlId="floatingName" label="Title" className="mb-3">
          <Form.Control 
            type="text" 
            onChange={(e) => { setTododetail({ ...tddetail, title: e.target.value }) }} 
            value={tddetail.title} 
            style={{ borderRadius: '4px' }} 
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingAddress" label="Description" className="mb-3">
          <Form.Control 
            type="text" 
            onChange={(e) => { setTododetail({ ...tddetail, description: e.target.value }) }} 
            value={tddetail.description} 
            style={{ borderRadius: '4px' }} 
          />
        </FloatingLabel>
        
        <div className='d-flex justify-content-around'>
          <button className='btn btn-success' onClick={updateData} style={{ width: '45%' }}>Submit</button>
          <Link to={"/"} className='btn btn-danger' style={{ width: '45%' }}>Cancel</Link>
        </div>
      </div>
    </div>
  );
}

export default Edit;