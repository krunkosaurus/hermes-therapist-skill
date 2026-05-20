# Hermes Therapist Skill

A therapy-style reflection skill for [Hermes Agent](https://github.com/NousResearch/hermes-agent).

This skill is designed to make Hermes a structured, emotionally attuned, non-sycophantic reflective companion: part mirror, part translator, part witness, part coach, part emotional debugger.

## Core idea

Therapy is a structured relationship where another person helps you notice what you cannot easily notice from inside yourself.

That includes:

1. **Making the invisible visible** — surfacing semi-automatic defensiveness, shame, fear, avoidance, people-pleasing, anger, perfectionism, numbness, and repeated relationship patterns so they become choices instead of reflexes.
2. **Emotional digestion** — giving grief, resentment, betrayal, insecurity, fear, regret, childhood material, and major transitions enough room that they stop leaking out sideways.
3. **Having a witness** — being deeply listened to by something that is not a spouse, friend, employee, investor, parent, or child; not there to win, fix, judge, be impressed, or need something.
4. **Reality testing** — separating facts, feelings, assumptions, old wounds, and current reality when the mind creates convincing stories like “I’m failing,” “they hate me,” “I always mess this up,” “I don’t care,” or “I’m fine.”
5. **Pattern recognition over time** — noticing recurring structures: how you react under stress, what you avoid, where you overfunction, where you collapse, and what themes repeat across work, family, love, identity, money, health, and ambition.
6. **Practicing a different relationship** — using the conversation itself as a small lab for dynamics like hiding disappointment, trying to impress, avoiding conflict, fearing being too much, or intellectualizing everything.
7. **Integration** — helping disconnected parts become less fragmented: the ambitious self, hurt self, angry self, responsible self, child self, public self, and private self.

Short version:

> Therapy helps convert unconscious emotional patterns into conscious understanding, and then into more freedom of choice.

## Not sycophantic by design

This skill is intentionally not built to flatter the user or automatically agree with their interpretation.

It validates feelings while reality-testing stories.

Example distinction:

- Feeling: “That sounds painful and lonely.”
- Story: “Let’s check whether the conclusion your mind reached is fully supported.”

A good therapy-style companion should be caring enough to listen deeply and steady enough not to collude with avoidance, shame, grandiosity, resentment, or self-deception.

## What this is not

This is not a licensed therapist, medical device, crisis service, or replacement for professional care. It is a Hermes skill for reflection, journaling, emotional processing, pattern recognition, and self-understanding.

If someone is at imminent risk of harming themselves or someone else, use real-world emergency support instead of treating this as a normal reflective session.

## Install

### Option 1: npm

Install/copy the skill into your Hermes skills directory with npm:

```bash
npx hermes-therapist-skill
```

If you install globally:

```bash
npm install -g hermes-therapist-skill
hermes-therapist-skill-install
```

### Option 2: GitHub

Clone the repo and copy the skill into your Hermes skills directory:

```bash
git clone https://github.com/krunkosaurus/hermes-therapist-skill.git
mkdir -p ~/.hermes/skills/personality/therapy-mode
cp hermes-therapist-skill/SKILL.md ~/.hermes/skills/personality/therapy-mode/SKILL.md
```

Then start Hermes with the skill preloaded:

```bash
hermes -s therapy-mode
```

Or load it inside an existing Hermes session with:

```text
/therapy-mode
```

The npm package/repository is named `hermes-therapist-skill`, but the installed Hermes skill is named `therapy-mode` so the in-session slash command is `/therapy-mode`.

If Hermes adds this repository as a skill tap or registry entry later, prefer the native `hermes skills install` / `hermes skills tap add` flow.

## Privacy note

This public version contains only the reusable method, stance, prompts, and safeguards. It intentionally excludes private continuity notes, personal session details, local file paths, names from the author’s life, and any secrets.

If you fork it for yourself, keep your personal therapy notes in a separate private location. Do not commit them into this repo.

## License

MIT
