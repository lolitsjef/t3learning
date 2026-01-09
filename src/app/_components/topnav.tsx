import { SignedOut, SignedIn, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'

export function TopNav() {
  return  (
    <nav className="w-full flex items-center justify-between p-4 text-x1 font-semibold border-b">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </nav>
  );}