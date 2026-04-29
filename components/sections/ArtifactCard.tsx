"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, Lightbulb, AlertTriangle, Settings, FileText } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/* ============================================================================
   TYPES
   ============================================================================ */
interface ArtifactCardProps {
  /** Judul artefak */
  title: string;
  /** Label siklus, e.g. "Siklus 1" */
  cycle: string;
  /** Tag teknologi, e.g. ["DHCP Server", "Mikrotik"] */
  techTags: string[];
  /** Tag pedagogi, e.g. ["PBL", "Constructivism"] */
  pedagogyTags: string[];
  /** Tujuan dan konteks materi */
  context: string;
  /** Teori pedagogi yang diadopsi */
  theory: string;
  /** Faktor keberhasilan */
  strengths: string;
  /** Kendala penyusunan/pelaksanaan */
  weaknesses: string;
  /** Perubahan untuk situasi kelas berbeda */
  adjustments: string;
  /** Placeholder link for PDF download */
  downloadLink: string;
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
   ANALYSIS SECTION — Reusable sub-block
   ============================================================================ */
interface AnalysisSectionProps {
  icon: React.ElementType;
  label: string;
  content: string;
}

function AnalysisSection({ icon: Icon, label, content }: AnalysisSectionProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
          <Icon className="size-3.5 text-zinc-500" />
        </div>
        <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500">
          {label}
        </h4>
      </div>
      <p className="pl-9 text-sm leading-relaxed text-zinc-400">{content}</p>
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
  theory,
  strengths,
  weaknesses,
  adjustments,
  downloadLink,
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
          {/* Cycle pill + ordinal */}
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

        {/* ---- Content: 5 Analysis Sections ---- */}
        <CardContent className="space-y-6 pt-6">
          <AnalysisSection
            icon={FileText}
            label="Konteks & Tujuan"
            content={context}
          />

          <AnalysisSection
            icon={BookOpen}
            label="Landasan Teori Pedagogis"
            content={theory}
          />

          <AnalysisSection
            icon={Lightbulb}
            label="Faktor Keberhasilan"
            content={strengths}
          />

          <AnalysisSection
            icon={AlertTriangle}
            label="Kendala & Hambatan"
            content={weaknesses}
          />

          <AnalysisSection
            icon={Settings}
            label="Penyesuaian Kontekstual"
            content={adjustments}
          />
        </CardContent>

        {/* ---- Footer: Download CTA ---- */}
        <CardFooter className="border-zinc-800/40 bg-zinc-900/30">
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="group/dl w-full sm:w-auto"
            >
              <Download className="size-4 transition-transform group-hover/dl:-translate-y-0.5" />
              Unduh Dokumen RPP &amp; Lampiran (PDF)
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
