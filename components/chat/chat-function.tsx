'use client';

import PlanGeneration from '@/components/function-button/plan-generation';
import QuestionGeneration from '@/components/function-button/question-generation';
import SimilarQuestions from '@/components/function-button/similar-questions';

type ChatFuctionProps = {
  userType: 'student' | 'teacher';
};

const ChatFunction: React.FC<ChatFuctionProps> = ({ userType }) => {
  return (
    <div className="fixed bottom-[15.5vh] flex h-[5vh] w-full flex-col">
      <div className="h-[0.1vh] w-full bg-gray-700"></div>
      {userType === 'student' && <SimilarQuestions />}
      {userType === 'teacher' && (
        <div className="flex">
          <PlanGeneration /> <QuestionGeneration />
        </div>
      )}
    </div>
  );
};

export default ChatFunction;
