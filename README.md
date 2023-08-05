# Bookmarklet to Toggle Between Edit and Read-Only Mode

This is a simple bookmarklet that enables edit mode in a browser. Links are being disabled to be easily editable. When clicked on again, default read-only mode activated, and inks become clickable again.

# How to run this bookmarklet?

Properly formatted javascript code with comments is under the `src` directory. Is is already written as IIFE (Immediately Invoked Function Expression). The usable bookmarklet code (minified and encoded) is under `dist` directory. You can simply copy-paste it to the URL field when creating standard bookmark.

You can also use various online tools to convert the Javascript code to a bookmarklet. For example
https://mrcoles.com/bookmarklet/.


# Download and test locally

You can use `git clone` and install needed dependencies (`bookmarklet` and `nodemon`) via `npm install`. You can then run `npm build` to convert src/index.js to a bookmarklet code (uses `bookmarklet` NPM package)

For convenience, you can also run `npm watch` (uses `nodemon` NPM package). This will watch any changes made to `index.js` file and automatically convert them to bookmarklet code to `dist/bookmarklet.js` file.
