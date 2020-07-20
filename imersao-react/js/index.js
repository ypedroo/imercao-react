//BOM - window
//DOM - document 
const root = document.querySelector('#root');

function newElement(tag, content) {
    const element = `<${tag}>${content}</${tag}>`
    
    root.insertAdjacentHTML('beforeend', element);
    
}


newElement('h1', 'Difficulty')
newElement('h2', 'ypedro')