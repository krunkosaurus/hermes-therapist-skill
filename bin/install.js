#!/usr/bin/env node
const fs = require('fs');
const os = require('os');
const path = require('path');

const packageRoot = path.resolve(__dirname, '..');
const source = path.join(packageRoot, 'SKILL.md');
const hermesHome = process.env.HERMES_HOME || path.join(os.homedir(), '.hermes');
const targetDir = path.join(hermesHome, 'skills', 'personality', 'hermes-therapist-skill');
const target = path.join(targetDir, 'SKILL.md');

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, target);

console.log(`Installed hermes-therapist-skill to ${target}`);
console.log('Start Hermes with: hermes -s hermes-therapist-skill');
console.log('Or load inside Hermes with: /hermes-therapist-skill');
