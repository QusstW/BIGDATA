import axios from "axios"

const API_URL = 'https://yts.mx/api/v2/list_movies.json'
const PAGE_COUNT = 10

export default class ApiService {
    static getFilms = (pageNumber) => {
        return new Promise((resolve, reject) => {
            axios
                .get(API_URL, {
                    params: { limit: PAGE_COUNT, page: pageNumber }
                })
                .then((res) => {
                    const movies = res.data.data.movies
                    resolve(movies)
                })
                .catch((e) => {
                    throw new Error(e)
                })


        })
    }
}