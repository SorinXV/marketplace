import Link from 'next/link'
export default function Navbar() {
    return (
      <div className='bg-teal-700 flex justify-between p-4 pr-20 pl-20'>
        <li className='m-2 font-extrabold'>Market<span className='text-emerald-300 font-black'>Place</span></li>
          <ul className='flex font-bold'>
              <li className='m-2'> <Link href="/"><a>Home</a></Link> </li>
              <li className='m-2'> <Link href="/explore"><a>Explore</a></Link> </li>
              <li className='m-2'> <Link href="/saved"><a>Saved</a></Link> </li>
              <li className='m-2'> <Link href="/help"><a>Help</a></Link> </li>
          </ul>
        </div>
    )
  }
  