export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=5&api_key=srmcd41bZU6tj8kyKSJd82EDOLirMmha`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    ));

    return gifs;
}