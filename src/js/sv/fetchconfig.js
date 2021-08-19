import structure from "../view/main.js";

const controller = new AbortController();
       
function  timeoutFetch(timeout=2000) {

    setTimeout(() => controller.abort(), timeout);

    let url = `https://api.spacexdata.com/v3/launches/`
   
    fetch(url, {"signal": controller.signal})
    .then(async (resp)=> resp = await resp.json())
    .then(resp =>{
        structure(resp)
    })
    .catch((err)=>{
        console.warn(err.message);
    })
}
timeoutFetch(1000)




            //FETCH COMPLEXO

    //  fetch(url, options)
    //     .then(async (response)=>{
    //         if(!response.ok) throw response.statusText;
    //         console.log({response});
    //         console.log(response.headers);
            
    //         let type = response.headers.get('content-type');
    //         let obj = {
    //             html:null,
    //             json:null,
    //             blob:null
    //         }
    //         if(type.startsWith('text/html')){
    //             obj.html = await response.text();
    //         }else if(type.startsWith('application/json')) {
    //             obj.json = await response.json();
    //         }else if(type.startsWith('image/')){
    //             obj.blob = await response.blob();
    //         }
    //         return obj;
    //     })
    //     .then(({html,json,blob})=>{
    //         if(html) {
    //             const doc = new DOMParser().parseFromString(html, 'text/html');
    //         }
    //         if(json){
    //             structure(json)
    //         }
    //         if(blob){
    //             let img = document.createElement('img');
    //             let url = URL.createObjectURL(blob); 
    //             img.src = url;
    //             document.body.append(img);
    //         }
    //     })
    //     .catch((err)=>{
    //         console.warn(err.message);
    //     })

  