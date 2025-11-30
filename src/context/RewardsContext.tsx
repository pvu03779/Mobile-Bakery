import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface RewardsContextType {
  totalPoints: number;
  addPoints: (points: number) => void;
}

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export const RewardsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [totalPoints, setTotalPoints] = useState(0);

  // Load points from localStorage when user changes
  useEffect(() => {
    if (user) {
      const storedPoints = localStorage.getItem(`bonpas_points_${user.id}`);
      setTotalPoints(storedPoints ? parseInt(storedPoints) : 0);
    } else {
      setTotalPoints(0);
    }
  }, [user]);

  const addPoints = (points: number) => {
    if (user) {
      const newTotal = totalPoints + points;
      setTotalPoints(newTotal);
      localStorage.setItem(`bonpas_points_${user.id}`, newTotal.toString());
    }
  };

  return (
    <RewardsContext.Provider value={{ totalPoints, addPoints }}>
      {children}
    </RewardsContext.Provider>
  );
};

export const useRewards = () => {
  const context = useContext(RewardsContext);
  if (context === undefined) {
    throw new Error('useRewards must be used within a RewardsProvider');
  }
  return context;
};
