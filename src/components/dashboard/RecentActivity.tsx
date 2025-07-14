
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Share2, Eye } from "lucide-react";

const RecentActivity = () => {
  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-3 p-2">
          <div className="bg-green-100 p-2 rounded-full">
            <Heart className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Campaign approved</p>
            <p className="text-xs text-gray-600">EcoLife - 2 hours ago</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-2">
          <div className="bg-blue-100 p-2 rounded-full">
            <Share2 className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Content posted</p>
            <p className="text-xs text-gray-600">Instagram - 1 day ago</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-2">
          <div className="bg-purple-100 p-2 rounded-full">
            <Eye className="h-4 w-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Profile viewed</p>
            <p className="text-xs text-gray-600">TechGear - 2 days ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
