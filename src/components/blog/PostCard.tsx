import Link from 'next/link';
import { CoverArt } from './CoverArt';
import { CLUSTER_LABELS, type BlogPost } from '@/content/blog/types';

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block bg-white border border-line bubble-corner overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden">
        <CoverArt variant={post.coverVariant} eyebrow={post.coverEyebrow} />
      </div>
      <div className="p-6">
        <span className="text-whatsapp-deep font-semibold text-xs uppercase tracking-wide">
          {CLUSTER_LABELS[post.cluster]}
        </span>
        <h3 className="text-xl font-display font-semibold text-ink mt-2 mb-2 group-hover:text-whatsapp-deep transition-colors">
          {post.title}
        </h3>
        <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">{post.description}</p>
      </div>
    </Link>
  );
}
