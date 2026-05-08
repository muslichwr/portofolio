"use client";

import { motion } from "framer-motion";
import {
  Download,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Settings,
  FileText,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/* ============================================================================
   TYPES
   ============================================================================ */
interface TheoryItem {
  /** Theory name + citation, e.g. "Zone of Proximal Development — Vygotsky (1978)" */
  name: string;
  /** Applied explanation of the theory */
  description: string;
}

interface DownloadItem {
  /** Document label, e.g. "RPP / Modul Ajar Bab 1–2" */
  label: string;
  /** Download href — use "#" as placeholder */
  href: string;
}

interface ArtifactCardProps {
  /** Judul artefak */
  title: string;
  /** Label siklus, e.g. "Siklus 1 · Minggu 5–8" */
  cycle: string;
  /** Tag teknologi */
  techTags: string[];
  /** Tag pedagogi */
  pedagogyTags: string[];
  /** Tujuan dan konteks materi */
  context: string;
  /** Optional intro paragraph before theory list */
  theoryIntro?: string;
  /** Numbered theory items */
  theories: TheoryItem[];
  /** Faktor keberhasilan — rendered as bullet list */
  strengths: string[];
  /** Kendala — rendered as bullet list */
  weaknesses: string[];
  /** Perubahan kontekstual — rendered as bullet list */
  adjustments: string[];
  /** Download documents for this siklus */
  downloads: DownloadItem[];
  /** Animation stagger index */
  index?: number;
}

/* ============================================================================
   ANIMATION VARIANTS
   ============================================================================ */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

/* ============================================================================
   SUB-COMPONENTS
   ============================================================================ */

/** Section header with icon + label */
function SectionHeader({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
        <Icon className="size-3.5 text-zinc-500" />
      </div>
      <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </h4>
    </div>
  );
}

/** Single paragraph section (used for Konteks & Tujuan) */
function ParagraphSection({
  icon,
  label,
  content,
}: {
  icon: React.ElementType;
  label: string;
  content: string;
}) {
  return (
    <div className="space-y-2">
      <SectionHeader icon={icon} label={label} />
      <p className="pl-9 text-sm leading-relaxed text-zinc-400">{content}</p>
    </div>
  );
}

/** Theory section with optional intro + numbered items */
function TheorySection({
  intro,
  theories,
}: {
  intro?: string;
  theories: TheoryItem[];
}) {
  return (
    <div className="space-y-2">
      <SectionHeader icon={BookOpen} label="Landasan Teori Pedagogis" />
      <div className="space-y-4 pl-9">
        {intro && (
          <p className="text-sm leading-relaxed text-zinc-400">{intro}</p>
        )}
        <ol className="list-none space-y-4">
          {theories.map((theory, i) => (
            <li key={theory.name} className="space-y-1">
              <p className="text-sm font-medium text-zinc-300">
                {i + 1}. {theory.name}
              </p>
              <p className="pl-4 text-sm leading-relaxed text-zinc-400">
                {theory.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/** Bullet list section (used for strengths, weaknesses, adjustments) */
function ListSection({
  icon,
  label,
  items,
}: {
  icon: React.ElementType;
  label: string;
  items: string[];
}) {
  return (
    <div className="space-y-2">
      <SectionHeader icon={icon} label={label} />
      <ul className="space-y-2 pl-9">
        {items.map((item) => (
          <li
            key={item.slice(0, 48)}
            className="flex gap-2 text-sm leading-relaxed text-zinc-400"
          >
            <span
              className="mt-1.5 size-1 shrink-0 rounded-full bg-zinc-600"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Download document grid */
function DownloadGrid({ downloads }: { downloads: DownloadItem[] }) {
  return (
    <div className="space-y-3">
      <SectionHeader icon={Download} label="Dokumen & Lampiran" />
      <div className="grid grid-cols-1 gap-3 pl-9 md:grid-cols-2">
        {downloads.map((doc) => (
          <div
            key={doc.label}
            className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-3"
          >
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 shrink-0 text-zinc-400" />
              <div>
                <p className="text-sm font-medium text-white">{doc.label}</p>
                <p className="text-xs text-zinc-500">PDF Document</p>
              </div>
            </div>
            <a
              href={doc.href}
              download
              className="flex shrink-0 items-center gap-1.5 rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              <Download className="h-3 w-3" />
              Unduh
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================================
   ARTIFACT CARD COMPONENT
   ============================================================================ */
export function ArtifactCard({
  title,
  cycle,
  techTags,
  pedagogyTags,
  context,
  theoryIntro,
  theories,
  strengths,
  weaknesses,
  adjustments,
  downloads,
  index = 0,
}: ArtifactCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
    >
      <Card className="w-full border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700/60">
        {/* ---- Header: Cycle Label, Title, Tags ---- */}
        <CardHeader className="space-y-4">
          {/* Cycle pill + line */}
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-zinc-700 font-mono text-zinc-400"
            >
              {cycle}
            </Badge>
            <span className="h-px flex-1 bg-zinc-800/50" aria-hidden="true" />
          </div>

          {/* Title */}
          <CardTitle className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {title}
          </CardTitle>

          {/* Tag rows */}
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border border-zinc-800 bg-zinc-900 font-mono text-[11px] text-zinc-400"
              >
                {tag}
              </Badge>
            ))}
            {pedagogyTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-emerald-900/40 bg-emerald-950/20 font-mono text-[11px] text-emerald-400/80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <Separator className="mx-4 w-auto bg-zinc-800/40" />

        {/* ---- Content: Analysis Sections + Downloads ---- */}
        <CardContent className="space-y-6 pt-6">
          <ParagraphSection
            icon={FileText}
            label="Konteks & Tujuan"
            content={context}
          />

          <TheorySection intro={theoryIntro} theories={theories} />

          <ListSection
            icon={Lightbulb}
            label="Faktor Keberhasilan"
            items={strengths}
          />

          <ListSection
            icon={AlertTriangle}
            label="Kendala & Hambatan"
            items={weaknesses}
          />

          <ListSection
            icon={Settings}
            label="Penyesuaian Kontekstual"
            items={adjustments}
          />

          <Separator className="bg-zinc-800/40" />

          <DownloadGrid downloads={downloads} />
        </CardContent>
      </Card>
    </motion.div>
  );
}
