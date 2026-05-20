export default async function handler(req, res) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // 這裡直接使用你的 Resend API Key 和原生 fetch 發信
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer re_amyZsQYG_CEHehrZseU91KtB3nCbwVvoe'
      },
      body: JSON.stringify({
        from: 'PropertyViet <info@book.propertyviet.com>', // 沒改 DNS 必須用這個
        to: [email], // 沒改 DNS，這裡必須填你註冊 Resend 的 Email 才能成功測試
        subject: '【PropertyViet】您申請的《越南買樓避坑清單 .PDF》已送達！',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2>PropertyViet - 香港人越南買樓血淚史</h2>
              <p>你好，感謝你索取避坑指南。</p>
              <br>
              <p>👉 請點擊下方連結直接獲取 PDF 檔案：</p>
              <p><a href="這裡放你的PDF真實下載連結" target="_blank" style="color: #A31D1D; font-weight: bold; text-decoration: underline;">【點我下載】越南買樓避坑清單.PDF</a></p>
              <br>
              <p>最新爛尾盤名單與香港業主維權進度，我們會第一時間更新在 <a href="https://www.facebook.com/people/%E9%A6%99%E6%B8%AF%E4%BA%BA%E8%B6%8A%E5%8D%97%E8%B2%B7%E6%A8%93%E8%A1%80%E6%B7%9A%E5%8F%B2/61589795924568/" target="_blank">Facebook 專頁</a>，敬請密切留意。</p>
          </div>
        `
      })
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Email sent successfully' });
    } else {
      const errorData = await response.json();
      return res.status(400).json({ error: errorData });
    }
  } catch (err) {
    return res.status(500).json({ error: { message: err.message } });
  }
}
