import { ImageResponse } from 'next/og';
import { posts } from '@/content/blog/posts';
import { CLUSTER_LABELS } from '@/content/blog/types';

export const alt = 'Wabot365 — artículo del blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

const PALETTES = [
  { bg: '#F1E8D6', a: '#1F9D5A' },
  { bg: '#D9F2C4', a: '#146B3D' },
  { bg: '#10241A', a: '#4CC080' },
  { bg: '#FAF6EF', a: '#E2622F' },
];

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const title = post?.title ?? 'Wabot365';
  const cluster = post ? CLUSTER_LABELS[post.cluster] : 'Blog';
  const palette = PALETTES[(post?.coverVariant ?? 1) % PALETTES.length];
  const isDark = palette.bg === '#10241A';

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
          backgroundColor: palette.bg,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 2,
            color: palette.a,
            marginBottom: 24,
            display: 'flex',
          }}
        >
          {cluster}
        </div>
        <div
          style={{
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.2,
            color: isDark ? '#FAF6EF' : '#1C2A22',
            maxWidth: 980,
            display: 'flex',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 48,
            fontSize: 26,
            color: isDark ? '#FAF6EF' : '#1C2A22',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '20px 20px 20px 4px',
              backgroundColor: palette.a,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
            }}
          >
            💬
          </div>
          Wabot365
        </div>
      </div>
    ),
    { ...size }
  );
}
