import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, label, bgColor }) => {
  return (
    <div className="relative">
      <div
        className={`absolute inset-0 ${bgColor} rounded-3xl rotate-[-3deg]`}
      ></div>
      <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-3xl border-0 flex flex-col gap-10 ">
        <div> {icon}</div>
        <h3 className="text-xl font-semibold mb-2">{label}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
