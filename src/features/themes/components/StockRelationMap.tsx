"use client";

import { Network } from "lucide-react";

interface Node {
  id: string;
  label: string;
  cx: number;
  cy: number;
  r: number;
  sentiment: number;
  isCenter?: boolean;
}

interface Edge {
  from: string;
  to: string;
  weight: number; // 1=weak 2=medium 3=strong
}

const nodes: Node[] = [
  {
    id: "theme",
    label: "HBM/AI반도체",
    cx: 285,
    cy: 162,
    r: 34,
    sentiment: 92,
    isCenter: true,
  },
  { id: "skh", label: "SK하이닉스", cx: 130, cy: 72, r: 26, sentiment: 91 },
  { id: "sec", label: "삼성전자", cx: 440, cy: 72, r: 26, sentiment: 78 },
  { id: "hms", label: "한미반도체", cx: 78, cy: 195, r: 22, sentiment: 82 },
  { id: "lino", label: "리노공업", cx: 285, cy: 36, r: 20, sentiment: 70 },
  { id: "tsmc", label: "TSMC ADR", cx: 494, cy: 195, r: 22, sentiment: 75 },
  { id: "dbh", label: "DB하이텍", cx: 155, cy: 288, r: 18, sentiment: 44 },
  { id: "wonik", label: "원익IPS", cx: 415, cy: 288, r: 18, sentiment: 38 },
];

const edges: Edge[] = [
  { from: "theme", to: "skh", weight: 3 },
  { from: "theme", to: "sec", weight: 3 },
  { from: "theme", to: "hms", weight: 2 },
  { from: "theme", to: "lino", weight: 2 },
  { from: "theme", to: "tsmc", weight: 2 },
  { from: "theme", to: "dbh", weight: 1 },
  { from: "theme", to: "wonik", weight: 1 },
  { from: "skh", to: "hms", weight: 2 },
  { from: "skh", to: "lino", weight: 1 },
  { from: "sec", to: "tsmc", weight: 2 },
];

function sentimentFill(score: number, isCenter?: boolean) {
  if (isCenter) return "#0891b2";
  if (score >= 80) return "#22c55e";
  if (score >= 65) return "#84cc16";
  if (score >= 50) return "#eab308";
  return "#f97316";
}

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function StockRelationMap() {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Network className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-bold text-slate-900">종목 연관 관계 맵</h2>
      </div>
      <p className="text-xs text-slate-500 mb-4">
        테마 내 종목 간 <strong>공동 언급 빈도</strong>를 네트워크로
        시각화합니다. 선이 굵을수록 함께 언급되는 빈도가 높습니다.
      </p>

      <div style={{ overflowX: "auto" }}>
        <svg
          width="572"
          height="326"
          viewBox="0 0 572 326"
          style={{ maxWidth: "100%", display: "block" }}
        >
          {/* 엣지 */}
          {edges.map((edge, i) => {
            const a = getNode(edge.from);
            const b = getNode(edge.to);
            return (
              <line
                key={i}
                x1={a.cx}
                y1={a.cy}
                x2={b.cx}
                y2={b.cy}
                stroke={
                  edge.weight === 3
                    ? "#0891b2"
                    : edge.weight === 2
                      ? "#94a3b8"
                      : "#e2e8f0"
                }
                strokeWidth={
                  edge.weight === 3 ? 2.5 : edge.weight === 2 ? 1.5 : 1
                }
                strokeDasharray={edge.weight === 1 ? "4,3" : "none"}
                opacity={edge.weight === 1 ? 0.5 : 1}
              />
            );
          })}

          {/* 노드 */}
          {nodes.map((node) => (
            <g key={node.id}>
              {/* 그림자 효과 */}
              <circle
                cx={node.cx + 1}
                cy={node.cy + 1}
                r={node.r}
                fill="rgba(0,0,0,0.08)"
              />
              {/* 메인 원 */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={sentimentFill(node.sentiment, node.isCenter)}
                opacity={0.9}
              />
              {/* 테두리 */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill="none"
                stroke="white"
                strokeWidth={2}
              />

              {/* 레이블 */}
              {node.isCenter ? (
                <>
                  <text
                    x={node.cx}
                    y={node.cy - 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="white"
                  >
                    {node.label.length > 6
                      ? node.label.slice(0, 6)
                      : node.label}
                  </text>
                  <text
                    x={node.cx}
                    y={node.cy + 10}
                    textAnchor="middle"
                    fontSize="9"
                    fill="rgba(255,255,255,0.85)"
                  >
                    {node.label.length > 6 ? node.label.slice(6) : ""}
                  </text>
                </>
              ) : (
                <text
                  x={node.cx}
                  y={node.cy + 3}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="600"
                  fill="white"
                >
                  {node.label.length > 5 ? node.label.slice(0, 5) : node.label}
                </text>
              )}

              {/* 감성 점수 뱃지 */}
              <text
                x={node.cx + node.r * 0.6}
                y={node.cy - node.r * 0.6}
                textAnchor="middle"
                fontSize="8"
                fontWeight="700"
                fill={node.isCenter ? "#0891b2" : sentimentFill(node.sentiment)}
              >
                {node.sentiment}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* 범례 */}
      <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-slate-100">
        {[
          { color: "#22c55e", label: "긍정 80%↑" },
          { color: "#84cc16", label: "긍정 65~80%" },
          { color: "#eab308", label: "긍정 50~65%" },
          { color: "#f97316", label: "긍정 50%↓" },
        ].map((l) => (
          <div
            key={l.label}
            className="flex items-center gap-1.5 text-[10px] text-slate-500"
          >
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: l.color }}
            />
            {l.label}
          </div>
        ))}
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 ml-auto">
          <div className="w-6 h-0.5 bg-cyan-500 flex-shrink-0" />
          굵을수록 공동 언급 많음
        </div>
      </div>
    </div>
  );
}
