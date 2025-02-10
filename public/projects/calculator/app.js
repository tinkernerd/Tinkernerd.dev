document.onkeydown = function (e) {
  console.log(e)
  let key = document.getElementById(e.key)
  key.click()
}
let keys = document.querySelectorAll('.key a, .corner-key a');
keys.forEach(function (key) {
  key.onclick = function (e) {
      let keyVal = e.srcElement.innerHTML;
      let input = document.querySelector('.calc-input');
      let result = document.querySelector('.calc-result')

      if (keyVal == "C") {
          input.innerHTML = "0";
          result.innerHTML = "0";
      } else {
          if (keyVal != "=") {
              console.log(input.innerHTML)
              if (input.innerHTML == "0") {
                  input.innerHTML = keyVal;
              } else {
                  input.innerHTML += ` ${keyVal}`;
              }
          } else {
              let inputVal = input.innerHTML.replace(/X/g, "*").replace(/ /g, "")
              console.log(inputVal)
              result.innerHTML = eval(inputVal)
              input.innerHTML = "0";
          }
      }

  }
});
