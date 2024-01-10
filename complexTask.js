let array = [
  0,
  1,
  [1, 2],
  [
    54,
    {
      name: "kelvin",
      age: 20,
      are: [
        1,
        2,
        3,
        [
          7,
          9,
          0,
          {
            more: "data",
            neww: {
              added: "formate",
              com: {
                ok: "ok",
                hello: "world",
              },
            },
          },
        ],
      ],
    },
  ],
];
console.log(array);
console.log(array[3][1].are[3][3].neww.com.ok);

let [a, b, c, d] = array;
let [c1, c2] = c;
let [d1, d2] = d;
let { name, age, are } = d2;
let [Are1, Are2, Are3, Are4] = are;
let [newAre01, newAre02, newAre03, newAre04] = Are4;
let { more, neww } = newAre04;
let { added, com } = neww;
let { ok, hello } = com;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(c1);
console.log(c2);
console.log(d1);
console.log(d2);
console.log(name);
console.log(age);
console.log(are);
console.log(Are1);
console.log(Are2);
console.log(Are3);
console.log(Are4);
console.log(newAre01);
console.log(newAre02);
console.log(newAre03);
console.log(newAre04);
console.log(more);
console.log(neww);
console.log(added);
console.log(com);
console.log(ok);
console.log(hello);
