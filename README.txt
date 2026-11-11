EPL V11.0 Test 3A — Unscheduled OT Crew Book Release Time Autofill
Based on accepted Test 2D. Upload index.html and service-worker.js to GitHub testing.
When Unscheduled Overtime is checked and the Crew Book release field is empty, the date-aware GO resolver prefills the scheduled release. Existing manual/saved values are not overwritten. Actual release is untouched. Unknown/off jobs remain blank.
Regression: verify normal, overnight, historical GO202, unknown/off, manually populated, saved/edit, comparison/fatigue.
