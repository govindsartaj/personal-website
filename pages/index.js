import Image from 'next/image'

export default function Home({ darkMode }) {
  return (
    <div className="h-screen dark:bg-darkbg">
      <div className="px-4 pt-16 mx-auto text-gray-900 max-w-7xl sm:px-6 lg:px-8 dark:text-white">
        <div class="rounded-full h-24 w-24 flex items-center justify-center bg-darkbg">
          <Image src='https://github.com/govindsartaj/personal-website/blob/master/assets/govind.jpg'
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
