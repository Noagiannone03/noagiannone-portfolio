# Apple interface assets

Toolbar PNGs were rendered from the macOS SF Symbols supplied by AppKit, using `NSImage(systemSymbolName:accessibilityDescription:)`, at 20 pt regular weight on transparent 48 × 48 canvases. They are actual Apple symbols, not hand-drawn approximations or third-party substitutes.

`document.png` was converted from macOS `CoreTypes.bundle/Contents/Resources/GenericDocumentIcon.icns`. Existing application icons remain in `icon/dock` and `icon/Launchpad`.

Visual references consulted for this redesign:

- Finder: https://support.apple.com/en-bh/guide/mac-help/mchldaafb302/mac
- Mail compose window: https://support.apple.com/en-mt/guide/mail/mlhl5094a9f2/mac
- Pages toolbar and inspector: https://support.apple.com/en-gb/guide/pages/tan0870f78aa/mac

Apple assets remain the property of Apple. This directory records their source; it does not grant additional rights.

## Dossiers et symboles supplémentaires

Les dossiers natifs (`DeveloperFolderIcon`, `DocumentsFolderIcon`, `SitesFolderIcon`, `GroupFolder`, `folder-native`) proviennent des ressources d’icônes du macOS local, converties en PNG. Les symboles de barre d’outils sont rendus par `NSImage(systemSymbolName:)` via AppKit, puis exportés en PNG transparent ; ils ne sont pas redessinés manuellement. Apple conserve les droits sur ses ressources.
