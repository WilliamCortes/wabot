import type { ContentBlock } from '@/content/blog/types';

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function PostBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={i} className="text-lg text-ink-soft leading-relaxed">
                {block.text}
              </p>
            );
          case 'h2':
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="text-3xl font-display font-semibold text-ink pt-6"
              >
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} id={slugify(block.text)} className="text-xl font-display font-semibold text-ink pt-2">
                {block.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={i} className="space-y-2 list-none">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-lg text-ink-soft leading-relaxed">
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-whatsapp-deep flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4 text-lg text-ink-soft leading-relaxed">
                    <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bubble-corner bg-night text-white text-sm font-semibold">
                      {j + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            );
          case 'quote':
            return (
              <blockquote key={i} className="border-l-4 border-whatsapp pl-6 py-1 bubble-corner-alt bg-paper-deep p-6">
                <p className="text-xl font-display italic text-ink">&ldquo;{block.text}&rdquo;</p>
                {block.cite && <cite className="block mt-2 text-sm text-ink-soft not-italic">— {block.cite}</cite>}
              </blockquote>
            );
          case 'callout':
            return (
              <div key={i} className="bg-bubble p-6 bubble-corner text-ink">
                <p className="leading-relaxed">{block.text}</p>
              </div>
            );
          case 'table':
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b-2 border-ink/20">
                      {block.headers.map((h, j) => (
                        <th key={j} className="py-3 pr-4 font-display font-semibold text-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-b border-line">
                        {row.map((cell, k) => (
                          <td key={k} className="py-3 pr-4 text-ink-soft">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'faq':
            return (
              <div key={i} className="space-y-4 pt-2">
                {block.items.map((item, j) => (
                  <div key={j} className="bubble-corner-alt border border-line p-6">
                    <p className="font-display font-semibold text-ink mb-2">{item.q}</p>
                    <p className="text-ink-soft leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
