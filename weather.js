$(document).ready(()=>{
    const sendRequest = (city) => {
        const url = `https://api.weatherapi.com/v1/current.json?key=99ea3a5bfdb44ce1b9e155002221507&q=${city}&aqi=no`
        
        $.get(url, function(response){
            $("#icon-image").attr("src",response.current.condition.icon)
            $("#temperature").text(response.current.temp_c + "°c")
            $("#time1").text("Time: "+response.location.localtime)
            $("#place").text("Name: "+response.location.name)
            $("#region").text("Region: "+ response.location.region)
            $("#country").text("Country: " +response.location.country)
        })
    }

    $("#form1").submit(function(e){
        e.preventDefault();
        const city = $("#city-input").val();
        sendRequest(city);
    })
})
