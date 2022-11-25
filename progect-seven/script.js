const labels = document.querySelectorAll('.form-control label');
console.log(labels)
labels.forEach(label=>{
 label.innerHTML= label.innerHTML.split("").map((e, index)=>{
     return`<span style="transition-delay:${index * 50}ms">${e}</span>`
     
 }).join("")
 console.log(label.innerHTML)
 
})