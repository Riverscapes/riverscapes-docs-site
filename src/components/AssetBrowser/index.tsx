import React, { useState, useMemo } from 'react'
import assetsData from '../../data/assets.json'
import AssetCard from './AssetCard'
import styles from './styles.module.css'

interface Asset {
  path: string
  name: string
  size: number
  ext: string
}

const AssetBrowser: React.FC = () => {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')

  // Group assets by their directory
  const groupedAssets = useMemo(() => {
    const groups: Record<string, Asset[]> = {}

    // Sort assets by path initially
    const sortedAssets = [...assetsData].sort((a, b) => a.path.localeCompare(b.path))

    sortedAssets.forEach((asset) => {
      // Extract directory from path (e.g., "/img/logos/apps/Consortium.svg" -> "img/logos/apps")
      const parts = asset.path.split('/')
      const groupName = parts.slice(1, -1).join('/') || 'root'

      if (!groups[groupName]) {
        groups[groupName] = []
      }
      groups[groupName].push(asset)
    })

    return groups
  }, [])

  const sortedGroupNames = useMemo(() => Object.keys(groupedAssets).sort(), [groupedAssets])

  // Initial expansion of all groups
  React.useEffect(() => {
    setExpandedGroups(new Set(sortedGroupNames))
  }, [sortedGroupNames])

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

  const handleToggleAll = () => {
    if (expandedGroups.size > 0) {
      setExpandedGroups(new Set())
    } else {
      setExpandedGroups(new Set(sortedGroupNames))
    }
  }

  const filteredGroups = useMemo(() => {
    if (!searchQuery) return groupedAssets

    const filtered: Record<string, Asset[]> = {}
    const query = searchQuery.toLowerCase()

    Object.entries(groupedAssets).forEach(([group, assets]) => {
      const matchingAssets = assets.filter(
        (a) => a.name.toLowerCase().includes(query) || group.toLowerCase().includes(query)
      )
      if (matchingAssets.length > 0) {
        filtered[group] = matchingAssets
      }
    })
    return filtered
  }, [groupedAssets, searchQuery])

  const filteredGroupNames = useMemo(() => Object.keys(filteredGroups).sort(), [filteredGroups])

  return (
    <div className={styles.assetBrowser}>
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search assets or directories..."
          className="navbar__search-input"
          style={{
            width: '100%',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            border: '1px solid var(--ifm-color-emphasis-300)',
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {filteredGroupNames.map((group) => (
            <a
              key={group}
              href={`#asset-group-${group.replace(/\//g, '-')}`}
              className="button button--secondary button--sm"
              style={{ fontSize: '0.7rem' }}
              onClick={() => {
                const next = new Set(expandedGroups)
                next.add(group)
                setExpandedGroups(next)
              }}
            >
              {group}
            </a>
          ))}
        </div>
        <button onClick={handleToggleAll} className="button button--link button--sm" style={{ whiteSpace: 'nowrap' }}>
          {expandedGroups.size > 0 ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {filteredGroupNames.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--ifm-color-emphasis-600)' }}>
          No assets found matching &quot;{searchQuery}&quot;
        </div>
      )}

      {filteredGroupNames.map((group) => (
        <details
          key={group}
          id={`asset-group-${group.replace(/\//g, '-')}`}
          className="alert alert--secondary"
          style={{ marginBottom: '1.5rem', scrollMarginTop: '100px' }}
          open={expandedGroups.has(group)}
        >
          <summary
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={(e) => {
              e.preventDefault()
              toggleGroup(group)
            }}
          >
            {group} ({filteredGroups[group].length})
          </summary>
          <div className={styles.assetGrid}>
            {filteredGroups[group].map((asset) => (
              <AssetCard key={asset.path} asset={asset} />
            ))}
          </div>
        </details>
      ))}
    </div>
  )
}

export default AssetBrowser
