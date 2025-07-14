
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Users } from "lucide-react";

interface Campaign {
  id: string;
  brand: string;
  title: string;
  description: string;
  payment: string;
  deadline: string;
  status?: string;
  requirements: string;
  tags: string[];
  applicants?: number;
}

interface CampaignCardProps {
  campaign: Campaign;
  type: 'active' | 'available';
}

const CampaignCard = ({ campaign, type }: CampaignCardProps) => {
  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{campaign.title}</CardTitle>
            <CardDescription className="text-base">{campaign.brand}</CardDescription>
          </div>
          <Badge className={type === 'active' ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
            {campaign.payment}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{campaign.description}</p>
        <div className="flex flex-wrap gap-2">
          {campaign.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {campaign.applicants && (
          <div className="text-sm text-gray-600">
            <Users className="h-4 w-4 inline mr-1" />
            {campaign.applicants} creators applied
          </div>
        )}
        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-gray-600">
            <Calendar className="h-4 w-4 inline mr-1" />
            Due: {campaign.deadline}
          </div>
          <div className="flex space-x-2">
            {type === 'active' ? (
              <>
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Message
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  View Details
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  Apply Now
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;
