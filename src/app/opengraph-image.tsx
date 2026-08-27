import { ImageResponse } from 'next/og';

export const alt = 'Wabot365 — Chatbot de WhatsApp para negocios en Colombia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#FAF6EF',
          backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(31,157,90,0.16), transparent 55%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '28px 28px 28px 6px',
              backgroundColor: '#1F9D5A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
            }}
          >
            💬
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: '#1C2A22' }}>Wabot365</div>
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            color: '#1C2A22',
            lineHeight: 1.15,
            maxWidth: 900,
            display: 'flex',
          }}
        >
          El chatbot de WhatsApp que atiende a tus clientes 24/7
        </div>
        <div style={{ fontSize: 28, color: '#55635A', marginTop: 28, display: 'flex' }}>
          Chatbots de WhatsApp para microempresas en Colombia
        </div>
      </div>
    ),
    { ...size }
  );
}
