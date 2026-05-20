export default async function handler(req, res) {
  // 限制只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // 調用 Resend API 發信
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer re_amyZsQYG_CEHehrZseU91KtB3nCbwVvoe'
      },
      body: JSON.stringify({
        // 🚨 這裡已經為你精準對齊成功驗證的 ebook 子網域！
        from: 'PropertyViet <info@ebook.propertyviet.com>', 
        to: [email], 
        subject: '【PropertyViet】您申請的《越南買樓避坑清單 .PDF》已送達！',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="width=device-width" name="viewport" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="telephone=no,address=no,email=no,date=no,url=no" name="format-detection" />
  </head>
  <body style="background-color:#ffffff; margin:0; padding:0;">
    <table border="0" width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center">
      <tbody>
        <tr>
          <td style="background-color:#ffffff">
            <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;align:left;width:100%;color:#000000;background-color:#ffffff;padding:0;border-radius:0px;">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <div style="margin:0 auto;padding:30px 20px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;max-width:600px;border:1px solid #e0e0e0;border-radius:8px;background-color:#ffffff;color:#333333;line-height:1.6">
                      <div style="margin:0;padding:0;background-color:#A31D1D;height:6px;width:100%;margin-bottom:30px;border-radius:4px 4px 0 0"></div>
                      <h2 style="margin:0;padding:0;color:#111111;font-size:22px;font-weight:bold;margin-top:0;margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid #eee">
                        【下載連結】您申請的《越南買樓避坑清單 .PDF》已送達！
                      </h2>
                      <p style="margin:0;padding:0;font-size:16px;margin-bottom:15px">你好：</p>
                      <p style="margin:0;padding:0;font-size:15px;margin-bottom:15px">
                        感謝你索取這份指南。跨國置業往往充滿未知的法規與資金盲區，希望這份由多位香港業主血淚教訓凝聚而成的清單，能幫你省下寶貴的時間與跨國學費。
                      </p>
                      <div style="margin:20px 0;padding:15px;background-color:#f9f9f9;border-left:4px solid #FFD700;border-radius:0 4px 4px 0;font-style:italic;font-size:14.5px;color:#555555">
                        <p style="margin:0;padding:0">
                          <em>「地產經紀往往只會放大投資回報，卻很少提及粉紅簿（產權證）的審批進度，或是轉售時外匯管制的資金大坑。進場前，請務必逐一對照清單核對。」</em>
                        </p>
                      </div>
                      <p style="margin:0;padding:0;font-size:15px;margin-bottom:30px">
                        您可以點擊下方按鈕，直接下載或在瀏覽器中查閱 PDF 文件：
                      </p>
                      <div style="margin:35px 0;padding:0;text-align:center">
                        <p style="margin:0;padding:0">
                          <a href="這裡放你的PDF真實下載連結" rel="noopener noreferrer nofollow" style="color:#000000;text-decoration:none;background-color:#FFD700;padding:14px 35px;font-weight:bold;font-size:16px;border-radius:4px;box-shadow:0 4px 10px rgba(0,0,0,0.1);display:inline-block" target="_blank">⬇️ 立即下載《越南買樓避坑清單.PDF》</a>
                        </p>
                      </div>
                      <hr style="width:100%;border:0;border-top:1px solid #eeeeee;margin:30px 0" />
                      <div style="margin:0;padding:15px;background-color:#f5f7fa;border-radius:6px">
                        <p style="margin:0;padding:0;font-size:14px;color:#444444;line-height:1.5">
                          📢 <strong>實時資訊更新：</strong><br />想掌握更多第一手未經篩選的真實個案、最新爛尾樓盤追蹤與維權進度？歡迎加入我們的社交平台隨時交流：
                          <a href="https://www.facebook.com/people/%E9%A6%99%E6%B8%AF%E4%BA%BA%E8%B6%8A%E5%8D%97%E8%B2%B7%E6%A8%93%E8%A1%80%E6%B7%9A%E5%8F%B2/61589795924568/" rel="noopener noreferrer nofollow" style="color:#1877F2;text-decoration:none;font-weight:bold" target="_blank">👉 點擊追蹤「香港人越南買樓血淚史」Facebook 專頁</a>
                        </p>
                      </div>
                      <p style="margin:0;padding:0;font-size:14px;color:#777777;margin-top:35px">
                        祝 投資順利，遠離爛尾！<br /><strong>PropertyViet 團隊 敬上</strong>
                      </p>
                      <p style="margin:0;padding:0;font-size:11px;color:#aaaaaa;text-align:center;margin-top:40px;line-height:1.4">
                        如果您沒有申請過此文件，請忽略本郵件。本郵件內容僅供參考，不構成任何投資建議。
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`
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
