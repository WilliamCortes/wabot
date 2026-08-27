import Link from 'next/link';
import { CoverArt } from './CoverArt';
import { CLUSTER_LABELS, type BlogPost } from '@/content/blog/types';

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <div className="group bg-white border border-line bubble-corner overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <CoverArt variant={post.coverVariant} eyebrow={post.coverEyebrow} />
        </div>
      </Link>
      <div className="p-6">
        <Link
          href={`/blog/categoria/${post.cluster}`}
          className="text-whatsapp-deep font-semibold text-xs uppercase tracking-wide hover:underline"
        >
          {CLUSTER_LABELS[post.cluster]}
        </Link>
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-display font-semibold text-ink mt-2 mb-2 group-hover:text-whatsapp-deep transition-colors">
            {post.title}
          </h3>
          <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">{post.description}</p>
        </Link>
      </div>
    </div>
  );
}
