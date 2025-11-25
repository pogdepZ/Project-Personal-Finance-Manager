import { Utensils, Bus, ShoppingCart, Receipt, Gamepad2, Gift, GraduationCap, Activity, User, Wallet, Award, TrendingUp } from 'lucide-react';


const iconMapping = {
  "utensils": <Utensils />,
  "bus": <Bus />,
  "shopping-cart": <ShoppingCart />,
  "receipt": <Receipt />,
  "gamepad-2": <Gamepad2 />,
  "gift": <Gift />,
  "graduation-cap": <GraduationCap />,
  "activity": <Activity />,
  "user": <User />,
  "wallet": <Wallet />,
  "award": <Award />,
  "trending-up": <TrendingUp />
};
export const getIcon = (name)=>{
    return iconMapping[name] || null;
}