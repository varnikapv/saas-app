'use client';

import { useState, useTransition } from 'react';
import Image from "next/image";
import Link from "next/link";
import { addBookmark, removeBookmark } from '@/lib/actions/companion.actions';
import { usePathname } from 'next/navigation';

interface CompanionCardClientProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  isBookmarked: boolean;
}

const CompanionCardClient = ({ 
  id, 
  name, 
  topic, 
  subject, 
  duration, 
  color, 
  isBookmarked: initialBookmarked 
}: CompanionCardClientProps) => {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const handleBookmarkClick = async () => {
    setIsBookmarked(!isBookmarked);
    
    startTransition(async () => {
      try {
        if (isBookmarked) {
          await removeBookmark(id, pathname);
        } else {
          await addBookmark(id, pathname);
        }
      } catch (error) {
        setIsBookmarked(isBookmarked);
      }
    });
  };

  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button 
          className="companion-bookmark"
          onClick={handleBookmarkClick}
          disabled={isPending}
        >
          <Image 
            src={isBookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"}
            alt="Bookmark Icon" 
            width={12.5} 
            height={15}
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image 
          src="/icons/clock.svg" 
          alt="Clock Icon" 
          width={13} 
          height={13} 
        />
        <span className="text-sm">{duration} minutes</span>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCardClient;
