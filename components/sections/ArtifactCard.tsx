"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ArtifactCardProps {
  title: string;
  cycle: string;
  techTags: string[];
  pedagogyTags: string[];
  context: string;
  theory: string;
  strengths: string;
  weaknesses: string;
  adjustments: string;
  downloadLink: string;
  index?: number;
}

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
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="border-zinc-800/50 bg-black/40 backdrop-blur-md rounded-md shadow-2xl overflow-hidden">
        <CardHeader className="space-y-6 pb-8 pt-8 px-6 sm:px-10">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-3">
                {cycle}
              </p>
              <CardTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100 leading-tight">
                {title}
              </CardTitle>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {techTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-md border-zinc-700/60 text-zinc-300 bg-zinc-900/30 px-3 py-1 font-mono text-[10px] sm:text-xs tracking-wide"
                >
                  {tag}
                </Badge>
              ))}
              {pedagogyTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md bg-zinc-800/80 text-zinc-200 hover:bg-zinc-800 px-3 py-1 text-[10px] sm:text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-10 px-6 sm:px-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest border-l-2 border-zinc-700 pl-3">
                Konteks & Tujuan
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                {context}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest border-l-2 border-zinc-700 pl-3">
                Teori Pedagogi
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                {theory}
              </p>
            </div>
          </div>

          <Separator className="bg-zinc-800/50" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50 inline-block" />
                Faktor Keberhasilan
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {strengths}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500/50 inline-block" />
                Kendala
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {weaknesses}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50 inline-block" />
                Penyesuaian
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {adjustments}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-6 pb-6 px-6 sm:px-10 border-t border-zinc-800/50 bg-zinc-950/50 flex flex-col sm:flex-row sm:justify-end">
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto rounded-md border-zinc-700 bg-black text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 px-6 py-5"
            )}
          >
            <Download className="h-4 w-4" />
            Unduh Dokumen RPP & Lampiran (PDF)
          </a>
        </CardFooter>
      </Card>
    </motion.article>
  );
}
