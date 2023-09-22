/* 
    What: The Proxy object allows you to create an object that can be used in place of the original object,
          but which may redefine fundamental Object operations like getting, setting, and defining properties.
          Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

    How: By having a target (Original object to proxy) and handler (Object that defined HOW operations will be redefined.)
*/

const target = {
  message1: "Hello",
  message2: "Goodbye",
};

//NB: If handler is empty, it will behave just like target.
const handler = {
  get(target, prop, receiver) {
    return "World";
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1); // World
console.log(proxy.message2); // World
