import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {Button} from "@/components/button";

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
    deployed: {
        live: boolean,
        site: string
    }
}

export function ProjectCard({ title, description, tags, image, link, deployed}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:border-primary/50">
      <div className="relative overflow-hidden h-48">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center
">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Project <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
          {deployed.live ?
              <Button variant="outline" size="sm" className="border-green-500 text-green-500">
                  <Link
                      href={deployed.site}
                      target="_blank"
                      className="inline-flex items-center text-sm text-green-500 hover:text-white font-bold"
                  >
                      Live <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              : null}
      </CardFooter>
    </Card>
  )
}

