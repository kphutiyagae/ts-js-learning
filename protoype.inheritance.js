const o = {
    a: 1,
    b: 2,
    __proto__: {
        b: 3,
        c: 4,
    },
};

console.log(o.a); // Should be 1
console.log(o.b); // Should be 2
console.log(o.c); // Should be 4
