const inputs = document.querySelectorAll('input')
const patterns = {
    phone: /^\d{10}$/g,
    name: /^[a-z\d]{5,12}$/g,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z0-9-]{8,20}$/,
    email: /^([\w\.-]+)@([\w-]+)\.([a-z]{2,78})(\.[a-z]{2,8})?$/
};

function validation(field, regEx) {
    if (regEx.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "Invalid";
    }

};
inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.id.value);
        validation(e.target, patterns[e.target.attributes.id.value])
    });
});