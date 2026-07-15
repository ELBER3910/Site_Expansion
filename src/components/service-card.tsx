import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 sm:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-bold tracking-tight text-card-foreground">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-5 h-1 w-12 rounded-full bg-accent transition-all group-hover:w-20" />
    </div>
  );
}
