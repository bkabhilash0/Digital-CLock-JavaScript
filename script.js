console.log("Script Linked Correctly");

const addZero = (n) =>{
    return (n<10)?"0"+n:n;
}

const clocks = () => {
  clock = document.getElementById("clock");
  date = document.getElementById("date");

  const time = new Date();

  const hours = addZero(time.getHours());
  const minutes = addZero(time.getMinutes());
  const seconds = addZero(time.getSeconds());
  const today = addZero(time.getDate());
  const month = addZero(time.getMonth()+1);
  const year = addZero(time.getFullYear());

  const fulltime = `${hours} : ${minutes} : ${seconds}`

  clock.innerText = fulltime;
  date.innerText = `${today} - ${month} - ${year}`;
};

setInterval(clocks,1000);
clocks();

const changeColor = () =>{
    console.log("object");
    document.body.style.background = `linear-gradient(to right,${color1.value},${color2.value}`;
    console.log(document.body.style.background);
};


var color1 = document.getElementById("color1");
color1.addEventListener("input",changeColor);
var color2 = document.getElementById("color2");
color2.addEventListener("input",changeColor);
