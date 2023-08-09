import Link from "next/link";
import { TrackLastViewed } from "../contexts/navigation";
import { Suspense } from 'react'

export default function Home() {

  return (
    <Suspense>
      <div>
          <TrackLastViewed pageName="home" />
          <Link href="/test">Go to test.</Link>
      </div>
    </Suspense>
  )
}
