// https://www.omnicalculator.com/health/lymphocyte-count

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const absolutelymphocytecountRadio = document.getElementById('absolutelymphocytecountRadio');
const whitebloodcellsRadio = document.getElementById('whitebloodcellsRadio');
const lymphocytesRadio = document.getElementById('lymphocytesRadio');

let absolutelymphocytecount;
let whitebloodcells = v1;
let lymphocytes = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

absolutelymphocytecountRadio.addEventListener('click', function() {
  variable1.textContent = 'White blood cells';
  variable2.textContent = 'Lymphocytes';
  whitebloodcells = v1;
  lymphocytes = v2;
  result.textContent = '';
});

whitebloodcellsRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute lymphocyte count';
  variable2.textContent = 'Lymphocytes';
  absolutelymphocytecount = v1;
  lymphocytes = v2;
  result.textContent = '';
});

lymphocytesRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute lymphocyte count';
  variable2.textContent = 'White blood cells';
  absolutelymphocytecount = v1;
  whitebloodcells = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(absolutelymphocytecountRadio.checked)
    result.textContent = `Absolute lymphocyte count = ${computeabsolutelymphocytecount().toFixed(2)}`;

  else if(whitebloodcellsRadio.checked)
    result.textContent = `White blood cells = ${computewhitebloodcells().toFixed(2)}`;

  else if(lymphocytesRadio.checked)
    result.textContent = `Lymphocytes = ${computelymphocytes().toFixed(2)}`;
})

// calculation

function computeabsolutelymphocytecount() {
  return Number(whitebloodcells.value) * (Number(lymphocytes.value) / 100);
}

function computewhitebloodcells() {
  return Number(absolutelymphocytecount.value) / (Number(lymphocytes.value) / 100);
}

function computelymphocytes() {
  return (Number(absolutelymphocytecount.value) / Number(whitebloodcells.value)) * 100;
}