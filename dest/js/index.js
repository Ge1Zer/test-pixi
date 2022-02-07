const App = () => {
    console.log('hello module');
};

const Main = () => {
    let iterator = 1;
    const centerElement = document.getElementById("main");
    const getInnerTextElement = (i) => centerElement.innerHTML = `Try = ${i}`;
    const updateItterator = () => ++iterator;
    const mount = (i) => {
        getInnerTextElement(i);
    };
    mount(iterator);
    centerElement.addEventListener("click", () => {
        updateItterator();
        mount(iterator);
    });
    App();
};
Main();
// {
//   "files": ["src/main.ts", "src/greet.ts"],
//   "compilerOptions": {
//     "noImplicitAny": true,
//     "target": "es5"
//   }
// }
// {
//   "include":[
//     "./src/script/*", "typings.d.ts"
//   ],
//   "exclude": ["node_modules"],
//   "compilerOptions": {
//     "module": "commonjs",
//     "noImplicitAny": true,
//     "target": "ES2015"
//   }
// }
