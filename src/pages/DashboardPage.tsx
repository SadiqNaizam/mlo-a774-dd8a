import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  // Trigger a welcome toast on component mount, as per the user journey
  useEffect(() => {
    // Check for a flag to prevent toast on every visit, for a better UX
    // For this example, we'll show it every time the page loads.
    toast.success("Welcome!", {
      description: "You have successfully logged in.",
      duration: 5000,
    });
  }, []);

  const handleLogout = () => {
    // In a real app, you would also clear authentication tokens/state
    toast.info("You have been logged out.");
    navigate('/'); // Navigate to the login page as defined in App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-lg shadow-xl">
          <CardHeader className="items-center text-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold">Dashboard</CardTitle>
            <CardDescription className="text-lg">
              Welcome back, you are successfully authenticated.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-center text-muted-foreground px-4">
              This is your secure area. From here you can access all the features of the application. The header above also contains a user menu with a logout option.
            </p>
            <Button 
              onClick={handleLogout} 
              variant="destructive" 
              className="w-full max-w-xs"
            >
              Log Out
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;