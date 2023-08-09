import Link from "next/link";
import { TrackLastViewed } from "../../contexts/navigation";
import { Suspense } from "react";

export default function Test() {
    return (
      <Suspense>
        <div>
          <TrackLastViewed pageName="test" />
            Test <Link href="/">Go back</Link>
        </div>
      </Suspense>
    )
  }
