# Three Fire Stone Cost Intelligence

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Go](https://img.shields.io/badge/Go-1.21+-00ADD8?logo=go&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-0.2+-green)
![Milvus](https://img.shields.io/badge/Milvus-2.4+-00A1EA?logo=milvus&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

**工程造价智能知识系统与多拓扑检索架构**  
向量后端可热切换（Milvus ↔ pgvector）· LangGraph 编排 · 混合召回 + Rerank · PaddleOCR

[架构设计](#核心架构) • [向量拓扑](#向量存储拓扑) • [检索流程](#检索流程) • [Agent 编排](#agent-编排) • [快速开始](#快速开始) • [配置说明](#配置说明)

</div>

---

## 项目简介

Three Fire Stone Cost Intelligence 是一套面向**建设工程造价标准、企业知识库和专业资料问答**的检索增强生成系统。系统目标是从工程计价标准、清单规则、费率表、附录和项目文档中准确检索依据，并通过 LLM 输出带来源、步骤和计算过程的结构化回答。

项目的核心设计是**可插拔的检索与向量存储拓扑**：运行时通过配置在 Milvus、pgvector 等后端之间切换，上层 RAG pipeline 不需要感知底层存储差异。它适合用于专业标准查询、造价规则核验、项目资料问答和企业知识资产整理。

---

## 核心能力

| 能力 | 说明 |
| --- | --- |
| 多拓扑向量检索 | 支持 Milvus 与 pgvector 路由切换，便于从轻量部署演进到高性能部署 |
| 混合召回 | 组合向量检索、全文检索、结构化表查询和 RRF 融合 |
| Rerank 精排 | 使用重排模型或降级评分策略提升结果排序质量 |
| LangGraph 编排 | 将检索、重排、生成、工具调用组织为可维护的 Agent / RAG pipeline |
| OCR 文档处理 | 支持 PDF 与扫描件文本提取，为知识库入库提供前置能力 |
| 前后端一体化 | 包含 React 前端、TypeScript 服务、Python 检索服务和 Go 网关层 |

---

## 核心架构

```text
┌──────────────────────────────────────────────────────────────────┐
│                         Web Frontend                             │
│                 React + TypeScript + dashboard UI                │
└────────────────────────┬─────────────────────────────────────────┘
                         │ HTTP / WebSocket
┌────────────────────────▼─────────────────────────────────────────┐
│                         Gateway Layer                            │
│              Go gateway + websocket session channel              │
└────────────┬──────────────────────────┬───────────────────────────┘
             │                          │
┌────────────▼──────────┐  ┌────────────▼──────────────────────────┐
│   Orchestration API   │  │        Retrieval Service              │
│   TypeScript service  │  │   Python + LangGraph + FastAPI        │
│   task/session/LLM    │  │   hybrid search + rerank + tools      │
└───────────────────────┘  └────────────┬──────────────────────────┘
                                        │
             ┌──────────────────────────▼──────────────────────┐
             │                 Storage Layer                    │
             │  PostgreSQL + pgvector  ←→  Milvus              │
             │  Redis cache             Qdrant session context │
             └─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         OCR Pipeline                            │
│          PaddleOCR / document parser / batch import tools        │
└─────────────────────────────────────────────────────────────────┘
```

---

## 向量存储拓扑

系统通过统一接口接入向量存储。上层检索逻辑只依赖抽象端口，底层可按环境切换：

```yaml
vector_store:
  type: milvus          # milvus | pgvector | qdrant | chroma | memory
  uri: http://localhost:19530
  collection_name: document_chunks
  vector_size: 1024
  metric_type: COSINE
```

```text
hybrid_search(query)
    ├── vector search       -> Milvus / pgvector
    ├── full-text search    -> PostgreSQL text index
    ├── structured lookup   -> standards / fee tables / appendices
    └── fusion + rerank     -> final evidence set
```

这种设计让系统可以先用 pgvector 做低依赖部署，再在数据规模和并发提升后切换到 Milvus。

---

## 检索流程

```text
retrieve ──► rerank ──► generate ──► answer
```

1. **Retrieve**：从向量、全文和结构化数据中召回候选依据。
2. **Rerank**：对候选片段重新排序，保留与问题最相关的证据。
3. **Generate**：调用兼容 OpenAI 接口的 LLM，输出带引用和计算步骤的回答。
4. **Validate**：对公式、费率、数值结果和来源进行二次校验。

---

## Agent 编排

系统内置 LangGraph 风格的工具调用链，主要工具包括：

| 工具 | 作用 |
| --- | --- |
| `vector_search` | 语义向量检索，支持后端切换 |
| `hybrid_search` | 向量、全文与结构化查询融合 |
| `query_fee_rates` | 查询结构化费率或规则表 |
| `query_appendix_standards` | 查询附录与标准条目 |
| `sandbox_execute` | 执行计算校验逻辑并返回结果 |

---

## 快速开始

```bash
npm install
docker compose up -d
npm run build --workspace @rag/web
```

常用入口：

| 入口 | 说明 |
| --- | --- |
| `src/frontend/web` | 前端应用 |
| `src/backend/server` | TypeScript 编排服务 |
| `src/backend/retrieval-service` | Python 检索与 Agent 服务 |
| `src/backend/go-services` | Go 网关与 WebSocket |
| `config/` | 运行配置 |
| `docs/` | 架构与维护文档 |

---

## 配置说明

核心配置建议通过环境变量或 `config/config.yaml` 管理：

```env
DATABASE_URL=postgresql://user:password@localhost:5432/app
REDIS_URL=redis://localhost:6379
VECTOR_STORE_TYPE=pgvector
MILVUS_URI=http://localhost:19530
LLM_BASE_URL=https://api.example.com/v1
LLM_MODEL=deepseek-chat
```

敏感信息不要提交到 Git。生产部署应使用服务器环境变量、密钥管理或 CI/CD secret 注入。

---

## 工程价值

- 将专业标准文件转化为可检索、可追溯、可计算的知识系统。
- 支持从单机轻量部署到分布式向量后端的架构演进。
- 前端、服务端、检索服务、网关、OCR 与运维配置形成完整工程闭环。
- 适合作为企业知识库、工程造价助手、专业资料问答和 Agent 工作流的基础架构。

---

## 在线入口

- 项目首页：<https://threefirestone.com/>
- 系统入口：<https://threefirestone.com/rag>
- GitHub 主页：<https://github.com/CHINGBOH>
