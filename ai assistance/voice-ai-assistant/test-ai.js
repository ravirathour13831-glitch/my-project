require("dotenv").config();

const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 30000
});

async function testAI() {
    try {
        const response = await client.responses.create({
            model: "gpt-5-mini",
            input: "Namaste, mujhe Hindi mein hello bolo."
        });

        console.log("🤖 AI:", response.output_text);

    } catch (error) {
        console.log("❌ Error:", error);
    }
}

testAI();