let ref_section = document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click', () =>{
    ref_section!.classList.toggle('hide') 
})


let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', () =>{
    exp_section!.classList.toggle('hide') 
})

let lag_section = document.getElementById('lag')
let lag_btn = document.getElementById('lag_btn')

lag_btn?.addEventListener('click', () =>{
    lag_section!.classList.toggle('hide')
})

let skill_section = document.getElementById('skill')
let skill_btn = document.getElementById('skill_btn')

skill_btn?.addEventListener('click', () =>{
    skill_section!.classList.toggle('hide')
})

let edu_section = document.getElementById('edu')
let edu_btn = document.getElementById('edu_btn')

edu_btn?.addEventListener('click', () =>{
    edu_section!.classList.toggle('hide')
})

let contact_section = document.getElementById('contact')
let contact_btn = document.getElementById('contact_btn')

contact_btn?.addEventListener('click', () =>{
    contact_section!.classList.toggle('hide')
})

let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', () => {
    window.print()
})