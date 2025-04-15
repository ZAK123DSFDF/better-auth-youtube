// components/auth/GoogleAuthButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/ui/google-icon";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface GoogleAuthButtonProps {
  action: "login" | "signup";
  redirectTo?: string;
  buttonText?: string;
}

export const GoogleAuthButton = ({
  action = "login",
  redirectTo = "/dashboard",
  buttonText = "Continue with Google",
}: GoogleAuthButtonProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleAuth = async () => {
    console.log("google auth clicked");
  };

  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center gap-2"
      onClick={handleGoogleAuth}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <GoogleIcon className="w-4 h-4" />
          <span>{buttonText}</span>
        </>
      )}
    </Button>
  );
};
