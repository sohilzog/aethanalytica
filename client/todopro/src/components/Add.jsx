import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addTodo } from '../apis/fetchApi';
import Form from 'react-bootstrap/Form';

function Add() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitData = async (data) => {
    const header = {
      "Authorization": `Token ${sessionStorage.getItem("token")}`,
      "Content-Type": 'application/json'
    };

    try {
      const res = await addTodo(data, header);
      console.log(res.data);
      toast.success("added");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add todo");
    }
  };

  return (
    <div className='container p-5 d-flex flex-column align-items-center'>
      <div className='w-50 p-5 border shadow' style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h4 className='text-center mb-4' style={{ color: '#343a40' }}>Add Todo</h4>
        <form onSubmit={handleSubmit(submitData)}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label style={{ fontWeight: 'bold' }}>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter title" 
              {...register("title", { required: true })} 
              style={{ borderRadius: '4px' }} 
            />
            {errors.title && <span className="text-danger">Title is required</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label style={{ fontWeight: 'bold' }}>Description</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter description" 
              {...register("description", { required: true })} 
              style={{ borderRadius: '4px' }} 
            />
            {errors.description && <span className="text-danger">Description is required</span>}
          </Form.Group>
          
          <div className='d-flex justify-content-around'>
            <button type='submit' className='btn btn-success' style={{ width: '45%' }}>Submit</button>
            <Link to={"/"} className='btn btn-danger' style={{ width: '45%' }}>Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;