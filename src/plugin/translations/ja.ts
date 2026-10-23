import { i18n } from "./language";

export const language: i18n = 
{
  cancel: "キャンセル",
  browse: "参照",
  pathInputPlaceholder: "パスを入力か参照してください...",
  pathValidations: {
    noEmpty: "パスを空にすることはできません",
    mustExist: "パスが存在しません",
    noTilde: "チルダ（~）を使用したホームディレクトリの指定は許可されていません",
    noAbsolute: "絶対パスは使用できません",
    noRelative: "相対パスは使用できません",
    noFiles: "パスにファイルを指定することはできません",
    noFolders: "パスにディレクトリを指定することはできません",
    mustHaveExtension: "パスの拡張子は {0} である必要があります"
  },
  updateAvailable: "アップデートが利用可能です",
  exportAsHTML: "HTMLとしてエクスポート",
  exportModal: {
    title: "HTMLへエクスポート",
    exportAsTitle: "{0} をHTMLとしてエクスポート",
    moreOptions: "その他のオプションはプラグインの設定ページにあります。",
    openAfterExport: "エクスポート後に開く",
    exportButton: "エクスポート",
    filePicker: {
      title: "エクスポートされた保管庫（vault）内のすべてのファイルを選択",
      selectAll: "すべて選択",
      save: "保存"
    },
    currentSite: {
      noSite: "このパスには現在エクスポートされたウェブサイトが含まれていません。",
      oldSite: "このパスには、異なるバージョンのプラグインで作成されたエクスポートが含まれています。",
      pathContainsSite: "サイト",
      fileCount: "ファイル数",
      lastExported: "最終エクスポート日時"
    },
    exportMode: {
      title: "エクスポートモード",
      online: "ファイルにオンライン（HTTPサーバー経由）でアクセスする場合は、これを使用してください。",
      local: "これにより、エクスポート内容全体を含む単一の（大きな）HTMLファイルが書き出されます。オフラインでの共有にのみ使用してください。",
      rawDocuments: "シンプルなスタイルとスクリプトを含み、追加機能は含まないプレーンなHTMLドキュメントを書き出します。"
    },
    purgeExport: {
      description: "サイトキャッシュをクリアして、すべてのファイルを再エクスポートします。",
      clearCache: "キャッシュ消去",
      confirmation: "本当に消去しますか？",
      clearWarning: "これにより、サイトのメタデータが削除されます（エクスポート済みのHTMLファイルは削除されません）。\n\nこれにより、サイトの全ファイルが強制的に再エクスポートされます。\n\nまた、再エクスポートの前にエクスポート対象のファイル構成を変更した場合、一部 of ファイルが未使用のままファイルシステム上に残る可能性があります。\n\nこの操作は取り消せません。"
    }
  },
  settings: {
    title: "HTMLエクスポート設定",
    support: "このプラグインの継続的な開発を支援する。",
    debug: "デバッグ情報をクリップボードにコピー",
    unavailableSetting: "\u26A0\uFE0F この機能は {0} モードでは利用できません。",
    pageFeatures: {
      title: "ページ機能",
      description: "エクスポートされたページのさまざまな機能を制御します。"
    },
    baseFeatures: {
      info_selector: "要素のCSSセレクター。この要素を基準としてフィーチャーが配置されます。",
      info_type: "この機能は、前、後、あるいは内部（開始位置または終了位置）のどこに配置されますか？",
      info_displayTitle: "機能の上に表示する、内容を説明するタイトル",
      info_featurePlacement: "この機能をページ上のどこに配置するか。（セレクターを基準として）"
    },
    document: {
      title: "ドキュメント",
      description: "ドキュメント自体の設定を制御します。",
      info_allowFoldingLists: "リストの折りたたみを許可するかどうか",
      info_allowFoldingHeadings: "見出しの折りたたみを許可するかどうか",
      info_documentWidth: "ドキュメントの幅"
    },
    sidebars: {
      title: "サイドバー",
      description: "ファイルナビゲーション、アウトライン、テーマ切り替え、グラフビューなどの他のすべての機能を保持します。",
      info_allowResizing: "サイドバーのサイズ変更を許可するかどうか",
      info_allowCollapsing: "サイドバーの折りたたみを許可するかどうか",
      info_rightDefaultWidth: "右サイドバーのデフォルトの幅",
      info_leftDefaultWidth: "左サイドバーのデフォルトの幅"
    },
    fileNavigation: {
      title: "ファイルナビゲーション",
      description: "エクスポートされた保管庫（vault）を探索するためのファイルツリーを表示します。",
      info_showCustomIcons: "ファイルとフォルダにカスタムアイコンを表示する",
      info_showDefaultFolderIcons: "ツリー内のすべてのフォルダにデフォルトのフォルダアイコンを表示する",
      info_showDefaultFileIcons: "ツリー内のすべてのファイルにデフォルトのファイルアイコンを表示する",
      info_defaultFolderIcon: "フォルダに使用するアイコン。Lucideアイコンを使用する場合は 'lucide//' をプレフィックスに付けます",
      info_defaultFileIcon: "ファイルに使用するアイコン。Lucideアイコンを使用する場合は 'lucide//' をプレフィックスに付けます",
      info_defaultMediaIcon: "メディアファイルに使用するアイコン。Lucideアイコンを使用する場合は 'lucide//' をプレフィックスに付けます",
      info_exposeStartingPath: "ページが最初に読み込まれたときに、ファイルツリー内で現在のファイルを表示するかどうか"
    },
    outline: {
      title: "アウトライン",
      description: "開いているドキュメントの見出し一覧を表示します。",
      info_startCollapsed: "最初からアウトラインを折りたたんだ状態にしますか？",
      info_minCollapseDepth: "ツリー内で少なくともこのレベルの深さにある場合のみ、アウトライン項目の折りたたみを許可します。"
    },
    graphView: {
      title: "グラフビュー",
      description: "保管庫（vault）を視覚的かつインタラクティブに表現して表示します。（注意: これはウェブサーバー上でホストされているエクスポートでのみ利用可能です）",
      info_showOrphanNodes: "他のどのノードとも接続されていない孤立ノードを表示する。",
      info_showAttachments: "画像やPDFなどの添付ファイルをグラフ内のノードとして表示する。",
      info_allowGlobalGraph: "ユーザーがすべてのノードのグローバルグラフを表示できるようにする。",
      info_allowExpand: "ユーザーがグラフビューをポップアウトして画面全体に表示できるようにする",
      info_attractionForce: "リンクされたノード同士がどれだけ引き付け合うか。これにより、グラフがより密集して表示されます。",
      info_linkLength: "ノード間のリンクの長さ。リンクが短いほど、接続されたノードが密に集まります。",
      info_repulsionForce: "ノード同士がどれだけ反発し合うか。これにより、切断された部分がより広がって配置されます。",
      info_centralForce: "ノードがどれだけ中心に引き寄せられるか。これにより、グラフがより高密度で円形に見えるようになります。",
      info_edgePruning: "このしきい値を超える長さのエッジはレンダリングされませんが、シミュレーションには影響を与え続けます。これにより、大きく絡み合ったグラフをより整理された見た目にすることができます。ノードにホバーすると、これらのリンクが引き続き表示されます。",
      info_minNodeRadius: "最も小さいノードのサイズ。ノードが小さいほど、他のノードを引き付ける力が弱くなります。",
      info_maxNodeRadius: "最も大きいノードのサイズ。ノードはリンクの数に応じてサイズが決定されます。ノードが大きいほど、他のノードをより引き付けます。これは、最も重要なノードの周囲に適切なグループ化を作成するために使用できます。"
    },
    search: {
      title: "検索バー",
      description: "保管庫（vault）内を検索し、一致するファイルや見出しを一覧表示します。（注意: これはウェブサーバー上でホストされているエクスポートでのみ利用可能です）",
      placeholder: "検索..."
    },
    linkPreview: {
      title: "リンクプレビュー",
      description: "他のドキュメントへの内部リンクにホバーしたときに、ホバープレビューを表示します。"
    },
    themeToggle: {
      title: "テーマ切り替え",
      description: "ダークテーマとライトテーマを動的に切り替えることができます。"
    },
    customHead: {
      title: "カスタム HTML / JS",
      description: "カスタムJSやCSSを含めることができる、指定された .html ファイルをページに挿入します。",
      info_sourcePath: "組み込まれるソース .html ファイルへのローカルパス。",
      validationError: ".html ファイルへのパスである必要があります"
    },
    backlinks: {
      title: "バックリンク",
      description: "現在開いているドキュメントにリンクしているすべてのドキュメントを表示します。"
    },
    tags: {
      title: "タグ",
      description: "現在開いているドキュメントのタグを表示します。",
      info_showInlineTags: "ドキュメントの内部で定義されたタグをページの上部に表示する。",
      info_showFrontmatterTags: "ドキュメントのフロントマターで定義されたタグをページの上部に表示する。"
    },
    aliases: {
      title: "エイリアス",
      description: "現在開いているドキュメントのエイリアスを表示します。"
    },
    properties: {
      title: "プロパティ",
      description: "現在開いているドキュメントのすべてのプロパティをテーブルとして表示します。",
      info_hideProperties: "プロパティビューから非表示にするプロパティのリスト"
    },
    rss: {
      title: "RSS",
      description: "エクスポートされたサイトのRSSフィードを生成します。",
      info_siteUrl: "このサイトがホストされるURL",
      info_siteUrlPlaceholder: "https://example.com/mysite",
      info_authorName: "サイトの著者の名前"
    },
    styleOptionsSection: {
      title: "スタイルオプション",
      description: "エクスポートにどのスタイルを含めるかを設定します。"
    },
    makeOfflineCompatible: {
      title: "オフライン互換にする",
      description: "ページをオフラインで表示できるように、またはウェブサイトがCDNに依存しないように、オンラインのアセット、画像、スクリプトをダウンロードします。"
    },
    includePluginCSS: {
      title: "プラグインからのCSSを含める",
      description: "エクスポートされるHTMLに、以下のプラグインのCSSを含めます。プラグインの機能が正しくレンダリングされない場合は、このリストにプラグインを追加してみてください。CSSが増えるとページの読み込み時間が長くなるため、特に問題に気づかない限りプラグインの追加は避けてください。"
    },
    includeStyleCssIds: {
      title: "IDを持つスタイルを含める",
      description: "エクスポートされるHTMLに、以下のIDを持つスタイルタグのCSSを含めます。"
    },
    generalSettingsSection: {
      title: "一般設定",
      description: "ファビコンやサイトのメタデータなどのシンプルな設定を制御します。"
    },
    favicon: {
      title: "ファビコン画像",
      description: "サイトのファビコンへのローカルパス。"
    },
    siteName: {
      title: "サイト名",
      description: "保管庫（vault）またはエクスポートされたサイトの名前。"
    },
    iconEmojiStyle: {
      title: "アイコンの絵文字スタイル",
      description: "カスタムアイコンに使用する絵文字のスタイル。"
    },
    themeName: {
      title: "テーマ",
      description: "エクスポートに使用する、インストール済みのテーマ。"
    },
    exportSettingsSection: {
      title: "エクスポート設定",
      description: "リンクの生成方法の制御など、より技術的なエクスポート設定を制御します。"
    },
    relativeHeaderLinks: {
      title: "相対ヘッダーリンクを使用する",
      description: "絶対リンクのわりに見出しに相対リンクを使用します。"
    },
    slugifyPaths: {
      title: "パスをスラッグ化する",
      description: "すべてのパスとファイル名をウェブスタイル（小文字、スペースなし）にします。"
    },
    addPageIcon: {
      title: "ページアイコンを追加する",
      description: "ファイルのアイコンをページヘッダーに追加します。"
    },
    obsidianSettingsSection: {
      title: "Obsidian設定",
      description: "Obsidian内でのプラグインの機能を制御します。"
    },
    logLevel: {
      title: "ログレベル",
      description: "コンソールに表示するロギングのレベルを設定します。"
    },
    titleProperty: {
      title: "タイトルプロパティ",
      description: "ドキュメントのタイトルとして使用するプロパティ。"
    }
  }
}
