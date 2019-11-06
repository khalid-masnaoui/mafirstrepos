let log = console.log;
let M = ['hey', 'khalid', 'hello', 'masma', 12, 23, true, [13, 'hello']];
//log(6);
//L.forEach((x, y) => console.log((x, y)));
/*log(L[0][0]);
L.push("shut up");

L.reverse();
L.unshift(6);
log(L, y);
function me() {
    let x = 3;
    if (x > 2) {
        x = 4;
        var y = 7;
    }
    log(y);
    log(x);
}
me();*/
/*let x = parseInt(prompt("enter ur luck number"));
switch (x) {
    case 2:
        log("i see u have choosen the number 2 , i may told u something about that number , its the most used number");
        break;
    case 3:
        log("hola , the number 3 is considered about bla bla");
        break;
    default:
        if (!x.isNaN) {
            log("ur number is not consider lucky ");
        } else {
            log("hello there , only numbers allowed ");
        }

};*/
/*let x = 2 > 1 ? 3 > 1 ? true : false : "no";
log(x);*/

/*____OBject____*/

let myObj = {
    hey: 'me',
    hello: 'masma',
    maList: [1, 28],
    nestObj: {
        helloThere: 'me',
        heyo: 'masma'
    },
    newgear: c => log(3)
};
/*
log(myObj.hasOwnProperty("hey"));
myObj.nestObj.name = "khalid";
delete myObj.hey;
log(myObj);
log(myObj.newgear(3));*/

/*for (let j = 0; j < 10; j++) {
    L[j] = "hey" + " " + j;
    let h = 3;
    if (3 > 2) {
        log(h);

    }
}
log(L);*/

/*while (i < 10) {
    log("hey");
    i++;
}*/
/*try {
    log(x);
} catch (error) {
    log("we are sorry , but it seems u have error " + error);

}

k = L.forEach((x, y) => x + y, 20);
log(k);

let L = [1, 6, 8, 0, 07, 30];
let O = {
    hey: "me",
    hello: "masma",
    maList: [1, 28],
    nestObj: {
        helloThere: "me",
        heyo: "masma"
    },
    newgear(c) {
        log(3)
    }
}

let [, a, b, ...k] = [...L];
log(a, b, k);

let { h, j } = O;
log(h, j);

let a = function(b) {
    this.b = b;
}
var g = new a(5);
g.b = 3;
log(g);
class hey {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    f(h) {
        log(4);
    };
    get writer() {
        log(this.x);
    };
    set writer(u) {
        this.x = u;
    }


}

let c = new hey(3, 5);
c.x = 10;
c.writer;
c.writer = 3;
log(c, );
let g = function(c) { log(2) };
var x = setTimeout(g, 7000, 3);

var x = 5;
if (8 > 5) {
    var y = 3;
}

log(y);
log(M);
log(M.Length);

L = document.querySelector('div');
log(L);
const li = document.createElement('li');
const x = document.createElement('spna');
li.appendChild(x);
L.appendChild(li);
x.textContent = 'hello';
const y = document.createTextNode('mama');
log(y);
x.textContent += y;
li.style.color = 'red';

log(L.parentElement.hasAttribute('class'));

function f() {
    function* h() {
        var x = yield 7;
        log(x);
        var y = yield;
        log(y);
        yield console.log('mamamia');
    }
    var gen = h();
    h();
    log(gen.next());
    log(gen.next(3));
    log(gen.next(7));
    log(gen.next());
}
f();

var regx = /q(?!ju)/i;
var h = 'qju';
log(regx.test(h));*/

/*var xhr = new XMLHttpRequest();
log(xhr); */
// var x = new Date();
// let y = 1234;
// let d = parseFloat(y);
// let f = y.toLocaleString('en');
// let t = '888,99';
// let h = f.toString();
// let s = parseFloat(f);
// let k = t.replace(/,/g, '');
// let g = Number(k);

// log(g);

// if (3 < 4) {
//     var x = 3;
//     console.log(x);
// }
// // log(x);
// window.onload = function() {
//     var u = document.createElement('p');
//     var y = document.createTextNode('jdjd');
//     u.appendChild(y);
//     var child = document.getElementById('jh');
//     child.removeChild();

//     var element = document.getElementById('id1');
//     element.replaceChild(u, child);
//     log(child);
// };
// let obj = { name: 'khalid', company: 'home' };

// let J = function(a, b, c) {
//     console.log(this.name, a, b, c);
// };

// // J.call(obj, 3, 2, 4);
// // J.apply(obj, [3, 4, 5]);
// let bounc = J.bind(obj);
// bounc(1, 2, 3);

{}