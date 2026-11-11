EPL V11 Test 2C — Comparison Fatigue
Upload index.html and service-worker.js to GitHub test.
Adds published GO203 Type 1/2 to comparison card header and weekly schedule rows only for active resolved assignments. For relief crews uses the covered job, not relief crew ID. Applies Test 1G relief-day weekly fallback; no badges for blank entries, off days, holiday, or GO202. Respects existing fatigue display toggle. Does not change pay or comparison navigation.
Check: normal Job Comparison and Trim-launched comparison; Job 99 Nov 9 Type 1; Job 113 Nov 9 Type 2 when a schedule exists; historical GO202 no badge; blank days no badge; toggle off/on (re-run comparison); swipe and pay calculations unchanged.
