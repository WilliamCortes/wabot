import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CoverArt } from '@/components/blog/CoverArt';
import { AuthorByline } from '@/components/blog/AuthorByline';
import { PostBody } from '@/components/blog/PostBody';
import { PostCard } from '@/components/blog/PostCard';
import { posts } from '@/content/blog/posts';
import { CLUSTER_LABELS } from '@/content/blog/types';

const siteUrl = 'https://www.wabot365.com';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      url: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const faqBlock = post.body.find((b) => b.type === 'faq');
  const related = posts.filter((p) => p.cluster === post.cluster && p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Organization', name: 'Wabot365', url: siteUrl },
    publisher: {
      '@type': 'Organization',
      name: 'Wabot365',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/wabot-avatar.png` },
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  const faqJsonLd =
    faqBlock && faqBlock.type === 'faq'
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqBlock.items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }
      : null;

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <Header />
      <main className="pt-36 pb-24 bg-paper">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-whatsapp-deep font-medium text-sm mb-6 inline-block">
            ← Volver al blog
          </Link>

          <span className="text-whatsapp-deep font-semibold tracking-wide uppercase text-sm mb-3 block">
            {CLUSTER_LABELS[post.cluster]}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-6 leading-tight">
            {post.title}
          </h1>

          <AuthorByline publishedAt={post.publishedAt} readingTime={post.readingTime} />

          <div className="aspect-[16/9] my-10 bubble-corner overflow-hidden">
            <CoverArt variant={post.coverVariant} eyebrow={post.coverEyebrow} />
          </div>

          <PostBody blocks={post.body} />

          {post.sources.length > 0 && (
            <div className="mt-12 pt-8 border-t border-line">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-soft mb-4">Fuentes</h2>
              <ul className="space-y-2">
                {post.sources.map((source) => (
                  <li key={source.url} className="text-sm">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-whatsapp-deep hover:underline"
                    >
                      {source.title}
                    </a>
                    <span className="text-ink-soft"> — {source.publisher}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 bg-night text-white p-8 bubble-corner text-center">
            <h2 className="text-2xl font-display font-semibold mb-3">¿Listo para automatizar tu WhatsApp?</h2>
            <p className="text-white/70 mb-6">Hablemos por WhatsApp y te mostramos cómo funcionaría en tu negocio.</p>
            <a
              href="https://wa.me/573103298346?text=Hola%2C%20le%C3%AD%20el%20blog%20de%20Wabot365%20y%20quiero%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-whatsapp hover:bg-whatsapp-deep text-white font-semibold py-3 px-8 bubble-corner-alt transition-colors"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </article>

        {related.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="text-2xl font-display font-semibold text-ink mb-6">Sigue leyendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
