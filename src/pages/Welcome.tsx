
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, Heart, Star, Users } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { BRAND_CONFIG } from "@/config/brand";

const Welcome = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Mobile-First Header with Sign Out */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-1.5 sm:p-2 rounded-lg shadow-lg">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs sm:text-sm">
                  {user?.email?.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 text-sm sm:text-base px-2 sm:px-4"
              >
                <LogOut className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile-First Main Welcome Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_70%)]"></div>
        
        <Card className="max-w-2xl w-full border-orange-100 shadow-2xl bg-white/95 backdrop-blur-sm rounded-2xl relative z-10">
          <CardContent className="p-6 sm:p-12 text-center">
            {/* African Image - Mobile Responsive */}
            <div className="mb-6 sm:mb-8">
              <div className="relative inline-block">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl">
                  <Users className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                </div>
                {/* Mobile-First Decorative elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full opacity-80 shadow-lg"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full opacity-60 shadow-lg"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-orange-300 rounded-full opacity-40 shadow-lg"></div>
              </div>
            </div>

            {/* Mobile-First Akwaaba Greeting */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">
                {BRAND_CONFIG.welcome.greeting}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                {BRAND_CONFIG.welcome.congratulations}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-2">
                {BRAND_CONFIG.welcome.subtitle}
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                {BRAND_CONFIG.welcome.description}
              </p>
            </div>

            {/* Mobile-First Decorative African-inspired elements */}
            <div className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-orange-500" />
                <span className="text-sm sm:text-base text-gray-700">Authentic</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Star className="h-4 w-4 sm:h-6 sm:w-6 text-orange-500" />
                <span className="text-sm sm:text-base text-gray-700">Partnerships</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <User className="h-4 w-4 sm:h-6 sm:w-6 text-orange-500" />
                <span className="text-sm sm:text-base text-gray-700">Community</span>
              </div>
            </div>

            {/* Mobile-First User Info */}
            <div className="bg-orange-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-orange-100">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg sm:text-xl">
                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 text-xs sm:text-sm">Welcome</p>
                  <p className="text-gray-900 font-semibold text-base sm:text-lg break-all sm:break-normal">{user?.email}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{BRAND_CONFIG.welcome.memberSince}</p>
                </div>
              </div>
            </div>

            {/* Mobile-First Coming Soon Message */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 sm:p-6 border border-orange-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{BRAND_CONFIG.welcome.comingSoonTitle}</h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                {BRAND_CONFIG.welcome.comingSoonDescription}
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Welcome;
