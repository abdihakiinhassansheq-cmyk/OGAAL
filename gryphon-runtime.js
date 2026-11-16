(()=>{
const prefix='gryphon-app-local:v1:d8b17728-9c8e-492d-ad6a-f1c8b51fada3:';
window.gryphon={storage:{
get:async key=>JSON.parse(localStorage.getItem(prefix+key)||'null'),
set:async(key,value)=>{localStorage.setItem(prefix+key,JSON.stringify(value));return value},
remove:async key=>{localStorage.removeItem(prefix+key)}}};
})();