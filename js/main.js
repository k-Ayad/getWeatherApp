
let city = document.getElementById('city');
let currentTemp = document.getElementById('todayTemp');
let currentDesc = document.getElementById('todayDesc');
let todayLogo = document.getElementById('todayLogo');
let windDegree = document.getElementById('windDegree');
let windKph = document.getElementById('windKph');
let windDir = document.getElementById('windDir');
let today = document.getElementById('today');
let todayDate = document.getElementById('todayDate');
let tomorrowDay = document.getElementById('tomorrow');
let dayAfter = document.getElementById('dayAfter');

let tomMaxTemp = document.getElementById('tomMaxTemp');
let tomMinTemp = document.getElementById('tomMinTemp');
let tomDesc = document.getElementById('tomDesc');
let tomLogo = document.getElementById('tomLogo');

let dayAfterMaxTemp = document.getElementById('dayAfterMaxTemp');
let dayAfterMinTemp = document.getElementById('dayAfterMinTemp');
let dayAfterDesc    = document.getElementById('dayAfterDesc');
let dayAfterLogo    = document.getElementById('dayAfterLogo');

let myList = document.getElementById('mylist');
let findBtn = document.getElementById('findBtn');
let searchInp = document.getElementById('searchInp');

async function getWeather(country)
{
   
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=bf0a11977fef441a95f125735220406&q=${country}&days=3`);
    let data = await response.json() ;

    return data ;
}

function displayResult(res){

    city.innerHTML = res.location.name; // city Name

    //current weather display
    currentTemp.innerHTML = res.current.temp_c + "&#8451;" ;
    currentDesc.innerHTML = res.current.condition.text ;
    todayLogo.src ="http:"+ res.current.condition.icon;
    windDegree.innerHTML = res.current.wind_degree + '%';
    windKph.innerHTML = res.current.wind_kph + 'km/h' ;
    windDir.innerHTML = res.current.wind_dir ;
    
    //tomorrow weather display
    tomMaxTemp.innerHTML = res.forecast.forecastday[1].day.maxtemp_c + "&#8451;" ;
    tomMinTemp.innerHTML = res.forecast.forecastday[1].day.mintemp_c + "&#8451;" ;
    tomDesc.innerHTML    = res.forecast.forecastday[1].day.condition.text ;
    tomLogo.src = "http:" + res.forecast.forecastday[1].day.condition.icon ;

    // day after weather display 
    dayAfterMaxTemp.innerHTML = res.forecast.forecastday[2].day.maxtemp_c + "&#8451;" ;
    dayAfterMinTemp.innerHTML = res.forecast.forecastday[2].day.mintemp_c + "&#8451;" ;
    dayAfterDesc.innerHTML    = res.forecast.forecastday[2].day.condition.text ;
    dayAfterLogo.src = "http:" + res.forecast.forecastday[2].day.condition.icon ;
}

function displayDay(){
    const d = new Date();
    let day = d.getDay();
    let month = d.getMonth()+1 ;

    today.innerHTML = writeDay(day);

    todayDate.innerHTML = d.getDate() + writeMonth(month);

    tomorrowDay.innerHTML = writeDay(day+1);

    dayAfter.innerHTML = writeDay(day+2);

}


function loadSearchOptions (){
    
    let country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    let content =`` ;

    for (let i = 0; i < country_list.length; i++)
    {
        content += `
        <option value="${country_list[i]}">
        `;
    }

    myList.innerHTML = content ;

}



( async function () {
    
    displayDay();
    let res = await getWeather(`Egypt`);
    displayResult(res);

    loadSearchOptions();
    
}) ();

findBtn.addEventListener('click' , async function(){
    let res = await getWeather(searchInp.value);
    displayResult(res);
});

searchInp.addEventListener('input', async function(){
    let res = await getWeather(searchInp.value);
    displayResult(res);
});

function writeDay(day)
{
    switch(day)
    {
        case 0 :
            return  "Sunday";
            break;
        case 1 :
            return  "Monday";
            break;
        case 2 :
            return  "Tuesday";
            break;
        case 3 :
            return  "Wednesday";
            break;
        case 4 :
            return  "Thursday";
            break;
        case 5 :
            return  "Friday";
            break;
        default :
            return  "Saturday";
            break;
    }
}


function writeMonth(month)
{
    switch(month)
    {
        case 1 : 
            return 'Jan';
            break;

        case 2 : 
            return 'Feb';
            break;


        case 3 : 
            return 'Mar';
            break;


        case 4 : 
            return 'Apr';
            break;


        case 5 : 
            return 'May';
            break;


        case 6 : 
            return 'Jun';
            break;


        case 7 : 
            return 'Jul';
            break;

        case 8 : 
            return 'Aug';
            break;

        case 9 : 
            return 'Sep';
            break;


        case 10 : 
            return 'Oct';
            break;


        case 11 : 
            return 'Nov';
            break;

        case 12 :
            return 'Dec'
            break;
        
        default : 
            return 'Month!';
            break;
    }
}