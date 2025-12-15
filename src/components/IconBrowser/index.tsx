import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'
import Link from '@docusaurus/Link'

/**
 * Represents the structure of the icon manifest.
 * The manifest is organized by group, then by icon name, containing a list of file variants.
 */
type IconManifest = {
  [group: string]: {
    [name: string]: {
      filePath: string
      byteSize: number
    }[]
  }
}

// Note: The base url also doubles as the location of the index listing CSV
const CDN_BASE_URL = 'https://cdn.riverscapes.net/'

/**
 * Sorts icon files for display.
 * Priority:
 * 1. SVG files first
 * 2. Larger files (by pixel size in filename) next
 * 3. Alphabetical by file path
 *
 * @param a - First file object
 * @param b - Second file object
 * @returns Sort order (-1, 1, or 0)
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
 * IconBrowser Component
 *
 * Fetches and displays a library of icons from a remote CDN.
 * Features:
 * - Fetches manifest from a CSV file
 * - Groups icons by category
 * - Displays SVG previews where available
 * - Provides download links and "open in new tab" functionality
 * - Allows expanding/collapsing groups
 * - Jump-to links for quick navigation
 */
const IconBrowser: React.FC = () => {
  const [manifest, setManifest] = useState<IconManifest | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // Tracks which accordion groups are currently expanded
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())

  useEffect(() => {
    /**
     * Fetches the icon manifest from the CDN.
     * The manifest is expected to be a CSV file at the root of the CDN.
     */
    async function fetchManifest() {
      try {
        const response = await window.fetch(CDN_BASE_URL)
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest: ${response.statusText}`)
        }
        const text = await response.text()
        const lines = text.split('\n').filter((line) => line.trim() !== '')

        const parsed: IconManifest = {}

        lines.forEach((line) => {
          const [filePath, _byteSize] = line.split(',')
          // This is a CSV. The first column is the file path the second is the bytsize of that file
          const parts = filePath.trim().split('/')
          // Expected format: icons/<group>/<name>/<file>
          if (parts.length >= 4) {
            const group = parts[1]
            const name = parts[2]

            if (!parsed[group]) {
              parsed[group] = {}
            }
            if (!parsed[group][name]) {
              parsed[group][name] = []
            }
            parsed[group][name].push({ filePath: filePath.trim(), byteSize: parseInt(_byteSize, 10) })
          }
        })

        setManifest(parsed)
        // Expand all groups by default
        setExpandedGroups(new Set(Object.keys(parsed)))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchManifest()
  }, [])

  /**
   * Handles downloading a file from a URL.
   * Uses a temporary blob URL to force download.
   *
   * @param url - The URL of the file to download
   * @param filename - The name to save the file as
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

  /**
   * Toggles the expanded state of a specific group.
   * @param group - The name of the group to toggle
   */
  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev)
      if (next.has(group)) {
        next.delete(group)
      } else {
        next.add(group)
      }
      return next
    })
  }

  /**
   * Ensures a specific group is expanded.
   * Used when clicking jump-to links.
   * @param group - The name of the group to expand
   */
  const expandGroup = (group: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev)
      next.add(group)
      return next
    })
  }

  /**
   * Toggles all groups between expanded and collapsed states.
   * If any groups are expanded, it collapses all.
   * If all are collapsed, it expands all.
   */
  const handleToggleAll = () => {
    if (!manifest) return
    if (expandedGroups.size > 0) {
      setExpandedGroups(new Set())
    } else {
      setExpandedGroups(new Set(Object.keys(manifest)))
    }
  }

  if (loading) {
    return <div>Loading icons...</div>
  }

  if (error) {
    return <div className="alert alert--danger">Error: {error}</div>
  }

  if (!manifest) {
    return <div>No icons found.</div>
  }

  const sortedGroups = Object.keys(manifest).sort()

  return (
    <div className={styles.iconBrowser}>
      {/* Controls: Jump links and Expand/Collapse All button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginRight: '1rem' }}>
          {sortedGroups.map((group) => (
            <a
              key={group}
              href={`#group-${group}`}
              className="button button--secondary button--sm"
              style={{ textTransform: 'capitalize' }}
              onClick={() => expandGroup(group)}
            >
              {group}
            </a>
          ))}
        </div>
        <button
          onClick={handleToggleAll}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            color: 'var(--ifm-color-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
          }}
        >
          {expandedGroups.size > 0 ? 'Collapse All' : 'Expand All'}
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginLeft: '0.25rem' }}
          >
            {expandedGroups.size > 0 ? (
              <polyline points="18 15 12 9 6 15"></polyline>
            ) : (
              <polyline points="6 9 12 15 18 9"></polyline>
            )}
          </svg>
        </button>
      </div>

      {/* Icon Groups */}
      {sortedGroups.map((group) => (
        <details
          key={group}
          id={`group-${group}`}
          className="alert alert--secondary"
          style={{ marginBottom: '1rem', scrollMarginTop: '100px' }}
          open={expandedGroups.has(group)}
        >
          <summary
            style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2em' }}
            onClick={(e) => {
              e.preventDefault()
              toggleGroup(group)
            }}
          >
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </summary>
          <div className={styles.iconGrid}>
            {Object.keys(manifest[group])
              .sort()
              .map((name) => {
                const files = manifest[group][name]
                const svgFile = files.find(({ filePath }) => filePath.endsWith('.svg'))

                return (
                  <div key={name} className="card">
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
                        <img
                          src={`${CDN_BASE_URL}${svgFile.filePath}`}
                          alt={name}
                          style={{ maxHeight: '100px', maxWidth: '100%' }}
                        />
                      ) : (
                        <div
                          style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          No SVG
                        </div>
                      )}
                      <h4 style={{ margin: 0 }}>{name}</h4>
                    </div>
                    <div className="card__body">
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem' }}>
                        {files.sort(sortFiles).map(({ filePath, byteSize }, index) => {
                          const fileName = filePath.split('/').pop() || filePath
                          const fileUrl = `${CDN_BASE_URL}${filePath}`

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
                                <OpenInNewTabButton url={fileUrl} />
                                <DownloadButton url={fileUrl} filename={fileName} onDownload={handleDownload} />
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )
              })}
          </div>
        </details>
      ))}
    </div>
  )
}

interface OpenInNewTabButtonProps {
  url: string
}

/**
 * A simple button component to open a URL in a new tab.
 */
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
        marginRight: '0.5rem',
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

interface DownloadButtonProps {
  url: string
  filename: string
  onDownload: (url: string, filename: string) => void
}

/**
 * A button component that triggers a file download.
 */
const DownloadButton: React.FC<DownloadButtonProps> = ({ url, filename, onDownload }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onDownload(url, filename)
      }}
      title="Download"
      style={{
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

export default IconBrowser
