
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Shield, Star, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { BRAND_CONFIG } from "@/config/brand";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate('/welcome');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    // Calculate weeks from now based on config
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + (BRAND_CONFIG.landing.countdown.weeksFromNow * 7));

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/signin');
  };

  const handleSignIn = () => {
    navigate('/signin');
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
    <div className="min-h-screen bg-white">
      {/* Mobile-First Navigation */}
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
              <Button 
                variant="ghost" 
                onClick={handleSignIn}
                className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 text-sm sm:text-base px-2 sm:px-4"
              >
                {BRAND_CONFIG.landing.ctaButtons.signIn}
              </Button>
              <Button 
                onClick={handleGetStarted} 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200 rounded-full px-3 sm:px-6 text-sm sm:text-base"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile-First Hero Section with Countdown */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 sm:pb-16">
          <div className="text-center">
            <Badge className="mb-6 sm:mb-8 bg-orange-100 text-orange-800 hover:bg-orange-100 border-orange-200 shadow-sm text-xs sm:text-sm">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              {BRAND_CONFIG.stats.trustedBy}
            </Badge>
            
            {/* Mobile-First Countdown Timer */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-2" />
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800">{BRAND_CONFIG.landing.countdown.title}</h3>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-orange-100 shadow-lg">
                  <div className="text-xl sm:text-3xl font-bold text-orange-600">{timeLeft.days}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Days</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-orange-100 shadow-lg">
                  <div className="text-xl sm:text-3xl font-bold text-orange-600">{timeLeft.hours}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Hours</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-orange-100 shadow-lg">
                  <div className="text-xl sm:text-3xl font-bold text-orange-600">{timeLeft.minutes}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Minutes</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-orange-100 shadow-lg">
                  <div className="text-xl sm:text-3xl font-bold text-orange-600">{timeLeft.seconds}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Seconds</div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
              {BRAND_CONFIG.landing.heroTitle.part1} <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{BRAND_CONFIG.landing.heroTitle.highlighted1}</span>
              <br />
              {BRAND_CONFIG.landing.heroTitle.part2} <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">{BRAND_CONFIG.landing.heroTitle.highlighted2}</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              {BRAND_CONFIG.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-200 rounded-full"
              >
                {BRAND_CONFIG.landing.ctaButtons.influencer}
              </Button>
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="w-full sm:w-auto bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600 text-base sm:text-lg px-6 sm:px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-200 rounded-full"
              >
                {BRAND_CONFIG.landing.ctaButtons.brand}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-First Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-white">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            {BRAND_CONFIG.landing.features.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {BRAND_CONFIG.landing.features.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          <Card className="border-orange-100 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
            <CardHeader className="p-4 sm:p-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-lg">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-gray-900">Secure & Verified</CardTitle>
              <CardDescription className="text-base sm:text-lg text-gray-600">
                Two-factor authentication and verified profiles ensure safe, trusted partnerships.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">2FA Security</span>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">Verified Profiles</span>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">Secure Payments</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-100 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
            <CardHeader className="p-4 sm:p-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-lg">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-gray-900">Perfect Matching</CardTitle>
              <CardDescription className="text-base sm:text-lg text-gray-600">
                AI-powered matching connects brands with creators who align with their values.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">Smart Filtering</span>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">Audience Insights</span>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">Brand Alignment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-100 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl md:col-span-1">
            <CardHeader className="p-4 sm:p-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-lg">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-gray-900">Real Results</CardTitle>
              <CardDescription className="text-base sm:text-lg text-gray-600">
                Track performance with detailed analytics and grow your organic reach.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">Performance Analytics</span>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">Growth Tracking</span>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-sm sm:text-base text-gray-700">ROI Insights</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile-First CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of creators and brands building authentic partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 text-base sm:text-lg px-6 sm:px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-200 rounded-full"
            >
              {BRAND_CONFIG.landing.ctaButtons.getStarted}
            </Button>
            <Button 
              size="lg" 
              onClick={handleSignIn}
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-200 rounded-full"
            >
              {BRAND_CONFIG.landing.ctaButtons.signIn}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
