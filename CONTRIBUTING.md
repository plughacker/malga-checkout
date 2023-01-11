# Contributing to Malga Checkout

Welcome and thanks for your interest! Before submitting a pull request, please take a moment to review these guidelines.

## Reporting Issues

Found a problem? Want a new feature?

- See if your issue or idea has [already been reported](https://github.com/plughacker/malga-checkout/issues).
- Provide a [reduced test case](https://css-tricks.com/reduced-test-cases/) or a [live example](https://codesandbox.io/).

Remember, a bug is a _demonstrable problem_ caused by _our_ code.

## Submitting Pull Requests

Pull requests are the greatest contributions, so be sure they are focused in
scope and avoid unrelated commits.

1. To begin: [fork this project](https://github.com/plughacker/malga-checkout/fork), clone your fork, and add our upstream.

   ```bash
   # Clone your fork of the repo into the current directory
   git clone git@github.com:$(npx github-username-cli $(git config user.email))/malga-checkout.git

   # Navigate to the newly cloned directory
   cd malga-checkout

   # Assign the original repo to a remote called "upstream"
   git remote add upstream git@github.com:plughacker/malga-checkout.git

   # Install the tools necessary for testing
   yarn # or npm install
   ```

2. Create a branch for your feature or fix:

   ```bash
   # Move into a new branch for your feature
   git checkout -b feature/thing
   ```

   ```bash
   # Move into a new branch for your fix
   git checkout -b fix/something
   ```

3. If your code passes all the tests, then push your feature branch:

   ```bash
   # Test current code
   yarn test # or npm test

   # Build current code
   yarn build # or npm run build
   ```

   > Note: ensure your version of Node is 14 or higher to run scripts

   ```bash
   # Push the branch for your new feature
   git push origin feature/thing
   ```

   ```bash
   # Or, push the branch for your update
   git push origin update/something
   ```

That’s it! Now [open a pull request](https://help.github.com/articles/using-pull-requests/) with a clear title and description.
