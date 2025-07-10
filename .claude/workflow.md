# Claude Code Workflow

This file provides Claude Code specific workflow guidelines.

## Development Workflow

- **When first receiving instructions, read @docs/requirements.md to understand the project content before starting work**
- **Always use TodoWrite/TodoRead tools** for multi-step tasks to track progress and provide visibility
- **Plan mode workflow**: When using plan mode, after creating the plan but before starting implementation, update @docs/requirements.md with the plan content and commit it
- **Run lint, format, typecheck and build** before final commits to ensure code quality
- **Never commit debug/temporary code**: Remove console.log and debugging code before committing
- **Start with type definitions**: When implementing new features, begin by defining shared types in `src/shared/types/`
- **Read specification documents first**: Always check for and follow `docs/specification.md` or similar requirement documents
- **Debug systematically**: Add console.log strategically to trace message flow between plugin and UI when issues occur
- **Commit meaningful messages**: Focus on "why" rather than "what" - explain the purpose of changes from code diff context
- **Reference Figma Plugin API types directly**: For Figma Plugin API related processing, always reference Figma Plugin API types using TypeScript's type system (e.g., `BaseNode['id']`, `LibraryVariable['key']`) instead of defining literal types or using TSDoc comments. This ensures type safety and automatic compatibility with API changes.

## Communication Preferences

- 回答は日本語にすること
