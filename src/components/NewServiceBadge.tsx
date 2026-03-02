import React from 'react';

interface NewServiceBadgeProps {
  activationDate?: string;
  expiryMonths?: number;
}

const NewServiceBadge: React.FC<NewServiceBadgeProps> = ({
  activationDate = '2026-03-02',
  expiryMonths = 6
}) => {
  const isNew = () => {
    if (!activationDate) return true;

    const activation = new Date(activationDate);
    const now = new Date();
    const monthsDiff = (now.getFullYear() - activation.getFullYear()) * 12 +
                       (now.getMonth() - activation.getMonth());

    return monthsDiff < expiryMonths;
  };

  if (!isNew()) return null;

  return (
    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
      NEW
    </div>
  );
};

export default NewServiceBadge;
