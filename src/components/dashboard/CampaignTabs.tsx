
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star } from "lucide-react";
import CampaignCard from "./CampaignCard";

const CampaignTabs = () => {
  const campaigns = [
    {
      id: "1",
      brand: "EcoLife",
      title: "Sustainable Living Challenge",
      description: "Promote eco-friendly products and sustainable lifestyle tips",
      payment: "$350",
      deadline: "Dec 15, 2024",
      status: "active",
      requirements: "3 Instagram posts, 1 Story series",
      tags: ["Lifestyle", "Eco-Friendly", "Health"]
    },
    {
      id: "2",
      brand: "TechGear",
      title: "Gaming Setup Showcase",
      description: "Feature our latest gaming peripherals in your setup",
      payment: "$500",
      deadline: "Dec 20, 2024",
      status: "active",
      requirements: "1 YouTube video, 2 Instagram posts",
      tags: ["Gaming", "Tech", "Review"]
    },
    {
      id: "3",
      brand: "FitLife",
      title: "New Year Fitness Challenge",
      description: "Promote our fitness app and workout programs",
      payment: "$275",
      deadline: "Jan 5, 2025",
      status: "pending",
      requirements: "5 Instagram posts, daily Stories",
      tags: ["Fitness", "Health", "App"]
    }
  ];

  const availableCampaigns = [
    {
      id: "4",
      brand: "StyleHub",
      title: "Winter Fashion Collection",
      description: "Showcase our latest winter fashion pieces",
      payment: "$400",
      deadline: "Dec 30, 2024",
      requirements: "3 Instagram posts, 1 Reel",
      tags: ["Fashion", "Winter", "Style"],
      applicants: 12
    },
    {
      id: "5",
      brand: "CoffeeCo",
      title: "Morning Routine Campaign",
      description: "Feature our coffee in your morning routine content",
      payment: "$200",
      deadline: "Jan 10, 2025",
      requirements: "2 Instagram posts, 3 Stories",
      tags: ["Lifestyle", "Coffee", "Morning"],
      applicants: 8
    }
  ];

  return (
    <Tabs defaultValue="active" className="space-y-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="active">Active Campaigns</TabsTrigger>
        <TabsTrigger value="available">Available</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>

      <TabsContent value="active" className="space-y-4">
        {campaigns.filter(c => c.status === 'active').map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} type="active" />
        ))}
      </TabsContent>

      <TabsContent value="available" className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Browse Campaigns</h3>
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
        
        {availableCampaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} type="available" />
        ))}
      </TabsContent>

      <TabsContent value="completed">
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <Star className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No completed campaigns yet</h3>
            <p className="text-gray-600">Your completed campaigns will appear here once you finish your first project.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CampaignTabs;
