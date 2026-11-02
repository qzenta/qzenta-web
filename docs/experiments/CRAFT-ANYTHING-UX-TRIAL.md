# PRJ-QZ-CRAFT-EXP-001: Craft Anything UX Experimental Trial

Project: Qzenta Website UX Reconstruction
Repository: qzenta/qzenta-web
Experimental branch: experiment/craft-anything-ux
Baseline branch: website/2026-10-transformation
Baseline commit: 305d54cd17f214269fd9ef179e72ca9095ccf1ec
Existing PR: https://github.com/qzenta/qzenta-web/pull/12
Status: EXPERIMENT APPROVED. PREPARATION AND CONTROLLED UX TRIAL ONLY

## 1. Background

Qzenta previously undertook website reconstruction work using local AI agents, including Ollama and coding-agent interfaces.

A successful reconstruction of www.lavishhaus.co.za provided an earlier reference point. The Qzenta website reconstruction was subsequently undertaken and partially completed.

The current Qzenta website transformation is recorded in:

- Repository: qzenta/qzenta-web
- Branch: website/2026-10-transformation
- PR #12: https://github.com/qzenta/qzenta-web/pull/12
- Latest known HEAD: 305d54cd17f214269fd9ef179e72ca9095ccf1ec

PR #12 contains substantial website work, including content restructuring, UX changes, commercial positioning, statutory disclosures and product-development disclosures.

The purpose of this experiment is to evaluate Craft Anything as an additional investigation, orchestration, reconstruction and UX refinement tool.

We are not starting the website again. We are continuing from the existing implementation.

## 2. Experimental objective

Determine whether Craft Anything, working with Claude Code, can improve the existing Qzenta website UX more effectively than the previous local-agent workflow.

The experiment must assess:

1. Its ability to understand an existing website.
2. Its ability to identify UX and responsive-layout deficiencies.
3. Its ability to improve an existing implementation without unnecessary reconstruction.
4. The quality of its Build, Check and Refine cycle.
5. Its development-time and model-token efficiency.
6. The reliability of its project boundaries, approvals and activity records.

The experiment must produce evidence, not merely a visually attractive demonstration.

## 3. Governance and boundaries

The existing PR #12 must remain untouched.

Create the experimental branch from the verified baseline commit 305d54cd17f214269fd9ef179e72ca9095ccf1ec. Branch: experiment/craft-anything-ux

Before creating the branch, verify that the baseline commit and branch still correspond to the expected repository state. If they have changed, report the discrepancy rather than silently choosing a different base.

All experimental modifications must remain on the experimental branch.

Prohibited actions:

- No production deployment.
- No Vercel production changes.
- No DNS changes.
- No production ERPNext access.
- No accounting transactions or financial database access.
- No payroll access.
- No live customer data.
- No banking integrations.
- No production credentials or secrets supplied to Craft Anything.
- No merging PR #12 or changing its status.
- No replacing the existing website architecture without explicit approval.

Use synthetic data wherever data is required.

The initial Craft Anything evaluation must use Clean Room mode. Deep mode is not authorised for the initial experiment.

## 4. Existing Qzenta owner decisions are authoritative

Read and preserve the existing project governance documents, especially docs/decisions.md, docs/claims-register.md, docs/messaging.md and CLAUDE.md.

The following decisions must remain intact:

1. Statutory identity and Information Officer details must remain accurate.
2. Canonical commercial pricing must not be changed without owner approval.
3. Unsupported statistics, delivery promises, testimonials and client claims must not be reintroduced.
4. Qzenta Accounting and Qzenta Payroll must remain clearly disclosed as products in development or private alpha.
5. TiqBooks must not be represented as an operating commercial business.
6. Group entities must be represented accurately.

Craft Anything must not independently invent business claims, capabilities, testimonials, prices or customer evidence.

## 5. Phase A: Read-only reconstruction inventory

Before installing or authorising Craft Anything to modify anything, conduct a concise read-only assessment of the existing project.

A. Repository state: current branches and HEAD commits; working-tree status; PR #12 status; relevant recent commits; existing build and lint status, where safely verifiable.

B. UX inventory: existing routes and pages; shared components and navigation; responsive layouts; existing animations and interactions; forms and user journeys; existing design system and styling conventions.

C. Reconstruction progress: completed work; partially completed work; known visual inconsistencies; missing interactions; responsive-layout defects; outstanding issues and technical debt.

D. Existing evidence: screenshots; reference images; preview URLs; design notes; previous reconstruction reports; relevant agent instructions. Do not assume that missing evidence does not exist. Search the repository first.

E. Baseline measurements: record the existing website's appearance and behaviour at desktop 1440px, tablet 768px and mobile 390px. Use the same pages and conditions for subsequent comparison.

## 6. Phase B: Craft Anything preparation

Evaluate the official repository: https://github.com/storytold/craft-anything

The current public release identified during research is v0.1.0. It remains an early-alpha product.

Before installation, verify: operating-system compatibility; hardware requirements; installation and update method; Claude Code integration; Clean Room restrictions; project-folder boundaries; approval mechanisms; logging and recovery; model usage and cost implications.

Historical local-agent environment to verify: Windows 11; Dell laptop; Intel i7-1165G7; 16 GB RAM; Intel Iris Xe graphics; Ollama 0.33.3; Qwen 2.5 7B. Do not assume these versions or configurations remain current.

Claude Code should remain the implementation agent for the comparison. Craft Anything is being evaluated as an additional orchestration and investigation layer.

Do not assume Craft Anything reduces Claude usage. Record actual consumption.

## 7. Phase C: Controlled UX experiment

Select ONE contained, representative Qzenta website UX task. The task should be visually meaningful, have clear acceptance criteria, be isolated from financial functionality, be reversible, and have a measurable before-and-after result.

First, establish a baseline using the existing development workflow. Then repeat the same task using Craft Anything with Claude Code.

| Measurement | Existing workflow | Craft Anything workflow |
|---|---|---|
| Completion time | Record | Record |
| Requirements satisfied | Record | Record |
| Visual quality | Measure | Measure |
| Functional tests | Record | Record |
| Defects | Record | Record |
| Human interventions | Record | Record |
| Model tokens | Record | Record |
| Estimated cost | Record | Record |

Do not claim improvements without comparable evidence.

## 8. Initial acceptance criteria

These are proposed experimental targets, not claims of current performance.

| Measure | Target |
|---|---|
| Core UX requirements implemented | At least 90% |
| Visual similarity | At least 90% |
| Critical interaction tests | 100% passing |
| Unauthorized changes outside project | Zero |
| Production changes | Zero |
| Unexplained failures | Zero |
| Model usage and cost | Fully recorded |

Visual similarity alone is insufficient. Functional correctness and responsive behaviour must also be tested.

## 9. Roles

- Owner: final authority for scope, commercial decisions and consequential actions.
- ChatGPT: independent reviewer, experimental design and evidence assessment.
- Claude Chat: planning and technical interpretation.
- Claude Code: implementation, tests and evidence generation.
- Craft Anything: investigation, orchestration, comparison and refinement.
- GitHub: source control and experiment evidence.

The experiment must remain lightweight. Do not introduce an unnecessarily elaborate governance process.

## 10. Immediate instructions

1. Repository verification: read the current repository state and verify the baseline commit.
2. Create the experimental branch experiment/craft-anything-ux from the verified baseline commit. Do not alter the existing PR branch.
3. Prepare this handoff in GitHub as docs/experiments/CRAFT-ANYTHING-UX-TRIAL.md, the experiment's authoritative charter.
4. Produce the read-only reconstruction inventory as docs/experiments/CRAFT-ANYTHING-BASELINE-INVENTORY.md, including repository state, page inventory, completed work, outstanding UX work, available evidence and recommended pilot task.
5. Stop for review. Do not begin implementation or install Craft Anything automatically. Present the inventory and proposed pilot task for independent review. Once the baseline is accepted, proceed to the controlled installation and experimental trial.

## 11. Final principle

The purpose is to establish whether Craft Anything adds measurable value to the existing Qzenta development workflow.

We are not abandoning Ollama, local agents, Claude Code or the existing website implementation.

We are testing an additional tool against an actual unfinished project.

Preserve what works. Experiment where it adds value. Protect the financial engine.
