
import axios from "axios";
import { base_url } from "../../server";

const createCategory = async (category) =>{
  const response = await axios.post(`${base_url}/categories`, category)
 return response.data;
}

const getCategories = async () => {
  const response = await axios.get(`${base_url}/categories`);

  return response.data;
};

const getCategory = async (id) => {
  const response = await axios.get(`${base_url}/categories/${id}`);

  return response.data;
};

const deleteCategory = async (id) => {
  const response = await axios.delete(`${base_url}/categories/${id}`);

  return response.data;
};

const updateCategory = async (category) => {
  const response = await axios.put(
    `${base_url}/categories/${category.id}`, { title: category.title },
  );
  return response.data;
};

const CategoryService = {
    createCategory,
    getCategories,
    getCategory,
    deleteCategory,
    updateCategory

}

export default CategoryService; 