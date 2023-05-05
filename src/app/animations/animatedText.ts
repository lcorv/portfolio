

export function animateText(pres:string[][], container, delay){
    if (container){
      for(let line of pres){
        let div = document.createElement('div');
        for(let letter of line){
          let span = document.createElement('span');
          span.innerHTML = letter;
          span.className = "animated-span";
          span.style.animation = `spread 1s ${delay}s forwards`;
          delay+=0.1;
          div.appendChild(span);
          setTimeout(()=>{
            span.style.animation = '';
            span.style.opacity = '1';
            span.addEventListener('hover', ()=>{
              span.classList.add('bounce');
              setTimeout(()=>{
                span.classList.remove('bounce')
              },1000)
            });
  
          }, 2000 + delay * 1000)
        }
        container.appendChild(div)
      }
  
    }
  }