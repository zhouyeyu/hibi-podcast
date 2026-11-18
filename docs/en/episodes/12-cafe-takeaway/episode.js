
if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelectorAll('video[autoplay]').forEach(v=>{v.autoplay=false;v.loop=false;v.pause();v.addEventListener('loadeddata',()=>v.pause(),{once:true});});
const player=document.querySelector('#player'),video=document.querySelector('#film'),status=document.querySelector('#play-status');
document.querySelectorAll('[data-audio-time]').forEach(b=>b.addEventListener('click',()=>{if(!player)return;player.currentTime=Number(b.dataset.audioTime);player.play().catch(()=>{});if(status)status.textContent=b.dataset.title||'';}));
document.querySelectorAll('[data-video-time]').forEach(b=>b.addEventListener('click',()=>{if(!video)return;video.currentTime=Number(b.dataset.videoTime);video.play().catch(()=>{});video.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});}));
if(player)player.addEventListener('timeupdate',()=>{const bs=[...document.querySelectorAll('.chapter')];let selected=null;for(const b of bs)if(Number(b.dataset.audioTime)<=player.currentTime)selected=b;bs.forEach(b=>b.setAttribute('aria-current',String(b===selected)));});
