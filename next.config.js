/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// Added to use Sass in Next.js. Check later to see if it is correct.
const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}