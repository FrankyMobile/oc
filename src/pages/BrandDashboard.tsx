
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Star, 
  Calendar, 
  MessageSquare,
  Instagram,
  Youtube,
  Twitter,
  Settings,
  Bell,
  Search,
  Filter,
  Plus,
  BarChart3,
  Target,
  Zap
} from "lucide-react";

const BrandDashboard = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);

  const stats = [
    { title: "Campaign Budget", value: "$12,500", change: "+8%", icon: DollarSign, color: "text-green-600" },
    { title: "Active Campaigns", value: "5", change: "+2", icon: TrendingUp, color: "text-blue-600" },
    { title: "Total Reach", value: "2.3M", change: "+15%", icon: Users, color: "text-purple-600" },
    { title: "Avg Engagement", value: "4.2%", change: "+0.3%", icon: Star, color: "text-yellow-600" }
  ];

  const campaigns = [
    {
      id: "1",
      title: "Winter Fashion Collection",
      description: "Showcase our latest winter fashion pieces with lifestyle creators",
      budget: "$2,500",
      deadline: "Dec 30, 2024",
      status: "active",
      applicants: 12,
      accepted: 3,
      reach: "450K",
      engagement: "3.8%",
      tags: ["Fashion", "Winter", "Style"]
    },
    {
      id: "2",
      title: "Gaming Setup Showcase",
      description: "Feature our gaming peripherals in creator setups and reviews",
      budget: "$3,000",
      deadline: "Dec 20, 2024",
      status: "active",
      applicants: 8,
      accepted: 2,
      reach: "320K",
      engagement: "4.2%",
      tags: ["Gaming", "Tech", "Review"]
    },
    {
      id: "3",
      title: "Fitness App Launch",
      description: "Promote our new fitness app with health and wellness creators",
      budget: "$4,000",
      deadline: "Jan 5, 2025",
      status: "pending",
      applicants: 15,
      accepted: 5,
      reach: "680K",
      engagement: "4.8%",
      tags: ["Fitness", "Health", "App"]
    }
  ];

  const topCreators = [
    {
      id: "1",
      name: "Sarah Chen",
      handle: "@sarahlifestyle",
      followers: "32.1K",
      engagement: "4.9%",
      rating: 4.9,
      categories: ["Lifestyle", "Tech"],
      avatar: "/placeholder.svg",
      platforms: ["instagram", "youtube", "twitter"]
    },
    {
      id: "2",
      name: "Mike Rodriguez",
      handle: "@mikegaming",
      followers: "45.2K",
      engagement: "3.7%",
      rating: 4.8,
      categories: ["Gaming", "Tech"],
      avatar: "/placeholder.svg",
      platforms: ["youtube", "twitch"]
    },
    {
      id: "3",
      name: "Emma Wilson",
      handle: "@emmafitness",
      followers: "28.9K",
      engagement: "5.2%",
      rating: 4.9,
      categories: ["Fitness", "Health"],
      avatar: "/placeholder.svg",
      platforms: ["instagram", "tiktok"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Brand Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, TechGear!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>TG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Campaigns */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="active" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="active">Active Campaigns</TabsTrigger>
                <TabsTrigger value="creators">Discover Creators</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Your Campaigns</h3>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Campaign
                  </Button>
                </div>

                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{campaign.title}</CardTitle>
                          <CardDescription className="text-base">{campaign.description}</CardDescription>
                        </div>
                        <Badge className={`${campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {campaign.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Budget</p>
                          <p className="font-semibold">{campaign.budget}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Applicants</p>
                          <p className="font-semibold">{campaign.applicants}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Reach</p>
                          <p className="font-semibold">{campaign.reach}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Engagement</p>
                          <p className="font-semibold">{campaign.engagement}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {campaign.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t">
                        <div className="text-sm text-gray-600">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Due: {campaign.deadline}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <BarChart3 className="h-4 w-4 mr-1" />
                            Analytics
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="creators" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Discover Creators</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4 mr-1" />
                      Search
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-1" />
                      Filter
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {topCreators.map((creator) => (
                    <Card key={creator.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={creator.avatar} />
                              <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold text-lg">{creator.name}</h4>
                              <p className="text-gray-600">{creator.handle}</p>
                              <div className="flex items-center space-x-4 mt-2 text-sm">
                                <div>
                                  <Users className="h-4 w-4 inline mr-1" />
                                  {creator.followers}
                                </div>
                                <div>
                                  <TrendingUp className="h-4 w-4 inline mr-1" />
                                  {creator.engagement}
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                  {creator.rating}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex space-x-2 mb-3">
                              {creator.platforms.includes('instagram') && (
                                <Instagram className="h-5 w-5 text-pink-600" />
                              )}
                              {creator.platforms.includes('youtube') && (
                                <Youtube className="h-5 w-5 text-red-600" />
                              )}
                              {creator.platforms.includes('twitter') && (
                                <Twitter className="h-5 w-5 text-blue-600" />
                              )}
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                View Profile
                              </Button>
                              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Contact
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {creator.categories.map((category) => (
                            <Badge key={category} variant="outline" className="text-xs">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <BarChart3 className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Campaign Analytics</h3>
                    <p className="text-gray-600 mb-4">Detailed analytics and insights for your campaigns will appear here.</p>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      View Full Analytics
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Quick Stats & Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Campaign
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Creators
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </Button>
              </CardContent>
            </Card>

            {/* Campaign Performance */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Winter Fashion</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Gaming Showcase</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Fitness App</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Content */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Sarah's Fashion Post</p>
                    <p className="text-xs text-gray-600">45K views, 4.2% engagement</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Mike's Gaming Review</p>
                    <p className="text-xs text-gray-600">32K views, 3.8% engagement</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Star className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Emma's Workout Video</p>
                    <p className="text-xs text-gray-600">28K views, 5.1% engagement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;
