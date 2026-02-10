import CompanionCardClient from '@/components/CompanionCardClient';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { getAllCompanions, getUserSessions, getUserBookmarkIds } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs/server';

const Page = async () => {
    const companions = await getAllCompanions({ limit: 3 });
    const user = await currentUser();
    const recentSessionsCompanions = user ? await getUserSessions(user.id, 10) : [];
    const bookmarkedIds = user ? await getUserBookmarkIds(user.id) : [];
    
    return (
        <main>
            <h1 className="text-2xl underline">
                Popular Companies
            </h1>
            <section className='home-section'> 
                {companions.map((companion)=>(
                    <CompanionCardClient
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                    isBookmarked={bookmarkedIds.includes(companion.id)}
                />
                ))}
            </section>
            <section className='home-section'>
                <CompanionsList 
                title = "Your Recent Sessions" 
                companions={recentSessionsCompanions} 
                classNames = "w-2/3 max-lg:w-full"  />
                <CTA />
            </section>
        </main>
    )
}
export default Page;