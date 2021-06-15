import axios from "axios"

const API_URL = 'https://yts.mx/api/v2/list_movies.json'
const PAGE_COUNT = 15

export default class ApiService {
    static getFilms = (page) => {
        return new Promise((resolve, reject) => {
            axios
                .get(API_URL, {
                    params: { limit: PAGE_COUNT }
                })
                .then((res) => {
                    const { data } = res
                    const { movies } = data
                    //дописать логику || В movies лежит массив всех фильмов 
                })
                .catch((e) => {
                    throw new Error(e)
                })


        })
    }
}