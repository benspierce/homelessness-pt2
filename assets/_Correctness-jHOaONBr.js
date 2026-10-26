import{a as s,j as e}from"./index-CPwrHj6o.js";import{u as n}from"./useGradingState-Dg9QAFs4.js";function m(r){const{correct:o,submitCount:t}=n(r,r.graderId),a={[s.correct]:"✅",[s.partiallyCorrect]:"🟡",[s.incorrect]:"❌",[s.incomplete]:"⚠️",[s.invalid]:"⚠️",[s.submitted]:"⏳",[s.unsubmitted]:"❔"},c=t>0?t%2===0?"lo-correctness-flash-a":"lo-correctness-flash-b":"";return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes lo-correctness-pulse-a {
          0% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes lo-correctness-pulse-b {
          0% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        .lo-correctness-flash-a {
          animation: lo-correctness-pulse-a 0.2s ease-out;
        }
        .lo-correctness-flash-b {
          animation: lo-correctness-pulse-b 0.2s ease-out;
        }
      `}),e.jsx("span",{className:c,style:{display:"inline-block"},children:a[o]||a[s.unsubmitted]})]})}export{m as default};
