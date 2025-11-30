# Git Practice Repository

A sample repository for practicing Git commands.

## Getting Started

Clone this repository to your local machine:

```bash
git clone https://github.com/ashishps1/git-practice-repo.git
cd git-practice-repo
```

## Project Structure

```
├── src/
│   ├── app.js       # Main application
│   ├── utils.js     # Utility functions
│   └── config.js    # Configuration
├── tests/
│   └── app.test.js  # Tests
├── docs/
│   └── guide.md     # Documentation
└── .gitignore
```

## Practice Exercises

### 1. Branching & Merging
```bash
# Create a feature branch
git checkout -b feature/add-multiply

# Edit src/utils.js to add a multiply function
# Commit your changes
git add src/utils.js
git commit -m "Add multiply function"

# Merge back to main
git checkout main
git merge feature/add-multiply
```

### 2. Resolving Conflicts
```bash
# Create two branches that modify the same file
git checkout -b branch-a
# Edit src/config.js, change version to "2.0.0"
git commit -am "Update version to 2.0.0"

git checkout main
git checkout -b branch-b
# Edit src/config.js, change version to "3.0.0"
git commit -am "Update version to 3.0.0"

# Merge branch-a into main, then try merging branch-b
git checkout main
git merge branch-a
git merge branch-b  # This will create a conflict!
```

### 3. Using Stash
```bash
# Make some changes without committing
# Then stash them
git stash

# Do other work, then restore
git stash pop
```

### 4. Exploring History
```bash
git log --oneline
git log --graph --all
git diff HEAD~1
git blame src/app.js
```

### 5. Undoing Changes
```bash
# Unstage a file
git restore --staged <file>

# Discard changes in working directory
git restore <file>

# Revert a commit
git revert <commit-hash>
```
