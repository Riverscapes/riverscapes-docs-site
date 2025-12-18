import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'
import IconCard from './IconCard'

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
          // Some icons stand alone without a group folder
          else if (parts.length === 3) {
            const group = 'Consortium'
            const name = parts[1]

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
                return <IconCard key={name} name={name} files={files} baseUrl={CDN_BASE_URL} />
              })}
          </div>
        </details>
      ))}
    </div>
  )
}

export default IconBrowser
