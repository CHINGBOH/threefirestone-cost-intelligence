'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
} from '@/components/ui/sidebar';
import { BookOpen, Cpu, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
  { id: 'hero', title: '介绍' },
  { id: 'chapter-1', title: '第一章：计算基础' },
  { id: 'chapter-2', title: '第二章：数学理论' },
  { id: 'chapter-3', title: '第三章：统计与推断' },
  { id: 'chapter-4', title: '第四章：机器学习' },
  { id: 'chapter-5', title: '第五章：软件工程' },
  { id: 'chapter-6', title: '第六章：大型语言模型' },
  { id: 'interactive-zone', title: 'AI 互动区' },
  { id: 'conclusion', title: '结论' },
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
                  <BookOpen />
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
        <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <ChevronsLeft /> : <ChevronsRight />}
        </Button>
    )
}
