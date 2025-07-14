
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'login' | 'register';
  onModeChange: (mode: 'login' | 'register') => void;
}

const AuthModal = ({ open, onOpenChange, mode, onModeChange }: AuthModalProps) => {
  const navigate = useNavigate();

  const handleRedirectToAuth = () => {
    onOpenChange(false);
    navigate('/signin');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Authentication Required
          </DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Please sign in or create an account to access CreatorFlow features.
          </p>
          
          <Button 
            onClick={handleRedirectToAuth}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Go to Authentication
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
