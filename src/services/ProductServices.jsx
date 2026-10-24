import axios from "axios";

export const URL_BASE = "https://6a97037b0e3240db90619efc.mockapi.io";


export async function getProducts() {
    const response = await axios.get(`${URL_BASE}/products`);

    const products = response.data;

    return products;
};

export async function getUsers() {
    const response = await axios.get(`${URL_BASE}/users`);

    const users = response.data;
    return users;
}

export async function getUserByid(id){
    const response = await axios.get(`${URL_BASE}/users/${id}`)

    const user = response.data;

    return user;
}

export async function getProductsById(id) {
    const response = await axios.get(`${URL_BASE}/products/${id}`);

    const producto = response.data;

    return producto;
}



