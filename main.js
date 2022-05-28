




let submit = document.querySelector('#submit');
let na = document.querySelector('#name');
submit.addEventListener('click', () => {


    let anime = async () => {


        let nameimage = document.querySelector('#im');
        nameimage.innerHTML = '';
        let data = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${na.value}`);
        let list = data.data.data;
        let imagelist = list.map(x => x.attributes.posterImage.small || x.attributes.coverImage.small);
        for (image of imagelist) {
            let newimage = document.createElement('img');
            newimage.src = image;
            nameimage.appendChild(newimage);


        }



        // let image1 = data.data.data[1].attributes.coverImage.original;

        // let img = document.createElement('img');
        // img.src = image1;
        // im.appendChild(img);




    }
    anime();




})