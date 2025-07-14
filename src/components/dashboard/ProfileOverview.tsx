
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const ProfileOverview = () => {
  const { user } = useAuth();

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Profile Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold">{user?.email?.split('@')[0]}</h3>
          <p className="text-sm text-gray-600">Creator</p>
          <div className="flex justify-center mt-2">
            <Badge className="bg-yellow-100 text-yellow-800">
              <Star className="h-3 w-3 mr-1" />
              4.9 Rating
            </Badge>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Profile Completion</span>
              <span>85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          
          <Button className="w-full" variant="outline">
            Complete Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileOverview;
