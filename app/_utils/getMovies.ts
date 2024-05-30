export const fetchPopularMovies = async (page: number) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=0651b0988079ca594ca34936fba357ea&language=en-US&page=${page}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch now popular movies:", error);
        return [];
    }
};

export const fetchNowPlayingMovies = async (page: number) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=0651b0988079ca594ca34936fba357ea&language=en-US&page=${page}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
        return [];
    }
};

// _utils/getMovies.ts

export const getMovieById = async (id: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0651b0988079ca594ca34936fba357ea&language=en-US`
    );
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
