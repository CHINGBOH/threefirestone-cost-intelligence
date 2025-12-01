import { Cpu, BookOpen } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';

const sections = [
  { id: 'chapter-1', title: '第一章：计算基础与抽象层级' },
  { id: 'chapter-2', title: '第二章：数学理论基础' },
  { id: 'chapter-3', title: '第三章：统计与推断基础' },
  { id: 'chapter-4', title: '第四章：机器学习与深度学习基础' },
  // Future chapters will be added here
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Cpu className="h-6 w-6 mr-2 text-primary animate-pulse" />
          <span className="font-bold font-headline">电脑的奥秘</span>
        </div>
        <nav className="flex-1" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <BookOpen className="mr-2" />
              报告章节
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 max-h-96 overflow-y-auto">
            <DropdownMenuLabel>从底层原理到大型语言模型</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sections.map(section => (
              <DropdownMenuItem key={section.id} asChild>
                <a href={`#${section.id}`}>{section.title}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
