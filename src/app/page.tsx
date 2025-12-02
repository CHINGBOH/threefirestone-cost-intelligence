'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator, Globe, Info, RefreshCcw } from 'lucide-react';

export default function ABTestCalculator() {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  
  // State for inputs
  const [visitorsA, setVisitorsA] = useState<string>('1000');
  const [conversionsA, setConversionsA] = useState<string>('100');
  const [visitorsB, setVisitorsB] = useState<string>('1000');
  const [conversionsB, setConversionsB] = useState<string>('120');
  
  // State for results
  const [result, setResult] = useState<any>(null);

  const translations = {
    en: {
      title: "A/B Test Calculator",
      description: "Calculate statistical significance for your A/B tests",
      groupA: "Control Group (A)",
      groupB: "Variant Group (B)",
      visitors: "Visitors",
      conversions: "Conversions",
      calculate: "Calculate Significance",
      reset: "Reset",
      results: "Results",
      conversionRate: "Conversion Rate",
      uplift: "Uplift",
      significance: "Statistical Significance",
      confidence: "Confidence Level",
      significant: "Statistically Significant!",
      notSignificant: "Not Significant Yet",
      explanation: "Explanation",
      explanationText: "The p-value represents the probability that the difference observed is due to random chance. A lower p-value means higher confidence.",
      zScore: "Z-Score",
      pValue: "P-Value"
    },
    zh: {
      title: "A/B 测试计算器",
      description: "计算 A/B 测试的统计显著性",
      groupA: "对照组 (A)",
      groupB: "实验组 (B)",
      visitors: "访问量",
      conversions: "转化量",
      calculate: "计算显著性",
      reset: "重置",
      results: "测试结果",
      conversionRate: "转化率",
      uplift: "提升率",
      significance: "统计显著性",
      confidence: "置信度",
      significant: "结果显著！",
      notSignificant: "结果尚未显著",
      explanation: "解释",
      explanationText: "P值代表观察到的差异是由随机因素引起的概率。P值越低，置信度越高。",
      zScore: "Z分数",
      pValue: "P值"
    }
  };

  const t = translations[language];

  const calculateResults = () => {
    const n1 = parseInt(visitorsA);
    const x1 = parseInt(conversionsA);
    const n2 = parseInt(visitorsB);
    const x2 = parseInt(conversionsB);

    if (!n1 || !n2) return;

    const p1 = x1 / n1;
    const p2 = x2 / n2;
    const pPool = (x1 + x2) / (n1 + n2);
    const se = Math.sqrt(pPool * (1 - pPool) * (1/n1 + 1/n2));
    const z = (p2 - p1) / se;
    
    // Two-tailed p-value
    // Approximation of standard normal cumulative distribution function
    const pValue = 2 * (1 - cdf(Math.abs(z)));
    const confidence = (1 - pValue) * 100;
    
    const uplift = ((p2 - p1) / p1) * 100;

    setResult({
      rateA: (p1 * 100).toFixed(2) + '%',
      rateB: (p2 * 100).toFixed(2) + '%',
      uplift: uplift.toFixed(2) + '%',
      zScore: z.toFixed(4),
      pValue: pValue.toFixed(4),
      confidence: confidence.toFixed(2) + '%',
      isSignificant: confidence >= 95
    });
  };

  // Standard Normal CDF approximation
  function cdf(x: number) {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (x > 0) return 1 - prob;
    return prob;
  }

  const reset = () => {
    setVisitorsA('1000');
    setConversionsA('100');
    setVisitorsB('1000');
    setConversionsB('120');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            {language === 'en' ? '中文' : 'English'}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>{t.title}</CardTitle>
                <CardDescription>{t.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Group A */}
              <div className="space-y-4 p-4 bg-slate-50 rounded-xl border">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                  {t.groupA}
                </h3>
                <div className="space-y-2">
                  <Label>{t.visitors}</Label>
                  <Input 
                    type="number" 
                    value={visitorsA} 
                    onChange={(e) => setVisitorsA(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t.conversions}</Label>
                  <Input 
                    type="number" 
                    value={conversionsA} 
                    onChange={(e) => setConversionsA(e.target.value)}
                  />
                </div>
              </div>

              {/* Group B */}
              <div className="space-y-4 p-4 bg-slate-50 rounded-xl border">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                  {t.groupB}
                </h3>
                <div className="space-y-2">
                  <Label>{t.visitors}</Label>
                  <Input 
                    type="number" 
                    value={visitorsB} 
                    onChange={(e) => setVisitorsB(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t.conversions}</Label>
                  <Input 
                    type="number" 
                    value={conversionsB} 
                    onChange={(e) => setConversionsB(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" onClick={calculateResults} className="w-full md:w-auto min-w-[200px]">
                {t.calculate}
              </Button>
              <Button size="lg" variant="outline" onClick={reset}>
                <RefreshCcw className="h-4 w-4 mr-2" />
                {t.reset}
              </Button>
            </div>

            {result && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-blue-50 border-blue-100">
                    <CardContent className="pt-6 text-center">
                      <div className="text-sm text-muted-foreground mb-1">A {t.conversionRate}</div>
                      <div className="text-2xl font-bold text-blue-700">{result.rateA}</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-100">
                    <CardContent className="pt-6 text-center">
                      <div className="text-sm text-muted-foreground mb-1">B {t.conversionRate}</div>
                      <div className="text-2xl font-bold text-green-700">{result.rateB}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-sm text-muted-foreground mb-1">{t.uplift}</div>
                      <div className={`text-2xl font-bold ${parseFloat(result.uplift) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {parseFloat(result.uplift) > 0 ? '+' : ''}{result.uplift}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-sm text-muted-foreground mb-1">{t.confidence}</div>
                      <div className="text-2xl font-bold">{result.confidence}</div>
                    </CardContent>
                  </Card>
                </div>

                <Alert variant={result.isSignificant ? "default" : "destructive"} className={result.isSignificant ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}>
                  <Info className="h-4 w-4" />
                  <AlertTitle>{result.isSignificant ? t.significant : t.notSignificant}</AlertTitle>
                  <AlertDescription>
                    {t.explanationText}
                    <div className="mt-2 text-xs opacity-80 font-mono">
                      {t.zScore}: {result.zScore} | {t.pValue}: {result.pValue}
                    </div>
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
