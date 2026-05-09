// import { NextResponse } from 'next/server'
// import { auth } from './lib/auth'
// import { headers } from 'next/headers'
// // import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export async function proxy(request) {

//     const session = await auth.api.getSession({
//     headers: await headers() // you need to pass the headers object.
// })

// if(!session){

//     return NextResponse.redirect(new URL('/authentication/login', request.url))
// }

// }
 
// // Alternatively, you can use a default export:
// // export default function proxy(request: NextRequest) { ... }
 
// export const config = {
//   matcher: ["/Profile","/Products/:path"],
// }


import { NextResponse } from 'next/server'
import { betterFetch } from '@better-fetch/fetch'

export async function proxy(request) {
  const { data: session } = await betterFetch('/api/auth/get-session', {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get('cookie') ?? '',
    },
  })

  if (!session) {
    const loginUrl = new URL('/authentication/login', request.url)
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/Profile", "/Products/:path"],
}