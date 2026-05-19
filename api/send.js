import { Resend } from 'resend';

// 初始化 Resend，這裡推薦使用環境變量（Environment Variable）
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 限制只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body; // 接收前端傳來的 Email

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // 調用 Resend 發信
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev>', // 需先在 Resend 綁定網域，測試可用 onboarding@resend.dev
      to: [email],
      subject: '【PropertyViet】您申請的《越南買樓避坑清單 .PDF》已送達！',
      html: `<strong>感謝訂閱！</strong><p>請點擊此處下載您的 PDF 避坑清單。</p>`,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
