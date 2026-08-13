# Content writing guide

This standard applies to every current and future page in Android Master to Architect.

## Purpose

Write for a software engineer who wants to understand Android deeply and answer interview questions confidently. Do not write like an API reference, academic paper, or marketing page.

## Required teaching order

1. **Plain-English answer** — explain the idea without unexplained jargon.
2. **Small example** — show the minimum code needed to demonstrate it.
3. **Expected result** — state the output, compiler error, or behavior.
4. **Why it happens** — walk through the execution or compiler reasoning.
5. **Common mistake** — show the tempting but incorrect approach.
6. **Correct approach** — fix it and explain why the fix works.
7. **Android scenario** — connect it to a realistic Android feature.
8. **Deeper detail** — add JVM, runtime, performance, or architecture depth.
9. **Interview-ready answer** — give a concise answer that can be spoken aloud.
10. **Follow-up questions and exercises** — test understanding, not memorization.

## Language rules

- Prefer short sentences and familiar words.
- Define a technical term immediately when it first appears.
- Never use jargon as a substitute for an explanation.
- Separate related concepts instead of combining them in one warning.
- State whether code compiles and show the expected output.
- Explain evaluation order when it affects the result.
- Chained Kotlin is welcome, but explain what each important operation receives and returns. Show intermediate values when the result is not immediately obvious.
- Put a Playground link directly below every independently runnable Kotlin/JVM example. If a snippet is Android-only, intentionally invalid, or incomplete, label that reason clearly instead of presenting a broken Playground link.
- Present common mistakes as practical **✕ Avoid / ✓ Prefer** comparisons. Show real code, the concrete failure or risk, corrected code, and one short explanation of why the correction works. Do not use theory-only bullet lists.
- Use architecture terminology only after the concrete problem is clear.
- Keep correctness and nuance, but place advanced caveats after the basic answer.

## Interview-answer test

An interview answer should make these points clear:

- What is it?
- Why does it exist?
- What happens in the example?
- What common mistake should be avoided?
- Where does it matter in Android?
- What trade-off or limitation should a senior engineer know?

If a paragraph cannot be explained naturally in conversation, rewrite it.
