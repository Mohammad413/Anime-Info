




let submit = document.querySelector('#submit');
let na = document.querySelector('#name');
submit.addEventListener('click', () => {


    let anime = async () => {


        let nameimage = document.querySelector('#im');
        nameimage.innerHTML = '';
        let data = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${na.value}`);
        let list = data.data.data;
        let imagelist = list.map(x => x.attributes.posterImage.small || x.attributes.coverImage.small);
      let nameindex=0;
            let namelist= list.map(x => x.attributes.titles.en_jp);
        for (image of imagelist) {
            let newimage = document.createElement('img');
            newimage.src = image;
                      let name = document.createElement('p');
          name.textContent=namelist[nameindex];
          
            nameimage.appendChild(newimage);
           nameimage.appendChild(name);
nameindex++;

        }








    }
    anime();




})
