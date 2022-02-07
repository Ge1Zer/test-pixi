

const Main = () =>{
  
  let iterator = 1
  const centerElement = document.getElementById("main")


  const getInnerTextElement = (i: number) =>centerElement.innerHTML = `Try = ${i}`
  const updateItterator = () => ++iterator

  const mount = (i: number) =>{
    getInnerTextElement(i)
  }

  mount(iterator)

  centerElement.addEventListener("click", ()=>{
    updateItterator()
    mount(iterator)
  })
  
  App()
}
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