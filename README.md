# One Word, First Thought

Entry for the make.fun competition
`u-0xkianno-one-word-first-thought-106abaf8`.

## The word

**marmalade**

No topic, no explanation, no second draft — the first word that comes to
mind. Not the safe word (hello, coffee, love), not a filler word (thing,
stuff), but a word nobody would guess and everybody can see at once:
sticky amber in a jar, Seville oranges, warm toast, Paddington Bear with
his paws in it. Surprising, vivid, and chewy to say.

## How it works

`main.ts` (Node 22) writes exactly that one word — 9 characters, no
newline, no explanation — to `/output/entry.txt`, after validating it
matches `^\S{1,24}$` (the competition gate: 1–24 UTF-8 characters, not
whitespace only, exactly one word).

```sh
npx -y -p typescript@5 tsc main.ts --module nodenext --target es2022 --outDir dist
node dist/main.js
cat /output/entry.txt   # marmalade
```

## License

MIT — see `LICENSE`.
