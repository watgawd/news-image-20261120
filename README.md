# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/watgawd/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/watgawd/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A program that writes one image summing up the world's news of Friday 20 November 2026: a newspaper front page drawn programmatically with Pillow, covering the day's lead stories from Kyiv to COP31.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The image

A newspaper front page, drawn programmatically with Pillow (`draw.py`):

- **Lead story:** Russia's overnight strikes on Kyiv's bridges over the
  Dnipro — 8 killed, 28 hurt, embassies and a cathedral damaged.
- **Also:** Russia violating Polish airspace; Trump saying no decision on the
  next Iran step until the new year; stocks falling for a fifth straight day;
  the COP31 draft dropping its fossil-fuel phase-out; Kenya discharging its
  last Ebola patient; Estonia closing its border with Russia; plus a Houthi
  missile damaging Riyadh's tallest tower, Anthropic closing 17% above its
  $83 IPO price, and GTA 6 topping $2.3bn in launch sales.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). No network is used and
both runs write identical bytes.

To regenerate the image: `python3 draw.py` (requires Pillow and the DejaVu
fonts). To test the entry: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=91fyv507&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
