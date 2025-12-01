import { Cpu, BookOpen } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';

const sections = [
  { id: 'p1-what-is-a-computer', title: '第1站：认识魔法盒' },
  { id: 'p2-binary-code', title: '第2站：0和1的舞蹈' },
  { id: 'p3-interactive-binary', title: '第3站：开关游戏' },
  { id: 'p4-meet-the-cpu', title: '第4站：大脑国王' },
  { id: 'p5-ram-desk', title: '第5站：神奇课桌' },
  { id: 'p6-storage-library', title: '第6站：记忆图书馆' },
  { id: 'p7-gpu-artist', title: '第7站：绘画天才' },
  { id: 'p8-motherboard-city', title: '第8站：主板城市' },
  { id: 'p9-input-post-office', title: '第9站：输入邮局' },
  { id: 'p10-output-stage', title: '第10站：输出大舞台' },
  { id: 'p11-os-conductor', title: '第11站：系统指挥家' },
  { id: 'p12-app-fairground', title: '第12站：应用游乐场' },
  { id: 'p13-internet-galaxy', title: '第13站：网络大宇宙' },
  { id: 'p14-packets-mail', title: '第14站：飞翔的信件' },
  { id: 'p15-cloud-castle', title: '第15站：云端城堡' },
  { id: 'p16-virtualization-magic', title: '第16站：分身魔法' },
  { id: 'p17-programming-chef', title: '第17站：编程小厨师' },
  { id: 'p18-ai-friend', title: '第18站：AI小伙伴' },
  { id: 'p19-summary', title: '第19站：毕业派对' },
  { id: 'translation-tool', title: '第20站：神奇翻译机' }
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Cpu className="h-6 w-6 mr-2 text-primary animate-pulse" />
          <span className="font-bold font-headline">电脑的奥秘</span>
        </div>
        <div className="flex-1" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <BookOpen className="mr-2" />
              故事目录
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto">
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
