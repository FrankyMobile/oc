
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Building2, Shield, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { BRAND_CONFIG } from "@/config/brand";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'creator' | 'brand'>('creator');
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    brandName: ''
  });
  
  const { signIn, signUp, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/welcome');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'register') {
      if (formData.password !== formData.confirmPassword) {
        return;
      }

      const userData = {
        first_name: userType === 'creator' ? formData.firstName : undefined,
        last_name: userType === 'creator' ? formData.lastName : undefined,
        brand_name: userType === 'brand' ? formData.brandName : undefined,
        user_type: userType
      };

      await signUp(formData.email, formData.password, userData);
    } else {
      await signIn(formData.email, formData.password);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_70%)]"></div>
        <div className="text-center relative z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_70%)]"></div>
      
      <div className="w-full max-w-md relative z-10">
        <Button 
          variant="ghost" 
          onClick={handleBackToHome}
          className="mb-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 text-sm sm:text-base"
        >
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Back to Home
        </Button>

        <Card className="border-orange-100 shadow-2xl bg-white/95 backdrop-blur-sm rounded-2xl">
          <CardHeader className="text-center p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
              {mode === 'login' ? 'Welcome Back' : `Join ${BRAND_CONFIG.name}`}
            </CardTitle>
            <CardDescription className="text-gray-600 text-sm sm:text-base">
              {mode === 'login' 
                ? 'Sign in to your account' 
                : 'Create your account to get started'
              }
            </CardDescription>
          </CardHeader>

          <CardContent className="p-4 sm:p-6">
            <Tabs value={mode} onValueChange={(value) => setMode(value as 'login' | 'register')}>
              <TabsList className="grid w-full grid-cols-2 bg-orange-50">
                <TabsTrigger value="login" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-sm sm:text-base">Sign In</TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-sm sm:text-base">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 text-sm sm:text-base">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 text-sm sm:text-base">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        required
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-500 hover:text-orange-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-3 w-3 sm:h-4 sm:w-4" /> : <Eye className="h-3 w-3 sm:h-4 sm:w-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200 rounded-full text-sm sm:text-base">
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register" className="space-y-4 mt-4">
                {/* Mobile-First User Type Selection */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <Card 
                    className={`cursor-pointer transition-all ${userType === 'creator' ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:bg-orange-50/50'} border-orange-200`}
                    onClick={() => setUserType('creator')}
                  >
                    <CardContent className="p-3 sm:p-4 text-center">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-orange-500" />
                      <p className="font-medium text-gray-700 text-sm sm:text-base">Influencer</p>
                    </CardContent>
                  </Card>
                  
                  <Card 
                    className={`cursor-pointer transition-all ${userType === 'brand' ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:bg-orange-50/50'} border-orange-200`}
                    onClick={() => setUserType('brand')}
                  >
                    <CardContent className="p-3 sm:p-4 text-center">
                      <Building2 className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-orange-500" />
                      <p className="font-medium text-gray-700 text-sm sm:text-base">Brand</p>
                    </CardContent>
                  </Card>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {userType === 'creator' ? (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 text-sm sm:text-base">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 text-sm sm:text-base">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="brandName" className="text-gray-700 text-sm sm:text-base">Brand Name</Label>
                      <Input 
                        id="brandName" 
                        placeholder="Your Brand Name"
                        value={formData.brandName}
                        onChange={(e) => handleInputChange('brandName', e.target.value)}
                        required
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 text-sm sm:text-base">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 text-sm sm:text-base">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        required
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-500 hover:text-orange-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-3 w-3 sm:h-4 sm:w-4" /> : <Eye className="h-3 w-3 sm:h-4 sm:w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-700 text-sm sm:text-base">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      required
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
                    />
                  </div>

                  <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-xl border border-orange-200">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-medium text-gray-700">Email Verification Required</p>
                      <p className="text-gray-600">You'll receive a confirmation email after registration</p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200 rounded-full text-sm sm:text-base">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
