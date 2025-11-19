

if(localStorage.getItem("login")!== "true"){
    window.location.href = "/index.html";
    alert("validation required");
}

async function getIPDetails(){
    const response = await
    fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data;
}

async function sendLoginEmail(){
    const ipData = await getIPDetails();
    emailjs.send("service_Laus","template_js_laus",{
        ip_addr : ipData.ip,
        city : ipData.city,
        region : ipData.region,
        country : ipData.country_name,
        postal : ipData.postal,
        latitude : ipData.latitude,
        longitude : ipData.longitude,
        isp : ipData.org,
        time : ipData.timezone
    })
    .then(() =>{
        console.log("logged user");
    })
    .catch((error)=>{
        console.error("send failed due to :",error)
    });
}