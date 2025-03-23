import { dummyInterviews } from '@/constants';
import InterviewCard from './InterviewCard';

const YourInterviews = () => {
  return (
    <section className="flex flex-col gap-6 mt-8">
      <h2>Your Interviews</h2>

      <div className="interviews-section">
        {dummyInterviews.map((interview) => (
          <InterviewCard key={interview.id} {...interview} />
        ))}

        {/* <p>You haven&apo;t taken any interviews yet.</p> */}
      </div>
    </section>
  );
};

export default YourInterviews;
