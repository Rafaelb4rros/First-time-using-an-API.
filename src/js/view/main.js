
export  default function structure(json) {

    json.forEach(mission => {
    let mN = mission.mission_name;
    let lY = mission.launch_year;
    let rN = mission.rocket.rocket_name;
    let lDUTC = mission.launch_date_utc;
    let lV = mission.links.video_link;
    let mIMG = mission.links.mission_patch_small;
    let mDetails = mission.details;
    
    let mInfo1 = mission.links.article_link;
    let mInfo2 = mission.links.wikipedia;
    let mS = "";
    let msR = "";

    if(!mission.launch_success){
    if(mission.launch_failure_details !== undefined) {
        msR = mission.launch_failure_details.reason;
        mS = `<span class='fail'>Fail<span> <br><span class='rF'>reason: ${msR}</span>`;
    } else {
        msR = 'Unknow';
    }
    } else {
        mS =  `<span class='success'>Success<span>`
    }
       
    let li = document.createElement('li');
    li.setAttribute('class', 'mission_container');
     let h1 = document.createElement('h1');
     h1.setAttribute('class', 'mission_name');
    h1.innerHTML = `MISSION: <span class='mN'>${mN}</span>`;
    li.appendChild(h1);
    
    let p = document.createElement('p');
    let h2 = document.createElement('h2');
    h2.innerHTML = `YEAR:  <span class='mN'>${ lY }<span> `
    
    p.innerHTML = ` NAME: <span class='mN'>${ rN }</span> <br><br>
    LAUNCH DATE: <span class='mN'>${new Date(lDUTC)}</span> <br><br>
    MISSION STATUS: ${mS}
    <br>
    <span class="moreDT">MORE DETAILS: ${mDetails}</span>
     <br>
    <br>
    <img class="img" src="${mIMG}" alt="Mission IMAGE"></img>
    
    <p>LAUNCH VIDEO: <a href="${lV}" class='mN'>${lV}</a></p>
    <br> 
    <p class="more">For more Information: 
    <br>
    <a href="${mInfo1}">${mInfo1}</a> 
    <br> 
    <a href="${mInfo1}">${mInfo2}</a></p>`
    li.appendChild(h2)
         li.appendChild(p);
             document.querySelector('.missions_container').appendChild(li);
    
        
     })
    
    
    
    
    window.onload = function() {
    var item = document.querySelectorAll('.mission_container');
    if(item[0] !== undefined) {
    item[0].classList.add('mission_active')
    }
    }
    
    let btns = document.querySelectorAll('button')
    
    var i = 1;
    
    btns.forEach(btn =>{
    btn.addEventListener('click', evt => btnFunction(evt.target));
    })
    
    function btnFunction(btn) {
    
    const item = document.querySelectorAll('.mission_container');
    
    if (btn.className == 'btn-next') {
    console.log(item[i])
    item[i].classList.add('mission_active')
    if(i >= 1) {
    item[i].previousElementSibling.classList.remove('mission_active')
    }
    i++
    if (i == item.length) {
    item.forEach(item=> item.classList.remove('mission_active'))
    i = 1;
    }
    }
    
    if(btn.className == 'btn-back' && i > 1) {
    
    i--
    item[i].classList.remove('mission_active');
    item[i].previousElementSibling.classList.add('mission_active');
    }
        }
    }