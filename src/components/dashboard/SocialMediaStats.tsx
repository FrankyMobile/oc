
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Youtube, Twitter } from "lucide-react";

const SocialMediaStats = () => {
  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Social Media Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Instagram className="h-6 w-6 text-pink-600" />
            <div>
              <p className="font-medium">Instagram</p>
              <p className="text-sm text-gray-600">32.1K followers</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-600">+2.3%</p>
            <p className="text-xs text-gray-500">this week</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Youtube className="h-6 w-6 text-red-600" />
            <div>
              <p className="font-medium">YouTube</p>
              <p className="text-sm text-gray-600">15.1K subscribers</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-600">+1.8%</p>
            <p className="text-xs text-gray-500">this week</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Twitter className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-medium">Twitter</p>
              <p className="text-sm text-gray-600">8.9K followers</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-600">+0.9%</p>
            <p className="text-xs text-gray-500">this week</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaStats;
