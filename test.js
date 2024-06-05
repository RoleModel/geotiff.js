import { writeArrayBuffer } from './src/geotiff.js'
import { readFileSync, writeFileSync } from 'node:fs'

const data = JSON.parse(readFileSync('./data.json', 'utf-8'))
const metadata = JSON.parse(readFileSync('./metadata.json', 'utf-8'))

const geotiff = await writeArrayBuffer(data, metadata)
writeFileSync('./out.tif', Buffer.from(geotiff))
