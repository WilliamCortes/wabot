import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PostCard } from '@/components/blog/PostCard';
import { posts } from '@/content/blog/posts';
import { CLUSTER_LABELS, type Cluster } from '@/content/blog/types';

const siteUrl = 'https://www.wabot365.com';

const CLUSTER_DESCRIPTIONS: Record<Cluster, string> = {
  guias: 'Guías paso a paso para configurar, mantener y sacarle provecho a un chatbot de WhatsApp: verificación de negocio, plantillas, catálogo y buenas prácticas de la API oficial.',
  datos: 'Datos y estadísticas de fuentes oficiales (Meta, HubSpot, Zendesk, McKinsey, Salesforce) sobre WhatsApp Business, atención al cliente e IA conversacional.',
  'ia-atencion': 'Cómo la inteligencia artificial está cambiando la atención al cliente: chatbots, agentes de IA, cuándo automatizar y cuándo dejarlo en manos humanas.',
  'casos-de-uso': 'Casos de uso reales de chatbots de WhatsApp por tipo de negocio: restaurantes, salud, belleza, inmobiliarias, servicios y comercio local en Colombia.',
  comparativas: 'Comparativas directas para decidir entre canales, modelos y proveedores: WhatsApp vs. otros canales, chatbot propio vs. plantillas, app vs. API.',
  colombia: 'El mercado colombiano de WhatsApp y comercio digital: estadísticas locales, regulación de datos personales y cómo negocios de todo el país están vendiendo por chat.',
};

export function generateStaticParams() {
  const clusters = Array.from(new Set(posts.map((p) => p.cluster)));
  return clusters.map((cluster) => ({ cluster }));
}

export async function generateMetadata({ params }: { params: Promise<{ cluster: string }> }): Promise<Metadata> {
  const { cluster } = await params;
  const label = CLUSTER_LABELS[cluster as Cluster];
  if (!label) return {};

  return {
    title: label,
    description: CLUSTER_DESCRIPTIONS[cluster as Cluster],
    alternates: { canonical: `${siteUrl}/blog/categoria/${cluster}` },
  };
}

export default async function ClusterPage({ params }: { params: Promise<{ cluster: string }> }) {
  const { cluster } = await params;
  const label = CLUSTER_LABELS[cluster as Cluster];
  if (!label) notFound();

  const clusterPosts = posts
    .filter((p) => p.cluster === cluster)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: label, item: `${siteUrl}/blog/categoria/${cluster}` },
    ],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main className="pt-36 pb-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-soft mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-whatsapp-deep transition-colors">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-whatsapp-deep transition-colors">Blog</Link>
          </nav>

          <div className="max-w-2xl mb-16">
            <span className="text-whatsapp-deep font-semibold tracking-wide uppercase text-sm mb-3 block">
              Categoría
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">{label}</h1>
            <p className="text-lg text-ink-soft">{CLUSTER_DESCRIPTIONS[cluster as Cluster]}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusterPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
