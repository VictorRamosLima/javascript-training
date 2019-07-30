function hello(thing) {
  console.log("Hello " + thing);
}

// this:
hello("world");

// desugars to:
hello.call(undefined, "world");
