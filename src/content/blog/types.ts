export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'faq'; items: { q: string; a: string }[] };

export interface Source {
  title: string;
  url: string;
  publisher: string;
}

export type Cluster =
  | 'guias'
  | 'datos'
  | 'ia-atencion'
  | 'casos-de-uso'
  | 'comparativas'
  | 'colombia';

export const CLUSTER_LABELS: Record<Cluster, string> = {
  guias: 'Guías prácticas',
  datos: 'Datos y estadísticas',
  'ia-atencion': 'IA y atención al cliente',
  'casos-de-uso': 'Casos de uso',
  comparativas: 'Comparativas',
  colombia: 'Colombia',
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  cluster: Cluster;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  coverVariant: 1 | 2 | 3 | 4 | 5 | 6;
  coverEyebrow: string;
  readingTime: string;
  body: ContentBlock[];
  sources: Source[];
}
