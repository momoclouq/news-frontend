import axiosClient from './axiosClient';

const wordAPI =  {
    getAll: (collection_id, params) => {
        const url = `http://localhost:8000/collection/${collection_id}/word`;
        return axiosClient.get(url, { params });
        },
    
    get: (collection_id, word_id) => {
        const url = `http://localhost:8000/collection/${collection_id}/word/${word_id}`;
        return axiosClient.get(url);
        },

    delete: (collection_id, word_id) => {
        const url = `http://localhost:8000/collection/${collection_id}/word/${word_id}`;
        return axiosClient.delete(url);
        },

    }


export default wordAPI;