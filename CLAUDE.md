# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development

- `pnpm watch` - Build in watch mode for development
- `pnpm build` - Build both plugin and UI for production
- `pnpm dev:ui` - Run UI development server

### Testing

- `pnpm test` - Run all tests (plugin and UI)
- `pnpm test:plugin` - Run plugin tests only
- `pnpm test:ui` - Run UI tests only

### Code Quality

- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm format` - Check Prettier formatting
- `pnpm format:fix` - Fix Prettier formatting
- `pnpm typecheck` - Run TypeScript type checking

## Architecture

This is a Figma plugin template using Preact that follows a dual-build architecture:

### Build System

- **Plugin Code**: Built with Vite targeting ES2015, outputs to `dist/code.js`
- **UI Code**: Built with Vite + Preact preset, bundled as single file to `dist/index.html`
- **Shared Types**: Located in `src/shared/types/` for type safety between plugin and UI

### Communication Pattern

The plugin uses a message-passing architecture between the plugin code (runs in Figma's sandbox) and UI (runs in iframe):

- **Plugin → UI**: Uses `postMessageFromPlugin()` utility with typed messages
- **UI → Plugin**: Uses `postMessageFromUi()` utility with typed messages
- **Message Types**: Defined in `src/shared/types/PluginMessagesFromPlugin/` and `src/shared/types/PluginMessagesFromUi/`

### Directory Structure

- `src/plugin/` - Figma plugin code (code.ts entry point)
- `src/ui/` - Preact UI code (main.tsx entry point)
- `src/shared/` - Shared types and utilities
- Tests are co-located with source files using `.spec.ts/.tsx` naming

### Key Technologies

- **Preact** for UI framework
- **Vite** for build tooling
- **Vitest** for testing
- **TailwindCSS** for styling
- **TypeScript** with strict type checking
