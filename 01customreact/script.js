// sbse phle ek element bnate hai 
const element = {
  "type": "h1",
  "props": {
    "id": "title",
    "children": "Hello, Custom React!"
  }
}

// ye root html element hai jisme hum apna react element render karenge
const container = document.getElementById("root");
// ye function humara custom render function hai

function render(element, container){
  const ele = document.createElement(element.type);
  // ab hum props ko handle karenge
  for(const prop in element.props){
    if(prop === "children"){
      ele.textContent = element.props[prop];
    } else {
      ele.setAttribute(prop, element.props[prop]);
    }
  }
  container.appendChild(ele);
}


