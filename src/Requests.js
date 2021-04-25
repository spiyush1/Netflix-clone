const API_KEY = "4a5ad81e3c7c875afe5ff2bb075caa2e";

const Requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMovie :`?api_key=${API_KEY}&append_to_response=videos`
};

export default Requests;