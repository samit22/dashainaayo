#!/usr/bin/env bash
# Manual publish to GitHub Pages (gh-pages branch).
# Prefer the CI deploy job on merge to main once the workflow YAML is applied.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Building…"
npm run build

echo "Publishing to gh-pages…"
npx gh-pages -d build

echo "Done. Site should update at https://dashainaayo.com"
