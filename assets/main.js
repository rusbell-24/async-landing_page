const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCNfqrOKXKjvKCmfcGXBtqJA&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9770128b9mshd54631af6de73b7p1dca2ejsn2bb589258f63',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (url){
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data)
    return data;
}

//Funcion que se llama a si misma
(async () => {
    try {
        const videos = await fetchData(url)
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch(error){
        console.log(error);
        //alert(error.message);
    }
})();