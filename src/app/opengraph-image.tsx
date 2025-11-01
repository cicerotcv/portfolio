import { ImageResponse } from 'next/og';

export const alt = 'Cicero Valentim - Desenvolvedor Full Stack';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const reactLogoUrl = 'https://cdn.simpleicons.org/react/b92526';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          background: 'linear-gradient(0deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          padding: '60px 80px',
          alignItems: 'center',
        }}
      >
        <img
          src={reactLogoUrl}
          alt="React"
          width="200"
          height="200"
          style={{
            marginRight: '60px',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '20px',
            maxWidth: '800px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#b92526',
              margin: 0,
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            Cicero Valentim
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#94a3b8',
              margin: 0,
              lineHeight: '1.5',
              marginTop: '8px',
            }}
          >
            Desenvolvedor Full Stack especializado em React, React Native,
            Next.js e Node.js
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
