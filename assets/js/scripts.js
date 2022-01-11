
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';



const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;

    } catch (e) {
        console.log(e.message);
    }
};

const loadingCat = async () =>{
    const img = document.getElementById('cat');
    img.src = await getCats();
};

loadingCat();

const catBtn = document.getElementById('change-cat');
catBtn.addEventListener('click', loadingCat);
