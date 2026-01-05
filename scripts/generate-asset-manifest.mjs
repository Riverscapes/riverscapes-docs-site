import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const STATIC_DIR = path.join(__dirname, '../static')
const OUTPUT_FILE = path.join(__dirname, '../src/data/assets.json')

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'])

function getAssets(dir, baseDir = STATIC_DIR) {
  let results = []
  if (!fs.existsSync(dir)) return results

  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAssets(filePath, baseDir))
    } else {
      const ext = path.extname(file).toLowerCase()
      if (IMAGE_EXTENSIONS.has(ext)) {
        const relativePath = path.relative(baseDir, filePath)
        // We want the URL to be relative to the site root, which corresponds to the static dir
        results.push({
          path: `/${relativePath}`,
          name: file,
          size: stat.size,
          ext: ext.slice(1),
        })
      }
    }
  })
  return results
}

try {
  console.log('Generating asset manifest...')
  const assets = getAssets(STATIC_DIR)

  // Ensure the directory exists
  const outputDir = path.dirname(OUTPUT_FILE)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(assets, null, 2))
  console.log(`Asset manifest generated with ${assets.length} assets at ${OUTPUT_FILE}`)
} catch (error) {
  console.error('Error generating asset manifest:', error)
  process.exit(1)
}
