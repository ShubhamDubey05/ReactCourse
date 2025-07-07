 function customRender(reactElement, container){
    const ele = document.createElement(reactElement.type);
       ele.innerHTML = reactElement.children;
       ele.setAttribute('href', reactElement.href);
       ele.setAttribute('target', reactElement.target);
      container.appendChild(ele);
 }






const reactElement  = {
    type : 'a',
    props:{
      href : 'https://google.com',
      target : '__blank__'
    },
    children : "click me to visit the google"
}

const container  =  document.querySelector('#root');

customRender(reactElement, container);


