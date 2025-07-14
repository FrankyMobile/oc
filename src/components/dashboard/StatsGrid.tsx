
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Users, Star } from "lucide-react";

const StatsGrid = () => {
  const stats = [
    { title: "Total Earnings", value: "$2,450", change: "+12%", icon: DollarSign, color: "text-green-600" },
    { title: "Active Campaigns", value: "3", change: "+1", icon: TrendingUp, color: "text-blue-600" },
    { title: "Total Followers", value: "47.2K", change: "+2.3K", icon: Users, color: "text-purple-600" },
    { title: "Rating", value: "4.9", change: "+0.1", icon: Star, color: "text-yellow-600" }
  ];

  return (
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
  );
};

export default StatsGrid;
