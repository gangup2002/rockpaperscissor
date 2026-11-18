# RockPaperSnap

RockPaperSnap is a Rock–Paper–Scissors mobile game built with **React Native**, **Expo**, and **Expo Router** for Mobile Application Development Practical Tutorial 05.

## Features
- Interactive Rock, Paper, and Scissors game.
- Computer randomly selects a move.
- Win, draw, and loss result messages.
- Scoreboard that tracks wins, draws, and losses.
- Reset scoreboard button.
- File-based bottom tab navigation with Play Game and Rules screens.
- Configured splash screen using `assets/images/appIcon.png`.

## Requirements
- Node.js (LTS recommended)
- VS Code
- Expo Go on your Android/iOS device

## Run the project
1. Extract the ZIP file.
2. Open the `RockPaperSnap` folder in VS Code.
3. Open the integrated terminal.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start Expo and clear its cache:

   ```bash
   npx expo start -c
   ```

6. Install/open Expo Go on your phone and scan the QR code. Keep your phone and computer on the same Wi-Fi network. If LAN discovery does not work, run `npx expo start --tunnel`.

## Project structure

```text
RockPaperSnap/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── index.tsx
│       └── rules.tsx
├── assets/
│   └── images/
│       └── appIcon.png
├── Output_Screens/
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## Submission
Save screenshots of the Play Game screen, a game result/scoreboard, and the Rules screen in `Output_Screens/`. Initialize a Git repository, push the project to a repository named `RockPaperSnap`, and submit the repository link through eKel as instructed in the practical sheet.

## Android APK (optional)
For a standalone Android build, install EAS CLI, sign in to Expo, configure the build, and use an APK preview profile. See the Expo EAS Build documentation for current setup requirements.
# rockpaperscissor
