import Link from 'next/link'

const Page = (props) => {
  return (
    <>
      <div>page</div>
      <Link href="/articles">
        <a>articles</a>
      </Link>
      <br />
      <br />
      <Link href="/test">
        <a>test</a>
      </Link>
    </>
  )
}

export default Page
