document.getElementById('sub_btn').addEventListener('click',Calculate);


    function Calculate(){
    let y1 = document.getElementById('Year').value;
    let m1 = document.getElementById('Month').value;
    let d1 = document.getElementById('day').value;
}

let y2 = new Date().getFullYear();
let m2 = new Date().getMonth()+1;
let d2 = new Date().getDate();

let dayBox = document.getElementById('sp_day')
let monthBox = document.getElementById('sp_month')
let yearBox = document.getElementById('sp_year')

var d; var m; var y;
let month =[31,28,31,30,31,30,31,31,30,31,30,31]

if(y1<=y2 && m1<=12 && d1<=31){
    if(d1>d2){
        d2 = d2+month[m2 - 1];
        m2 = m2-1
    }
    if(m1>m2){
        m2 = m2 + 12;
        y2 = y2-1;
    }

    d = d2-d1;
    m = m2-m1;
    y = y2-y1;
    dayBox.textContent = d;
    monthBox.textContent = m;
    yearBox.textContent = y;
}
else{
    let inputs = document.getElementsByClassName("birth_inp")
    Array.from(inputs).forEach((e)=>{
        e.value=""
    })
    alert('Please Enter Valid Date')
}