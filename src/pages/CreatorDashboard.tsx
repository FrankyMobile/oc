
import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsGrid from "@/components/dashboard/StatsGrid";
import CampaignTabs from "@/components/dashboard/CampaignTabs";
import ProfileOverview from "@/components/dashboard/ProfileOverview";
import SocialMediaStats from "@/components/dashboard/SocialMediaStats";
import RecentActivity from "@/components/dashboard/RecentActivity";

const CreatorDashboard = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <DashboardHeader />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <StatsGrid />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Campaigns */}
            <div className="lg:col-span-2">
              <CampaignTabs />
            </div>

            {/* Right Column - Profile & Social Stats */}
            <div className="space-y-6">
              <ProfileOverview />
              <SocialMediaStats />
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default CreatorDashboard;
