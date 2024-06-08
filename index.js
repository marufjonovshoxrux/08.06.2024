const form = document.forms.namedItem('register')
const req_labels = form.querySelectorAll('.required')
const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')


const patterns = {
    name: /^[a-z а-я ,.'-]+$/i,
    surname: /^[a-z а-я ,.'-]+$/i,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mother: /^[a-z а-я ,.'-]+$/i,
    father: /^[a-z а-я ,.'-]+$/i,
    phone: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
    about_you: /^[a-z а-я ,.'-]+$/i,
    whatjava: /^[a-z а-я ,.'-]+$/i,
    whathtml: /^[a-z а-я ,.'-]+$/i,
    whatcss: /^[a-z а-я ,.'-]+$/i,
    car: /^[a-z а-я ,.'-]+$/i,
}



inputs.forEach(input => {
    input.addEventListener('keyup', (event) => {
        let val = event.target.value;
        let parent = event.target.parentElement;
        let pattern = patterns[event.target.name]; 

        if (pattern && pattern.test(val)) {
            parent.classList.remove('error');
        } else {
            parent.classList.add('error');
        }
    });
});



form.onsubmit = (e) => {
    e.preventDefault()
    let isError = false

    req_labels.forEach(lbl => {
        const inp = lbl.firstElementChild.nextElementSibling
        const warning_span = lbl.lastElementChild
        if (inp.value.length === 0) {
            isError = true
            lbl.classList.add('error')
            warning_span.innerHTML = `Please enter ${inp.name}`
            btn.style.backgroundColor = 'red'
        } else {
            lbl.classList.remove('error')
            warning_span.innerHTML = `Need to fill`
            btn.style.backgroundColor = 'blue'

        }
    })

    if (!isError) {
        submit()
        return
    }

    // alert('Chuvak ti oshibsa')
}

function submit() {
    const user = {}

    const fm = new FormData(form) // class

    fm.forEach((val, key) => user[key] = val)

    console.log(user);
}

