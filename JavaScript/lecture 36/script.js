const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", async () => {

    const url = "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=YOUR_ACCESS_TOKEN";

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        result.textContent = JSON.stringify(data, null, 2);

    } catch (error) {

        console.log("Error:", error);

    }
});