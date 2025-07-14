
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_70%)]"></div>
      
      <Card className="max-w-md w-full border-orange-100 shadow-2xl bg-white/95 backdrop-blur-sm rounded-2xl relative z-10">
        <CardContent className="p-8 sm:p-12 text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl">
            <div className="text-3xl sm:text-4xl">🔍</div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-4">Page Not Found</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          
          <Button 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200 rounded-full px-6 sm:px-8 text-sm sm:text-base"
          >
            <Home className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Return to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
