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
        // 經精準對齊成功驗證的 ebook 子網域
        from: 'PropertyViet <info@ebook.propertyviet.com>', 
        to: [email], 
        subject: '【PropertyViet】您申請的《越南買樓避坑白皮書 .PDF》已送達！',
        html: `<!DOCTYPE html>
<html lang="zh-HK">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>【PropertyViet】您索取的《越南買樓避坑白皮書》已送達</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #121212;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans HK", sans-serif;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table {
            border-spacing: 0;
            border-collapse: collapse;
            width: 100%;
        }
        td {
            padding: 0;
        }
        img {
            border: 0;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #121212;
            padding-bottom: 40px;
        }
        .main-table {
            max-width: 600px;
            margin: 0 auto;
            background-color: #1E1E1E;
            border-radius: 8px;
            border: 1px solid #333333;
            overflow: hidden;
        }
        .ticker {
            background: #FFD700;
            height: 6px;
            font-size: 1px;
            line-height: 1px;
        }
        .header {
            padding: 35px 25px 25px 25px;
            text-align: center;
            border-bottom: 1px solid #2d2d2d;
        }
        .logo {
            font-size: 28px;
            font-weight: 900;
            color: #ffffff;
            margin: 0 0 5px 0;
            letter-spacing: 1px;
        }
        .logo span {
            color: #FFD700;
            background-color: #000000;
            padding: 2px 8px;
        }
        .subtitle {
            font-size: 14px;
            color: #A31D1D;
            font-weight: bold;
            letter-spacing: 2px;
            margin: 0;
            text-transform: uppercase;
        }
        .content {
            padding: 35px 30px;
        }
        .greeting {
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            margin: 0 0 20px 0;
        }
        .paragraph {
            font-size: 15px;
            line-height: 1.7;
            color: #E0E0E0;
            margin: 0 0 20px 0;
        }
        .callout-box {
            background-color: #121212;
            border-left: 4px solid #A31D1D;
            padding: 20px;
            margin: 25px 0;
            border-radius: 0 4px 4px 0;
        }
        .callout-title {
            font-size: 15px;
            font-weight: bold;
            color: #FFD700;
            margin: 0 0 8px 0;
        }
        .callout-text {
            font-size: 14px;
            line-height: 1.6;
            color: #A0A0A0;
            margin: 0;
        }
        .btn-container {
            text-align: center;
            margin: 30px 0;
        }
        .btn-download {
            display: inline-block;
            background-color: #FFD700;
            color: #000000 !important;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            padding: 15px 40px;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
        }
        .bridge-box {
            background: linear-gradient(135deg, #252525 0%, #151515 100%);
            border: 1px dashed #444444;
            padding: 25px;
            margin-top: 35px;
            border-radius: 6px;
            text-align: center;
        }
        .bridge-title {
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
            margin: 0 0 10px 0;
        }
        .bridge-text {
            font-size: 14px;
            line-height: 1.6;
            color: #A0A0A0;
            margin: 0 0 20px 0;
        }
        .btn-bridge {
            display: inline-block;
            background-color: transparent;
            border: 2px solid #FFD700;
            color: #FFD700 !important;
            text-decoration: none;
            font-size: 14px;
            font-weight: bold;
            padding: 10px 25px;
            border-radius: 4px;
        }
        .footer {
            padding: 25px 30px;
            background-color: #0B0B0B;
            text-align: center;
            border-top: 1px solid #222222;
        }
        .footer p {
            font-size: 12px;
            color: #555555;
            margin: 0 0 5px 0;
        }
        .footer a {
            color: #777777;
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <center class="wrapper">
        <table class="main-table" width="100%">
            <tr>
                <td class="ticker"></td>
            </tr>
            
            <tr>
                <td class="header">
                    <h1 class="logo">Property<span>Viet</span></h1>
                    <p class="subtitle">香港人越南買樓血淚史</p>
                </td>
            </tr>
            
            <tr>
                <td class="content">
                    <p class="greeting">您好，</p>
                    <p class="paragraph">
                        感謝您索取<strong>《越南買樓避坑白皮書 .PDF》</strong>。我們已經為您準備好了下載連結。這份白皮書凝聚了多位香港業主在當地的真實維權教訓，希望能幫助您在進場前看清所有隱形陷阱。
                    </p>
                    
                    <table width="100%">
                        <tr>
                            <td class="btn-container">
                                <a href="https://drive.google.com/file/d/1eazIg_x37Y3do4oyQ9unHQhjPqXzIuzl/view?usp=drive_link" target="_blank" class="btn-download">
                                    📥 立即點擊下載白皮書 .PDF
                                </a>
                            </td>
                        </tr>
                    </table>

                    <div class="callout-box">
                        <p class="callout-title">💡 重點防守提示：</p>
                        <p class="callout-text">
                            請務必仔細閱讀第三章<strong>「外匯管制與資金回流大坑」</strong>。許多投資者順利買樓放租，直到想將資產變現匯回香港時，才發現手續與法規不合規，面臨嚴重的法律和資金卡死風險。
                        </p>
                    </div>

                    <div class="bridge-box">
                        <p class="bridge-title">⚖️ 了解防守後，如何尋找「安全進場方案」？</p>
                        <p class="bridge-text">
                            光是避坑遠遠不夠。如果您目前仍有規劃佈局越南房產，需要的是經過本地律師與合規架構審查的真實項目。
                        </p>
                        <a href="https://propertyviet.com/?utm_source=resend_email&utm_medium=email_bridge&utm_campaign=welcome_guide" target="_blank" class="btn-bridge">
                            進入 PropertyViet 官方主站 ➔
                        </a>
                    </div>
                </td>
            </tr>
            
            <tr>
                <td class="footer">
                    <p>© 2026 PropertyViet. All Rights Reserved.</p>
                    <p style="margin-top: 10px; line-height: 1.5;">
                        想掌握更多實時資訊？歡迎加入：<br>
                        <a href="https://www.facebook.com/people/%E9%A6%99%E6%B8%AF%E4%BA%BA%E8%B6%8A%E5%8D%97%E8%B2%B7%E6%A8%93%E8%A1%80%E6%B7%9A%E5%8F%B2/61589795924568/" target="_blank" style="color: #1877F2; text-decoration: none; font-weight: bold;">👉 追蹤「香港人越南買樓血淚史」Facebook 專頁</a>
                    </p>
                </td>
            </tr>
        </table>
    </center>

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
