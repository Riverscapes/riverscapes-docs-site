import React, { useState } from 'react'
import Link from '@docusaurus/Link'

interface IconFile {
  filePath: string
  byteSize: number
}

interface IconCardProps {
  name: string
  files: IconFile[]
  baseUrl: string
}

/**
 * Sorts icon files for display.
 * Priority:
 * 1. SVG files first
 * 2. Larger files (by pixel size in filename) next
 * 3. Alphabetical by file path
 */
const sortFiles = (a: { filePath: string }, b: { filePath: string }) => {
  const isASvg = a.filePath.toLowerCase().endsWith('.svg')
  const isBSvg = b.filePath.toLowerCase().endsWith('.svg')

  // SVGs always come first
  if (isASvg && !isBSvg) return -1
  if (!isASvg && isBSvg) return 1

  // Helper to extract pixel size from filename (e.g., "icon_32px.png" -> 32)
  const getSize = (path: string) => {
    const fileName = path.split('/').pop() || ''
    const noExt = fileName.replace(/\.[^/.]+$/, '')
    const match = noExt.match(/(\d+)$/i)
    return match ? parseInt(match[1], 10) : 0
  }

  const sizeA = getSize(a.filePath)
  const sizeB = getSize(b.filePath)

  // Sort by size descending (larger icons first)
  if (sizeA > 0 && sizeB > 0) {
    return sizeB - sizeA
  }

  // Fallback to alphabetical sort
  return a.filePath.localeCompare(b.filePath)
}

/**
 * Handles downloading a file from a URL.
 */
const handleDownload = async (url: string, filename: string) => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Network response was not ok')
    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(blobUrl)
  } catch (error) {
    console.error('Download failed:', error)
    // Fallback to opening in a new tab if download fails
    window.open(url, '_blank')
  }
}

const IconCard: React.FC<IconCardProps> = ({ name, files, baseUrl }) => {
  const svgFile = files.find(({ filePath }) => filePath.endsWith('.svg'))

  return (
    <div className="card">
      <div
        className="card__image"
        style={{
          padding: '1rem',
          textAlign: 'center',
          backgroundColor: '#f5f6f7',
          position: 'relative',
        }}
      >
        {svgFile ? (
          <img src={`${baseUrl}${svgFile.filePath}`} alt={name} style={{ maxHeight: '100px', maxWidth: '100%' }} />
        ) : (
          <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No SVG</div>
        )}
        <h4 style={{ margin: 0 }}>{name}</h4>
      </div>
      <div className="card__body">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem' }}>
          {files.sort(sortFiles).map(({ filePath, byteSize }, index) => {
            const fileName = filePath.split('/').pop() || filePath
            const fileUrl = `${baseUrl}${filePath}`

            let label = fileName
            if (fileName.toLowerCase().endsWith('.svg')) {
              label = 'SVG'
            } else {
              const noExt = fileName.replace(/\.[^/.]+$/, '')
              const match = noExt.match(/(\d+)$/i)
              label = match ? match[1] + 'px' : noExt
            }

            return (
              <li
                key={filePath}
                style={{
                  marginBottom: '0.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: index % 2 === 1 ? 'var(--ifm-color-emphasis-200)' : 'transparent',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                <Link href={fileUrl} target="_blank" rel="noopener noreferrer" title={fileName}>
                  {label}
                </Link>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--ifm-color-emphasis-600)',
                      marginRight: '0.5rem',
                    }}
                  >
                    {(byteSize / 1024).toFixed(1)} KB
                  </div>
                  <CopyButton text={fileUrl} />
                  <DownloadButton url={fileUrl} filename={fileName} onDownload={handleDownload} />
                  <OpenInNewTabButton url={fileUrl} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default IconCard

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      style={{
        marginLeft: '0.5rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        color: 'var(--ifm-color-primary)',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  )
}

interface DownloadButtonProps {
  url: string
  filename: string
  onDownload: (url: string, filename: string) => void
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ url, filename, onDownload }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onDownload(url, filename)
      }}
      title="Download"
      style={{
        marginLeft: '0.5rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        color: 'var(--ifm-color-primary)',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    </button>
  )
}

interface OpenInNewTabButtonProps {
  url: string
}

const OpenInNewTabButton: React.FC<OpenInNewTabButtonProps> = ({ url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Open in new tab"
      style={{
        display: 'flex',
        alignItems: 'center',
        color: 'var(--ifm-color-primary)',
        marginLeft: '0.5rem',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </Link>
  )
}
