import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

interface Asset {
  path: string
  name: string
  size: number
  ext: string
}

interface AssetCardProps {
  asset: Asset
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const [copied, setCopied] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleCopy = async () => {
    try {
      // Create a full URL based on the current origin
      const fullUrl = `${window.location.origin}${asset.path}`
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className={styles.assetCard}>
      <div className={styles.previewContainer}>
        {hasError ? (
          <div style={{ textAlign: 'center', color: 'var(--ifm-color-emphasis-600)', fontSize: '0.8rem' }}>
            Preview Unavailable
          </div>
        ) : (
          <img
            src={asset.path}
            alt={asset.name}
            className={styles.previewImage}
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.assetName} title={asset.name}>
          {asset.name}
        </div>
        <div className={styles.assetMeta}>
          {asset.ext.toUpperCase()} • {(asset.size / 1024).toFixed(1)} KB
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={handleCopy} className={`button button--primary button--sm ${styles.copyButton}`}>
            {copied ? 'Copied!' : 'Copy URL'}
          </button>
          <Link
            href={asset.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`button button--secondary button--sm ${styles.openButton}`}
            title="Open in new tab"
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
        </div>
      </div>
    </div>
  )
}

export default AssetCard
