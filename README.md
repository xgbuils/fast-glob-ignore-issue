# fast-glob ignore issue

After running `npm test` or `node index.js`:

We can see that the fourth output is incorrect:

```
ignoring files in "foo" directories
[ 'index.js', 'bar/index.js' ]

ignoring files in "foo" root directory
[ 'index.js', 'bar/index.js', 'bar/foo/one.js', 'bar/foo/two.js' ]

ignoring file one.js inside foo directories
[ 'index.js', 'bar/index.js', 'bar/foo/two.js' ]

ignoring file one.js inside foo directories and files in "foo" root directory
[ 'index.js', 'bar/index.js', 'bar/foo/one.js', 'bar/foo/two.js' ]
```