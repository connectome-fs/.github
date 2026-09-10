# connectome-fs/.github

Maintainer notes for the organization profile repository.

## What lives here

* [`profile/README.md`](profile/README.md) — GitHub org profile README (keep minimal)
* [`profile/assets/`](profile/assets/) — brand marks and export scripts
* [`AGENT-RULES.md`](AGENT-RULES.md) — pointer to the org agent-rules overlay

## Agent rules

Canonical shared rules: https://github.com/dev-centr/agent-rules  
Org overlay (pointer only): https://github.com/connectome-fs/agent-rules

Do not submodule `dev-centr/agent-rules` into this repo. Clone/fetch it under `$CODE_ROOT`.

## Related surfaces

| Surface | Repo | URL |
| --- | --- | --- |
| Website | `connectome-fs/connectome-fs.github.io` | https://connectome-fs.github.io/ |
| Docs hub | `connectome-fs/docs` | https://connectome-fs.github.io/docs/ |
| Product | `connectome-fs/connectome-fs` | https://github.com/connectome-fs/connectome-fs |

## Brand export

```powershell
pnpm install
pnpm brand:export
```

## Changelog

See [CHANGELOG.adoc](CHANGELOG.adoc).
