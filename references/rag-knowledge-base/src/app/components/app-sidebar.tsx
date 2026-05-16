'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Book,
  Cpu,
  ChevronsLeft,
  ChevronsRight,
  BrainCircuit,
  ToyBrick,
  SquarePi,
  Scale,
  GraduationCap,
  Code2,
  Rss,
  Zap,
  Wand2,
  PartyPopper,
  MemoryStick,
  Network,
  Database,
  Eye,
  MessageCircleCode,
  ShieldHalf,
  Lightbulb,
  Library,
  Telescope,
  MessageSquareQuote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
  { id: 'hero', title: '介绍', icon: <BrainCircuit /> },
  { id: 'chapter-1', title: '第一章：计算基础', icon: <ToyBrick /> },
  { id: 'chapter-2', title: '第二章：数学理论', icon: <SquarePi /> },
  { id: 'chapter-3', title: '第三章：统计与推断', icon: <Scale /> },
  { id: 'chapter-4', title: '第四章：机器学习', icon: <GraduationCap /> },
  { id: 'chapter-5', title: '第五章：软件工程', icon: <Code2 /> },
  { id: 'chapter-6', title: '第六章：大型语言模型', icon: <Rss /> },
  { id: 'chapter-7', title: '第七章：AI前沿', icon: <Zap /> },
  { id: 'chapter-8', title: '第八章：从沙子到思想', icon: <Cpu /> },
  { id: 'chapter-9', title: '第九章：操作系统与网络', icon: <Network /> },
  { id: 'chapter-10', title: '第十章：数据库系统', icon: <Database /> },
  { id: 'chapter-11', title: '第十一章：计算机视觉', icon: <Eye /> },
  { id: 'chapter-12', title: '第十二章：自然语言处理', icon: <MessageCircleCode /> },
  { id: 'chapter-13', title: '第十三章：AI伦理与安全', icon: <ShieldHalf /> },
  { id: 'chapter-14', title: '第十四章：AI产品与商业', icon: <Lightbulb /> },
  { id: 'chapter-15', title: '第十五章：学习策略与资源', icon: <Library /> },
  { id: 'chapter-16', title: '第十六章：未来展望', icon: <Telescope /> },
  { id: 'chapter-17', title: '第十七章：思想实验', icon: <MessageSquareQuote /> },
  { id: 'interactive-zone', title: 'AI 互动区', icon: <Wand2 /> },
  { id: 'conclusion', title: '结论', icon: <PartyPopper /> },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Cpu className="h-6 w-6 text-primary animate-pulse" />
          <span className="font-bold font-headline text-lg group-data-[collapsible=icon]:hidden">
            电脑的奥秘
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sections.map((section) => (
            <SidebarMenuItem key={section.id}>
              <SidebarMenuButton
                asChild
                variant="ghost"
                className="justify-start"
                tooltip={{ children: section.title }}
              >
                <a href={`#${section.id}`}>
                  {section.icon}
                  <span>{section.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <div className="p-2 border-t group-data-[collapsible=icon]:hidden">
        <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => setOpen(false)}>
           <ChevronsLeft />
           收起侧边栏
        </Button>
      </div>
    </Sidebar>
  );
}

export function AppSidebarTrigger() {
    const { open, setOpen } = useSidebar();
    return (
        <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} className="h-9 w-9">
            {open ? <ChevronsLeft /> : <ChevronsRight />}
        </Button>
    )
}
