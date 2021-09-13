import axiosClient from './axiosClient';

const collectionAPI =  {
    getAll: (params) => {
        const url = 'https://fakestoreapi.com/products';
        return axiosClient.get(url, { params });
        },
    
    get: (collection_id) => {
        const url = `https://fakestoreapi.com/products/${collection_id}`;
        return axiosClient.get(url);
        },

    post: (data) => {
        const url = `https://fakestoreapi.com/products`;
        return axiosClient.post(url, { data });
        },

    delete: (collection_id) => {
        const url = `https://fakestoreapi.com/products/${collection_id}`;
        return axiosClient.delete(url);
        },

    }


export default collectionAPI;