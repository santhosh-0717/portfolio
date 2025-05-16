interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{name}</div>
}

