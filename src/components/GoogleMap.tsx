import React from 'react';
import { MapPin as MapPinIcon, ExternalLink } from 'lucide-react';

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className }: GoogleMapProps) {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Apollo%20Clinic%20Basti,%20Station%20Road,%20Basti%20272002&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps?daddr=Railway+Station+Rd,+near+Navin+Fal+Mandi,+Basti,+Uttar+Pradesh+272001";

  return (
    <div className={`relative w-full h-full text-left overflow-hidden ${className || ''}`}>
      <iframe
        title="Apollo Clinic Basti Location Map"
        src={mapEmbedUrl}
        className="w-full h-full border-0 absolute inset-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      {/* Floating Action Overlay */}
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <a 
          href={directionsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-white rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl transition-all scale-100 hover:scale-105 active:scale-95"
        >
          <MapPinIcon size={12} />
          <span>Get Directions</span>
          <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
}

