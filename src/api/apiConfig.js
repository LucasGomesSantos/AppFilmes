const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0ad7ce2d705fb476cb9ac2387a7fc0b0',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;