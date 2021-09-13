import axiosClient from './axiosClient';

const newsAPI =  {
    getAll: (collection_id, params) => {
        const url = `http://localhost:8000/collection/${collection_id}/news`;
        return axiosClient.get(url, { params });
        },
    
    get: (collection_id, news_id) => {
        const url = `http://localhost:8000/collection/${collection_id}/word/${news_id}`;
        return axiosClient.get(url);
        },

    delete: (collection_id, news_id) => {
        const url = `http://localhost:8000/collection/${collection_id}/word/${news_id}`;
        return axiosClient.delete(url);
        },

    }


export default newsAPI;