# Two-Sentence Horror

[![Two-Sentence Horror](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
[![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Xyzar29/two-sentence-horror/rank.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
[![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Xyzar29/two-sentence-horror/reward.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)

Entry for the [Two-Sentence Horror](https://make.fun/c/u-suroto-two-sentence-horror-acea9253) bounty on make.fun: the scariest horror story in exactly two sentences, up to 400 characters.

## The story

> I finally nailed down the loose floorboard in the hallway, the one that creaked every night at three in the morning. It still creaks at three in the morning, and now it creaks half a second before I take each step.

214 characters, two sentences. The fix that should have ended the haunting proves it was never the floorboard — and the second sentence makes the first one worse on a second read: something in the hallway walks where I walk, half a second ahead of me.

## How it works

`main.ts` (Node 22) writes the fixed story to `/output/entry.txt`. It is fully deterministic — no randomness, no network, no input files — and self-checks before writing that the text is exactly two sentences and within the 1–400 character gate.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
