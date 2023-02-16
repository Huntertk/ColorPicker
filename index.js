const btn = document.getElementById('btn')
const colorEl = document.getElementById('color')
const selectColorEl = document.getElementById('select-color')
const renderColorDiv = document.getElementById('render-color-div')



const getScheme = () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorEl.value.slice(1)}&mode=${selectColorEl.value}&count=5`)
    .then(res => res.json())
    .then(data => {
        let colorArray = []
        console.log(data.colors)
        data.colors.forEach((item) => {
            colorArray.push(item.hex.value)
        })
        console.log(colorArray)
        renderDiv(colorArray)
        
    })
}
document.addEventListener('click', (e) => {
    if(e.target.id === "btn"){
        // console.log(colorEl.value.slice(1))
        // console.log(selectColorEl.value)
        getScheme()
    } else if(e.target.dataset.hex){
        navigator.clipboard.writeText(e.target.dataset.hex)
        alert("Copied")
    }

    
})
const renderDiv = (colorArray) => {
    let getHtml  = ``
    colorArray.forEach((item) => {
        getHtml +=`
        <div data-hex=${item} class="color-render" id="color-render" style="background-color:${item};">
        <p class="color-name">${item}</p>
        </div>
        `
    })
    
    renderColorDiv.innerHTML = getHtml
    
}






