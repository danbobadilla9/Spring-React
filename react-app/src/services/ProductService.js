import axios from "axios";

const initProducsts = [
    {
      id:1,
      name: 'Monitor Smsung 65',
      price: 500,
      description: 'El monitor es increible!'
    },
    {
      id:2,
      name: 'Iphone 14 ',
      price: 800,
      description: 'El télefono es muy bueno !!!'
    }
  ];


  const baseUrl = 'http://localhost:8080/products';

export const listProduct = () => {
    return initProducsts;
}

export const findAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response;
  } catch (error) {
    console.log('Error in findAlll');
    
  }
  return null;
}

// create 

export const create= async ({ name, description, price }) => {
  try{
    const response = await axios.post(baseUrl,{
      name,
      description,
      price
    });
    return response;
  }catch(error){
    console.log("Error create ");
    
  }
  return null;
}


// update

export const update= async ({ id ,name, description, price }) => {
  try{
    const response = await axios.put(baseUrl+'/'+id,{
      name,
      description,
      price
    });
    return response;
  }catch(error){
    console.log("Error create ");
    
  }
  return null;
}

export const remove = async (id) => {
  try {
    await axios.delete(baseUrl+"/"+id);
  } catch (error) {
    console.log(error);
    
  }
  return null;
}