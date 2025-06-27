import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormWrapperProps {
  /**
   * The main title for the authentication form (e.g., "Login" or "Create an account").
   */
  title: string;

  /**
   * A brief description or instruction displayed below the title.
   */
  description: string;

  /**
   * The main content of the form, typically input fields and a submit button.
   */
  children: React.ReactNode;

  /**
   * The footer content, usually containing links for navigation (e.g., to the sign-up or forgot-password page).
   */
  footer: React.ReactNode;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({ title, description, children, footer }) => {
  console.log('AuthFormWrapper loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-background p-4 sm:p-6">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter className="flex justify-center">
          {footer}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthFormWrapper;