const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    const divs = document.querySelectorAll('.gridItem');
    
    divs.forEach((div)=>{
        div.classList.remove('newColor');
    });
    const size = prompt('Enter the size of the grid to be generated(1-64): ');
    makeGrid(size);

});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    }
}

function makeGrid(size){
    const container = document.querySelector('.container');
    
    
    let editCSS = document.createElement('style');
    let gridTemplateValue = 'auto '.repeat(size);
    console.log(editCSS);
    editCSS.innerHTML = `.newContainer {display: grid;
    height: 960px;
    width: 960px;
    background-color: gainsboro; 
    grid-template-columns: ${gridTemplateValue} !important;}`;
    document.body.appendChild(editCSS);
    
    container.classList.add('newContainer');
    
    
    removeAllChildNodes(container);
    for(i=0;i<(size*size);i++){
        let newdiv = document.createElement('div');
        newdiv.classList.add('gridItem');
        newdiv.addEventListener('mouseenter',()=> {
            newdiv.classList.add('newColor');
        });
        /*newdiv.textContent = i+1;*/
        
        container.appendChild(newdiv);
    }
}
makeGrid(16);