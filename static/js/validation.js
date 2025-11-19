
if (localStorage.getItem("login") !== "true") {
    window.location.href = "/index.html";
    alert("validation required");
}

async function getIPDetails() {
    const response = await
        fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data;
}

async function sendLoginEmail() {
    const ipData = await getIPDetails();
    const formData = new FormData();
    formData.append("86486bd5-b324-462a-9158-6cd23962c8a5", WEB3_ACCESS_KEY);
    formData.append("ip_addr", ipData.ip);
    formData.append("city", ipData.city);
    formData.append("region", ipData.region);
    formData.append("country", ipData.country_name);
    formData.append("postal", ipData.postal);
    formData.append("latitude", ipData.latitude);
    formData.append("longitude", ipData.longitude);
    formData.append("isp", ipData.org);
    formData.append("time", ipData.timezone);

    const response = await
        fetch("https://api.web3form.com/submit", {
            method : "POST",
            body : formData
        });
    const result = await response.json();
    if (result.success) {
        console.log("logind successful");
    }
    else {
        console.error("failed due to :", result);
    }
}