
import React from "react";

interface FeatureItemProps {
    icon: string;
    title: string;
    desc: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, desc }) => {
    return (
        <div className="text-center py-8">
            <div className="text-6xl mb-6">{icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed px-6">{desc}</p>
        </div>
    );
};

export default FeatureItem;