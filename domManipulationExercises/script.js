document.querySelector('body').setAttribute('style', 'background-color: black; color: white;');

let p = document.createElement('p');
p.textContent = "Hey I’m red!";
p.style.color  = 'red';

let h3 = document.createElement('h3');
h3.textContent = "I’m a blue h3!";
h3.style.color  = 'blue';

let div = document.createElement('div');
div.setAttribute('style', 'background-color: pink; border: 1px solid white'); // using white as the background is already black!
let h1 = document.createElement('h1');
h1.textContent = "I’m in a div";
let divP = document.createElement('p');
divP.textContent = "ME TOO!"
div.append(h1);
div.append(divP);

// append
let h1OfBody = document.querySelector('body');
h1OfBody.append(p);
h1OfBody.append(h3);
h1OfBody.append(div);
