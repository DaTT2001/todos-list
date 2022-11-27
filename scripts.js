const form = document.querySelector('form')
const input = document.querySelector('.input-text')
const ul = document.querySelector('body > ul')
const remove = document.querySelector(".remove-complete")
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let value = input.value.trim()
    if(value) {
        addText({
            text: value,
        })
    }
    input.value = ''
})
function addText(obj) {
    let li = document.createElement('li')
    li.innerHTML = `${obj.text}` 
    li.addEventListener('click', function() {
        this.classList.toggle("completed")
    })
    li.addEventListener('contextmenu', function() {
        ul.removeChild(this)
    })
    ul.appendChild(li)
}
remove.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed')
    for(let i = 0; i < completed.length; i++) {
        ul.removeChild(completed[i])
    } 
})
