import React from 'react';

import { ReactComponent as QuizIllustration1Q } from '../images/quiz/illustrations/1/illustration.svg';
import { ReactComponent as QuizIllustration1S } from '../images/quiz/illustrations/1/illustration-success.svg';
import { ReactComponent as QuizIllustration1F } from '../images/quiz/illustrations/1/illustration-failure.svg';
import { ReactComponent as QuizIllustration2Q } from '../images/quiz/illustrations/2/illustration.svg';
import { ReactComponent as QuizIllustration2S } from '../images/quiz/illustrations/2/illustration-success.svg';
import { ReactComponent as QuizIllustration2F } from '../images/quiz/illustrations/2/illustration-failure.svg';
import { ReactComponent as QuizIllustration3Q } from '../images/quiz/illustrations/3/illustration.svg';
import { ReactComponent as QuizIllustration3S } from '../images/quiz/illustrations/3/illustration-success.svg';
import { ReactComponent as QuizIllustration3F } from '../images/quiz/illustrations/3/illustration-failure.svg';
import { ReactComponent as QuizIllustration4Q } from '../images/quiz/illustrations/4/illustration.svg';
import { ReactComponent as QuizIllustration4S } from '../images/quiz/illustrations/4/illustration-success.svg';
import { ReactComponent as QuizIllustration4F } from '../images/quiz/illustrations/4/illustration-failure.svg';
import { ReactComponent as QuizIllustration5Q } from '../images/quiz/illustrations/5/illustration.svg';
import { ReactComponent as QuizIllustration5S } from '../images/quiz/illustrations/5/illustration-success.svg';
import { ReactComponent as QuizIllustration5F } from '../images/quiz/illustrations/5/illustration-failure.svg';

const quizIllustrations = {
  "1": {
    "question": <QuizIllustration1Q />,
    "success": <QuizIllustration1S />,
    "failure": <QuizIllustration1F />
  },
  "2": {
    "question": <QuizIllustration2Q />,
    "success": <QuizIllustration2S />,
    "failure": <QuizIllustration2F />
  },
  "3": {
    "question": <QuizIllustration3Q />,
    "success": <QuizIllustration3S />,
    "failure": <QuizIllustration3F />
  },
  "4": {
    "question": <QuizIllustration4Q />,
    "success": <QuizIllustration4S />,
    "failure": <QuizIllustration4F />
  },
  "5": {
    "question": <QuizIllustration5Q />,
    "success": <QuizIllustration5S />,
    "failure": <QuizIllustration5F />
  }
};

export default quizIllustrations; 