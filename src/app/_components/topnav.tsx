"use client";

import { SignedOut, SignedIn, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'
import { UploadButton } from '../utils/uploadthing';
import { useRouter } from 'next/navigation';

export function TopNav() {
    const router = useRouter();
    
    return (
        <nav className="w-full flex items-center justify-between p-4 text-x1 font-semibold border-b">
            <div>Gallery</div>
            <div className = "flex flex-row gap-4">
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UploadButton 
                      endpoint="imageUpload"
                      onClientUploadComplete={() => {
                        router.refresh();  // This refreshes the page data
                      }}
                    />
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
  );
}