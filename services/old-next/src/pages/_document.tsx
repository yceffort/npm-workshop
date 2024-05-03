import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

interface Props {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  render() {
    const {
      props: { styleTags },
    } = this

    return (
      <Html lang="ko">
        <Head>
          {styleTags}
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="ko_KR" />

          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                'body { margin: 0 !important; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-touch-callout: none; }',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}