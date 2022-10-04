import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
              `,
            }}
          />
          <meta charSet='UTF-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            property='og:title'
            content='我的世界文明游戏'
            key='meta-title'
          />
          <meta
            property='og:description'
            content='文明游戏 是一个很棒的我的世界社会模拟服务器。'
            key='meta-description'
          />
          <meta property='og:image' content='/img/logo.png' />
          <meta property='og:locale' content='zh_CN' key='meta-locale' />
          <meta property='og:url' content='https://mc.chroma-gaming.xyz/' />
          <meta
            property='og:locale:alternate'
            content='zh_CN'
            key='meta-locale-alt'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
