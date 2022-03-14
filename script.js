
 fetch('https://coronavirus-19-api.herokuapp.com/all')
 .then(res => res.json())
 .then(data =>{
     var div = document.getElementById('worldnews');
     div.innerHTML ="cases: "+ data.cases +"<br>"+
                    "deaths: " + data.deaths +"<br>"+
                    "recovered: " + data.recovered


     
     console.log(data);
 });


//---------------//

fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(array => {
        var div = document.getElementById('covid');
        
        var list = array.map((data) => {
            return `
                <a class="itemAtag" href="newpag.html#${data.country}"> 
                
                    <div class="item"> 
                        <div>
                            <img src="flag/Flag_of_${data.country}.png">
                        </div>
                        <div>
                            <span> country : </span>
                            <span> ${data.country} </span>
                        </div>
                    
                        <div>
                            <span> active : </span>
                            <span> ${data.active} </span>
                        </div>

                        <div >
                            <span> deaths : </span>
                            <span> ${data.deaths} </span>
                        </div>
                
                    </div>
                
                
                </a>
                
            `;
               
        }).join('');
        
        div.innerHTML = list

        // console.log(list);
    });






// function sohel(callback){
//    var date = new Date();
//    callback (date);
// }


// sohel(show)


// function show(e){
//     console.log(e);

// }





//------//


// function sum(fst, snd, callback){

//     callback(fst+snd)

// }

// sum(12, 3, function(sum){
//     console.log(sum);
// });

//------//