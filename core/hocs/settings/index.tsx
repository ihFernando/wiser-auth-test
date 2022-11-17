import React, { useState } from 'react'
import { NextPage } from 'next'

import Document, { DocumentProps } from './document'

interface SettingsDocumentProps extends DocumentProps {}

function withSettingsDocument<P extends object>(
  settingsDocument: SettingsDocumentProps = {}
) {
  return (Component: NextPage<P>) => {
    const displayName = Component.displayName || Component.name || 'Component'

    function ComponentWithSettings(props: P) {
      const [settingsState] = useState<SettingsDocumentProps>(settingsDocument)

      const componentProps = {
        ...props,
        ...settingsDocument
      }

      return (
        <Document {...settingsState}>
          <Component {...componentProps} />
        </Document>
      )
    }

    ComponentWithSettings.displayName = `withSettings(${displayName})`

    return ComponentWithSettings
  }
}

export default withSettingsDocument
