import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PostCard } from '@/components/blog/PostCard';
import { posts } from '@/content/blog/posts';
import { CLUSTER_LABELS, type Cluster } from '@/content/blog/types';

const siteUrl = 'https://www.wabot365.com';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guías, datos y casos de uso sobre chatbots de WhatsApp, automatización de atención al cliente y comercio conversacional para negocios en Colombia.',
  alternates: { canonical: `${siteUrl}/blog` },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  const clusters = Array.from(new Set(posts.map((p) => p.cluster))) as Cluster[];

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: sorted.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteUrl}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <Header />
      <main className="pt-36 pb-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-whatsapp-deep font-semibold tracking-wide uppercase text-sm mb-3 block">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
              Ideas para vender y atender mejor por WhatsApp
            </h1>
            <p className="text-lg text-ink-soft">
              Guías prácticas, datos de la industria y casos reales para negocios que quieren automatizar su WhatsApp sin perder el trato humano.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-16">
            {clusters.map((cluster) => (
              <Link
                key={cluster}
                href={`/blog/categoria/${cluster}`}
                className="text-sm font-medium text-ink-soft border border-line px-4 py-1.5 bubble-corner-alt hover:border-whatsapp-deep hover:text-whatsapp-deep transition-colors"
              >
                {CLUSTER_LABELS[cluster]}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
