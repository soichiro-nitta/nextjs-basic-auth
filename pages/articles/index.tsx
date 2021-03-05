import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div>articles page</div>
      <Link
        href={{
          pathname: '/articles/[id]',
          query: { id: 'my-post' },
        }}
      >
        <a>mypost page</a>
      </Link>
    </>
  )
}

export default Page
