let names= ["James","Joe","George","Zsolt"];

names.forEach((item, index) => {$("ul").append(`<li>${item}</li>`)});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('body').append(
    `<h1>${additionalBlock.title}</h1>`,
    `<p>${additionalBlock.text}</p>`
);