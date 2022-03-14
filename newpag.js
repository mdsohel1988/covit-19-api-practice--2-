var cuntryName = location.hash.substring(1);
console.log(cuntryName)

fetch('https://coronavirus-19-api.herokuapp.com/countries/'+cuntryName)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        var deatils = `

            <div class="newitem"> 
                <img src="flag/Flag_of_${data.country}.png"> <br>
                <span class="deatils">country : ${data.country} </span> <br>
                <span class="deatils">active : ${data.active} </span> <br>
                <span class="deatils">cases : ${data.cases} </span> <br>
                <span class="deatils">cases Per One Million : ${data.casesPerOneMillion} </span> <br>
                <span class="deatils">critical : ${data.critical} </span> <br>
                <span class="deatils">deaths : ${data.deaths} </span> <br>
                <span class="deatils">deaths Per One Million : ${data.deathsPerOneMillion} </span> <br>
                <span class="deatils">recovered : ${data.recovered} </span> <br>
                <span class="deatils">tests Per One Million : ${data.testsPerOneMillion} </span> <br>
                <span class="deatils">todayCases : ${data.todayCases} </span> <br>
                <span class="deatils">todayDeaths : ${data.todayDeaths} </span> <br>
                <span class="deatils">totalTests : ${data.totalTests} </span> <br>      
            </div>
           
        `

        document.getElementById('newpag').innerHTML = deatils;
        
    })
    