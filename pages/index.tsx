import initializeBasicAuth from 'nextjs-basic-auth'

const users = [{ password: 'test', user: 'test' }]
const basicAuthCheck = initializeBasicAuth({ users })

export async function getServerSideProps(ctx) {
  const { req, res } = ctx

  try {
    console.log('try')
    basicAuthCheck(req, res)
  } catch (e) {
    console.log('err')
    console.log({ e })
  }

  return {
    props: {},
  }
}

const Page = () => {
  return (
    <>
      <div>page</div>
    </>
  )
}

export default Page
