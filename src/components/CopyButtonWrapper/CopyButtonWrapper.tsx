import React, { useState } from 'react'
import styles from './CopyButtonWrapper.module.css'

interface CopyButtonWrapperProps {
  copyText: string
  children?: React.ReactNode
  buttonLabel?: string
  copiedMessage?: string
  className?: string
}

const CopyButtonWrapper: React.FC<CopyButtonWrapperProps> = ({
  copyText,
  children,
  buttonLabel = '📋',
  copiedMessage = 'Copied to Clipboard!',
  className = '',
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null)

  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    navigator.clipboard.writeText(copyText)
    setAnchorEl(event.currentTarget)
    setTimeout(() => setAnchorEl(null), 1500)
  }

  const handleBlur = () => setAnchorEl(null)

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.content}>{children}</div>
      <button
        onClick={handleCopy}
        onBlur={handleBlur}
        className={styles.copyButton}
        aria-label={buttonLabel}
        type="button"
      >
        {buttonLabel}
      </button>
      {anchorEl && (
        <span className={styles.copiedMessage} role="status" aria-live="polite">
          {copiedMessage}
        </span>
      )}
    </div>
  )
}

export default CopyButtonWrapper
