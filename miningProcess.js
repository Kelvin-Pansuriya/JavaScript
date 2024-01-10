let add = 0;
function my() {
  dis.setAttribute("disabled", "");
  let count = 0;
  let loop = setInterval(() => {
    console.log((add += 1));
    count++;
    if (count == 5) {
      clearInterval(loop);
      dis.removeAttribute("disabled", "");
    }
  }, 1000);
}
