# TypeScript Fundamentals

Repository created during my TypeScript studies, containing examples and exercises developed lesson by lesson.

The main goal of this repository is to document my progress with TypeScript fundamentals while also practicing Git and GitHub workflows.

## Topics Covered

The repository includes examples involving:

- Type annotations
- Type inference
- Primitive types
- Arrays and tuples
- Enums
- Literal types
- Union types
- Intersection types
- Type aliases
- Object types
- Function typing
- Callbacks
- `unknown`
- Type narrowing
- Type guards
- `typeof`
- `instanceof`
- `in`
- Truthy and falsy values
- Optional chaining
- Non-null assertion
- Type assertions
- `never`
- Interfaces
- Interface inheritance
- `extends`
- `implements`
- Declaration merging

## Project Structure

```text
src/
└── modules/
    ├── basic-types/
    ├── interfaces/
    └── narrowing/

types/
└── global.d.ts
```

Each module contains small examples focused on a specific TypeScript concept.

## Branch Strategy

During the course, each lesson was developed in its own Git branch.

This allowed me to practice:

- Creating and switching branches
- Organizing commits
- Maintaining a progressive history of the project
- Working with Git while learning TypeScript

The `main` branch represents the latest version of the project.

Previous lesson states can be explored through the repository branches and commit history.

## Running the Project

Install the dependencies:

```bash
npm install
```

Check the TypeScript code:

```bash
npx tsc --noEmit
```

Compile the project:

```bash
npx tsc
```

## Technologies

- TypeScript
- JavaScript
- HTML
- Node.js
- npm
- Git
- GitHub
- Prettier

## Purpose

This repository is part of my learning path toward front-end and full-stack web development, with a focus on building a strong foundation in TypeScript before advancing further into technologies such as React and Next.js.
