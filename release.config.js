module.exports = {
  debug: true,
  branches: ['main'],
  verifyConditions: ['@semantic-release/changelog', '@semantic-release/npm', '@semantic-release/github'],
  prepare: [
    {
      path: '@semantic-release/exec',
      cmd: 'VERSION=${nextRelease.version} ./node_modules/.bin/zx tools/build-dist.mjs',
    },
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  publish: [
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: [
          { path: 'dist/softalert2.all.js' },
          { path: 'dist/softalert2.all.min.js' },
          { path: 'dist/softalert2.css' },
          { path: 'dist/softalert2.js' },
          { path: 'dist/softalert2.min.css' },
          { path: 'dist/softalert2.min.js' },
        ],
      },
    ],
  ],
  success: [
    '@semantic-release/github',
    {
      path: '@semantic-release/exec',
      cmd: './node_modules/.bin/zx tools/purge-jsdelivr.mjs',
    },
  ],
}
