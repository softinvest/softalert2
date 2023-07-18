#!/usr/bin/env zx
import { $, echo, fs } from 'zx'

echo`Resetting the branch...`
await $`git checkout .`
echo``

// the command has been called by semantic-release, bump version in src/SoftAlert.js before building dist
if (process.env.VERSION) {
  echo`Updating the version in src/SoftAlert.js...`
  fs.writeFileSync(
    'src/SoftAlert.js',
    fs.readFileSync('src/SoftAlert.js', 'utf8').replace(/version = '(.*?)'/, `version = '${process.env.VERSION}'`)
  )
  await $`git add src/SoftAlert.js`
  echo``
}

echo`Running the build...`
await $`yarn build`
echo``

echo`OK!`
