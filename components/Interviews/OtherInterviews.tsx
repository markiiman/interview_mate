import { dummyInterviews } from '@/constants';
import InterviewCard from './InterviewCard';

const OtherInterviews = () => {
  return (
    <section className="flex flex-col gap-6 mt-8">
      <h2>Take an Interview</h2>

      <div className="interviews-section">
        {dummyInterviews.map((interview) => (
          <InterviewCard key={interview.id} {...interview} />
        ))}
      </div>
    </section>
  );
};

export default OtherInterviews;
