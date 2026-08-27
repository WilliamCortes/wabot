import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-40 pb-24 bg-paper">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-whatsapp-deep font-semibold tracking-wide uppercase text-sm mb-3 block">
            Error 404
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
            Esta página no existe
          </h1>
          <p className="text-lg text-ink-soft mb-10">
            El enlace que seguiste puede estar roto o la página se movió. Prueba en el inicio o en el blog.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-whatsapp hover:bg-whatsapp-deep text-white font-semibold py-3 px-6 bubble-corner transition-colors"
            >
              Ir al inicio
            </Link>
            <Link
              href="/blog"
              className="border border-ink/20 text-ink hover:border-whatsapp-deep hover:text-whatsapp-deep font-semibold py-3 px-6 bubble-corner-alt transition-colors"
            >
              Ver el blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
