

if (localStorage.getItem("login") !== "true") {
    alert("Validation required");
    window.location.href = "/index.html";
}

async function getIPDetails() {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch IP details:", error);
        return {};
    }
}

async function sendLoginEmail() {
    try {
        const ipData = await getIPDetails();

        // Prepare form data for Web3Forms
        const formData = new FormData();
        formData.append("access_key", WEB3_ACCESS_KEY); 
        formData.append("sender_email", "nripan2005s@gmail.com");
        formData.append("subject", "New Login Detected");
        formData.append("message", `
User login detected with the following details:

IP Address: ${ipData.ip || "N/A"}
City: ${ipData.city || "N/A"}
Region: ${ipData.region || "N/A"}
Country: ${ipData.country_name || "N/A"}
Postal Code: ${ipData.postal || "N/A"}
Latitude: ${ipData.latitude || "N/A"}
Longitude: ${ipData.longitude || "N/A"}
ISP: ${ipData.org || "N/A"}
Timezone: ${ipData.timezone || "N/A"}
        `);
        

        // You can also send extra fields if needed
        formData.append("ip_addr", ipData.ip || "");
        formData.append("city", ipData.city || "");
        formData.append("region", ipData.region || "");
        formData.append("country", ipData.country_name || "");
        formData.append("postal", ipData.postal || "");
        formData.append("latitude", ipData.latitude || "");
        formData.append("longitude", ipData.longitude || "");
        formData.append("isp", ipData.org || "");
        formData.append("time", ipData.timezone || "");

        const response = await fetch("https://api.web3form.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            console.log("Login email sent successfully!");
        } else {
            console.error("Failed to send email:", result);
        }

    } catch (error) {
        console.error("Error sending login email:", error);
    }
}