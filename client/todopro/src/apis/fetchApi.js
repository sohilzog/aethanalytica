import commonapi from "./commonApi"

export const userRegister=(data)=>{
    
    return commonapi("POST",data,"http://127.0.0.1:8000/register/","")
}
export const userLogin=(data)=>{
    
    return commonapi("POST",data,"http://127.0.0.1:8000/token","")
}
export const listTodo=(header)=>{
    
    return commonapi("GET","","http://127.0.0.1:8000/todo/",header)
}

export const todoDetail=(id,header)=>{
    
    return commonapi("GET","",`http://127.0.0.1:8000/todo/${id}/`,header)
}
export const addTodo=(data,header)=>{
    return commonapi("POST",data,"http://127.0.0.1:8000/todo/",header)
}
export const todoDelete=(id,header)=>{
    
    return commonapi("DELETE","",`http://127.0.0.1:8000/todo/${id}/`,header)
}
export const todoUpdate=(id,data,header)=>{
    return commonapi("PUT",data,`http://127.0.0.1:8000/todo/${id}/`,header)
}