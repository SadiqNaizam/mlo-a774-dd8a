import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import AuthFormWrapper from '@/components/AuthFormWrapper';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would handle the form submission here,
    // for example, by calling an API to send the reset link.
    console.log('Password reset requested for email:', (event.target as HTMLFormElement).email.value);
    // Optionally, show a success toast message.
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AuthFormWrapper
          title="Forgot Your Password?"
          description="No problem. Enter your email address below and we'll send you a link to reset it."
          footer={
            <Link
              to="/" // Navigates to LoginPage as per App.tsx
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Remember your password? Login
            </Link>
          }
        >
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;