#!/bin/bash
cd "$(dirname "$0")"
clear
printf '\nSHIFT prototype launcher\n\n'
if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js/npm is not installed. Install Node.js, then run this file again."
  read -r -p "Press Enter to close..."
  exit 1
fi
if [ ! -d node_modules ]; then
  echo "Installing the project dependencies for the first time..."
  npm install || { read -r -p "Installation failed. Press Enter to close..."; exit 1; }
fi
echo "Starting SHIFT..."
npm run dev
