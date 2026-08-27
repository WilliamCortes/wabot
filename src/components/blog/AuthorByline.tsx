import Image from 'next/image';

export function AuthorByline({ publishedAt, readingTime }: { publishedAt: string; readingTime: string }) {
  const date = new Date(publishedAt).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/wabot-avatar.png"
        alt="Wabot365"
        width={40}
        height={40}
        className="bubble-corner"
      />
      <div className="text-sm">
        <p className="font-semibold text-ink">Wabot365</p>
        <p className="text-ink-soft">
          {date} · {readingTime} de lectura
        </p>
      </div>
    </div>
  );
}
