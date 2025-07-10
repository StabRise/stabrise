import axios from 'axios'

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json()

  try {
    // 1. Build the message
    const send_message = `
📬 Stabrise: New Contact Submission

👤 Name: ${name}  
📧 Email: ${email}  
🏢 Company: ${company}  
_______________________

${message}
`

    // 2. Telegram config
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Telegram credentials are missing in environment variables.')
    }

    // 3. Send to Telegram
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: send_message,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Telegram Error:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send message to Telegram.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
