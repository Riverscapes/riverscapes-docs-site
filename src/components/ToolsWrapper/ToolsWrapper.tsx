import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useHistory } from '@docusaurus/router'
import styles from './ToolsWrapper.module.css'

export type ToolCardProps = {
  title: React.ReactNode
  description?: React.ReactNode
  logoUrl?: string
  toolUrl?: string
  imageUrl?: string
  imageLink?: string
}

export interface ToolsWrapperProps {
  cards: ToolCardProps[]
  sectionTitle?: string
  cardsize?: 'sm' | 'md' | 'lg'
}

const ToolsWrapper: React.FC<ToolsWrapperProps> = ({
  cardsize = 'md', // Default to medium size
  cards = [],
  sectionTitle,
}) => {
  const minWidth = cardsize === 'sm' ? '200px' : cardsize === 'lg' ? '400px' : '300px'

  return (
    <div className={styles.section}>
      {sectionTitle && <h2>{sectionTitle}</h2>}
      <div className={styles.grid} style={{ '--card-min-width': minWidth } as React.CSSProperties}>
        {cards.map((card, index) => (
          <ToolCard
            key={index}
            title={card.title}
            description={card.description}
            logoUrl={card.logoUrl ? useBaseUrl(card.logoUrl) : undefined}
            toolUrl={getUrl(card.toolUrl)}
            imageUrl={getUrl(card.imageUrl)}
            imageLink={getUrl(card.imageLink)}
          />
        ))}
      </div>
    </div>
  )
}

export const ToolCard: React.FC<ToolCardProps> = ({ title, description, logoUrl, toolUrl, imageUrl, imageLink }) => {
  const history = useHistory()
  // Only use useBaseUrl for relative URLs
  const getUrl = (url?: string) =>
    url && (url.startsWith('http://') || url.startsWith('https://')) ? url : useBaseUrl(url || '')

  const toolsUrl = getUrl(toolUrl)
  const isExternal = toolUrl && (toolUrl.startsWith('http://') || toolUrl.startsWith('https://'))

  if (isExternal) {
    // Render external card as an anchor
    return (
      <a
        href={toolUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        tabIndex={0}
        aria-label={typeof title === 'string' ? title : undefined}
        style={{ cursor: 'pointer', textDecoration: 'none' }}
      >
        {imageUrl && (
          <div className={styles.cardImageWrapper}>
            {imageLink ? (
              <a
                href={getUrl(imageLink)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                tabIndex={0}
                aria-label={`${title} image`}
                className={styles.cardImageLink}
              >
                <img src={imageUrl} alt={title + ' image'} className={styles.cardImage} />
              </a>
            ) : (
              <img src={imageUrl} alt={title + ' image'} className={styles.cardImage} />
            )}
          </div>
        )}
        <div className={styles.cardHeader}>
          {logoUrl && (
            <div className={styles.logoRowWrapper}>
              <img src={logoUrl} className={styles.logoRow} />
            </div>
          )}
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <div className={styles.cardContent}>{description && <p>{description}</p>}</div>
      </a>
    )
  }

  // Internal link: use div and router
  const cardProps = toolUrl
    ? {
        role: 'link',
        tabIndex: 0,
        className: styles.card,
        style: { cursor: 'pointer' },
        onClick: () => {
          history.push(toolsUrl)
        },
        onKeyDown: (e: React.KeyboardEvent) => {
          if ((e.key === 'Enter' || e.key === ' ') && toolUrl) {
            history.push(toolsUrl)
          }
        },
      }
    : { className: styles.card }

  return (
    <div {...cardProps}>
      {imageUrl && (
        <div className={styles.cardImageWrapper}>
          {imageLink ? (
            <a
              href={getUrl(imageLink)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              tabIndex={0}
              aria-label={`${title} image`}
              className={styles.cardImageLink}
            >
              <img src={imageUrl} alt={title + ' image'} className={styles.cardImage} />
            </a>
          ) : (
            <img src={imageUrl} alt={title + ' image'} className={styles.cardImage} />
          )}
        </div>
      )}
      <div className={styles.cardHeader}>
        {logoUrl && (
          <div className={styles.logoRowWrapper}>
            <img src={logoUrl} className={styles.logoRow} />
          </div>
        )}
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardContent}>{description && <p>{description}</p>}</div>
    </div>
  )
}

const getUrl = (url?: string) =>
  url && (url.startsWith('http://') || url.startsWith('https://')) ? url : useBaseUrl(url || '')

export default ToolsWrapper
