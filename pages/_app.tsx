import { AppProps } from 'next/app'

const _App = (props: AppProps & { statusCode: boolean | number }) => {
  return (
    <div id="page" className="fixed inset-0 w-full h-full m-auto">
      <div className="w-full h-full scroller">
        <props.Component {...{ ...props.pageProps }} />
      </div>
    </div>
  )
}

export default _App
