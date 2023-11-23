import apiCalls from '../api.json' assert { type: 'json' };

const api = apiCalls;


document.getElementById("clickMe").onclick = () => {
    alert('Open console')
    api.forEach( async site => 
        console.log(site.title, await fetch(site.link,{headers:'getTimeStories'})
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(`Sorry the site is not working ${site.link}`))),
    )
}
