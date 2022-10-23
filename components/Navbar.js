import Link from 'next/link'
export default function Navbar() {
    return (
      <>
          <ul>
              <li> <Link href="/"><a>Home</a></Link> </li>
              <li> <Link href="/cart"><a>Cart</a></Link> </li>
              <li> <Link href="/favorite"><a>Favorite</a></Link> </li>
              <li> <Link href="/profile"><a>Profile</a></Link> </li>
              <li> <Link href="/help"><a>Help</a></Link> </li>
          </ul>
      </>
    )
  }
  