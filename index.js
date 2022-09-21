
const convertBtn = document.getElementById("convert-btn")

    //meter = 3.281 feet liter = 0.264 gallons kilogram = 2.204 pounds

convertBtn.addEventListener("click", function(){
  let input = document.getElementById("input").value;

  const lengthRes = input * 3.281;
  const lengthInvert = input / 3.281;

  const volumeRes = input / 3.785;
  const volumeInvert = input * 3.785;

  const massRes = input * 2.204;
  const massInvert = input / 2.204;

  document.getElementById("result-length").innerHTML = `${input} meters = ${lengthRes.toFixed(3)} feet 
  | ${input} feet = ${lengthInvert.toFixed(3)} meters`

  document.getElementById("result-volume").innerHTML = `${input} liters = ${volumeRes.toFixed(3)} gallons 
  | ${input} gallons = ${volumeInvert.toFixed(3)} liters`

  document.getElementById("result-mass").innerHTML = `${input} kgs = ${massRes.toFixed(3)} pounds 
  | ${input} pouns = ${massInvert.toFixed(3)} kgs`
  
})





 