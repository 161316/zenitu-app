---
name: Journey & Module Architecture
description: Structure of journeys and modules, unlock logic, and content locations
---

## Rule
14 modules total across 4 journeys. Sequential unlock: each journey unlocks when ALL modules of the previous journey reach 100%.

Journeys: fundamentos (orders 1-8), gestao-estrategica (9-10), lideranca-corporativa (11-12), master-executivo (13-14).

**Why:** User wanted a clear progression from Iniciante → Aprendiz → Explorador → Master.

**How to apply:** Module unlock uses `isModuleUnlocked(order)` which checks previous module (order-1) completion. Journey unlock is computed inline from `getModuleProgress` over all journey modules. Home.tsx shows journey cards; JourneyDetail.tsx shows modules within a journey. New modules: append to MODULES array in `data/modules.ts` with correct `journeyId` and sequential `order`.

Badges in `useProgress.ts` use `module-{idx+1}` pattern by MODULES array index — if new modules are added, badge IDs shift. Consider migrating to `module-{id}` naming if adding more modules.
