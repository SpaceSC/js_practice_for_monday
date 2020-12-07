function pageLoad () {


  let aNumber = 1; //itt egy számot adtunk meg a változó értékének
 
  let aText = "this is a text"; //itt egy szöveget adtunk meg a változó értékének
  
  let sMultilineText = `
    this 
    is 
    a 
    multiline 
    text
  `; // többsoros szöveget mentettünk el változóba
  
  let theRoot = document.getElementById("root"); //itt egy html elemet mentettünk el változóba

  let aFunction = function () {

  } // itt egy függvényt mentettünk el változóba

  console.log(aNumber);

  if (aNumber === 1) {
    console.log("the number is: " + aNumber + ", and i'm happy with it.");
    console.log(`the number is: ${aNumber}, and i'm happy with it.`); // `${}` template literal: változó szövegként

    let anotherText = `this is another text`;
    let anotherNumber = 2;
    console.log(anotherText);

    if (anotherNumber===2) {
      console.log(anotherText);
    }
  }

  //console.log(anotherText); //ez itt nem működik, scope-on kívül van

  for (let index = 0; index < 100; index++) {
    console.log(`the index number is: ${index}`);
    
    theRoot.insertAdjacentHTML("beforeend", `
      <div class="divClass">
        I love Mondays.
        By the way, the index number is: ${index}.
      </div>
    `); 
  }

  let allTheDivs = theRoot.querySelectorAll(".divClass");

  console.log(allTheDivs[0]);
}
window.addEventListener("load", pageLoad); //ahol event van, ott van ()