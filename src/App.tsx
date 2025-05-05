import React, { useState } from 'react';
import { Trophy, ArrowRight, RotateCcw } from 'lucide-react';

// Define athlete profiles
const athletes = {
  serena: {
    name: "Serena Williams",
    nickname: "The Warrior Queen",
    traits: ["Fierce determination", "Mental toughness", "Graceful power", "Unapologetic confidence"],
    quote: "You have to believe in yourself when no one else does.",
    image: "https://imageio.forbes.com/specials-images/imageserve/62ff904c40fd9f429dce7c7a/2014-Brisbane-International---Day-7/960x0.jpg?format=jpg",
    whyMessage: "Why you got her: You're relentless, composed under pressure, and always pushing boundaries."
  },
  bolt: {
    name: "Usain Bolt",
    nickname: "The Lightning Bolt",
    traits: ["Explosive speed", "Showmanship", "Relaxed confidence", "Natural talent"],
    quote: "I don't think limits.",
    image: "https://i.guim.co.uk/img/static/sys-images/Sport/Pix/columnists/2012/8/6/1344236039463/Usain-Bolt-001.jpg?width=620&dpr=2&s=none&crop=none",
    whyMessage: "Why you got him: You bring energy to every room and love to shine when the spotlight hits."
  },
  lasso: {
    name: "Ted Lasso",
    nickname: "The Eternal Optimist",
    traits: ["Unwavering positivity", "Emotional intelligence", "Team-building", "Growth mindset"],
    quote: "Be curious, not judgmental.",
    image: "https://www.cnet.com/a/img/resize/79488c177e6466fdff9f1d493a092deb8aba69f0/hub/2023/02/14/cab34e99-89c1-4e3d-be19-7ba607fd374e/apple-tv-ted-lasso-key-art-16-9.png?auto=webp&fit=crop&height=675&width=1200",
    whyMessage: "Why you got him: You're the glue that holds the team together. Joy is your superpower."
  },
  jordan: {
    name: "Michael Jordan",
    nickname: "The Alpha Competitor",
    traits: ["Relentless work ethic", "Competitive fire", "Strong Determination", "Disciplined"],
    quote: "I can accept failure, but I can't accept not trying.",
    image: "https://media.dunkest.com/2024/11/25181722/cover-sito-dunkest.jpg",
    whyMessage: "Why you got him: You aim high, work hard, and never back down from a challenge."
  },
  simone: {
    name: "Simone Biles",
    nickname: "The Graceful Powerhouse",
    traits: ["Boundary-pushing innovation", "Mental resilience", "Technical precision", "Self-advocacy"],
    quote: "I'd rather regret the risk that didn't work out than the chances I didn't take.",
    image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-2164046088-66aa19c07e63e.jpg?crop=1xw:0.843644544431946xh;center,top&resize=1200:*",
    whyMessage: "Why you got her: You carry strength with grace and know when to prioritize yourself."
  },
  rodman: {
    name: "Dennis Rodman",
    nickname: "The Wild Card",
    traits: ["Unapologetic individuality", "Specialized excellence", "Relentless energy", "Unpredictability"],
    quote: "I just do what I do. I just go out there and be me.",
    image: "https://people.com/thmb/w2Krk8DdbYrsdu7WkQmaMZoXYew=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(979x539:981x541):format(webp)/dennis-rodman-1-5cd0f61b2ac34f7793682eabc837877e.jpg",
    whyMessage: "Why you got him: You're unapologetically yourself and make the game unforgettable."
  },
  lin: {
    name: "Jeremy Lin",
    nickname: "The Humble Trailblazer",
    traits: ["Perseverance", "Humility", "Adaptability", "Cultural bridge-building"],
    quote: "I'm not playing for other people; if I start thinking in those terms I would put too much pressure on myself.",
    image: "https://nbcsports.brightspotcdn.com/dims4/default/07ff97e/2147483647/strip/true/crop/916x515+0+1/resize/1440x810!/format/webp/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F02%2F20%2F31274943b2e6a3c289519dce186f%2Fgettyimages-1227914503-e1600177487464.jpg",
    whyMessage: "Why you got him: You lead with heart, break barriers without needing the spotlight, and keep showing up no matter the odds."
  },
  honda: {
    name: "Keisuke Honda",
    nickname: "The Relentless Innovator",
    traits: ["Versatility", "Global mindset", "Entrepreneurial spirit", "Strategic vision"],
    quote: "Dreams are not what you see in your sleep. Dreams are things which do not let you sleep.",
    image: "https://content.api.news/v3/images/bin/45aae788eeb0b1455b69e865bbc9ea94?width=768",
    whyMessage: "Why you got him: You're always evolving—pushing past limits, reinventing yourself, and never losing sight of your goals."
  }
};

// Define quiz questions and answers
const questions = [
  {
    question: "How do you approach challenges?",
    options: [
      { text: "Head-on with fierce determination", athleteIds: ["serena", "jordan"] },
      { text: "With optimism and a smile", athleteIds: ["lasso", "bolt"] },
      { text: "By finding my own unique path", athleteIds: ["rodman", "honda"] },
      { text: "With quiet persistence and hard work", athleteIds: ["lin", "simone"] }
    ]
  },
  {
    question: "What's your leadership style?",
    options: [
      { text: "Lead by example with excellence", athleteIds: ["jordan", "simone"] },
      { text: "Inspire others with positivity", athleteIds: ["lasso", "lin"] },
      { text: "Challenge conventions and break barriers", athleteIds: ["serena", "rodman"] },
      { text: "Adapt to what the team needs", athleteIds: ["bolt", "honda"] }
    ]
  },
  {
    question: "How do you handle failure?",
    options: [
      { text: "Use it as motivation to prove doubters wrong", athleteIds: ["jordan", "serena"] },
      { text: "Learn from it and move forward with a smile", athleteIds: ["lasso", "lin"] },
      { text: "Analyze what went wrong and innovate", athleteIds: ["honda", "simone"] },
      { text: "Shrug it off and stay true to yourself", athleteIds: ["rodman", "bolt"] }
    ]
  },
  {
    question: "What's most important to you in your career?",
    options: [
      { text: "Breaking records and being the best", athleteIds: ["jordan", "bolt"] },
      { text: "Making a positive impact on others", athleteIds: ["lasso", "lin"] },
      { text: "Expressing yourself authentically", athleteIds: ["rodman", "serena"] },
      { text: "Constantly evolving and innovating", athleteIds: ["simone", "honda"] }
    ]
  },
  {
    question: "How do you respond to criticism?",
    options: [
      { text: "Use it as fuel to work harder", athleteIds: ["jordan", "serena"] },
      { text: "Consider it thoughtfully but stay positive", athleteIds: ["lasso", "lin"] },
      { text: "Ignore it and follow your own path", athleteIds: ["rodman", "bolt"] },
      { text: "Adapt and improve while staying true to yourself", athleteIds: ["simone", "honda"] }
    ]
  },
  {
    question: "What's your approach to teamwork?",
    options: [
      { text: "Demand excellence from yourself and teammates", athleteIds: ["jordan", "serena"] },
      { text: "Build relationships and foster a positive environment", athleteIds: ["lasso", "lin"] },
      { text: "Contribute your unique strengths", athleteIds: ["rodman", "simone"] },
      { text: "Adapt to fill whatever role is needed", athleteIds: ["honda", "bolt"] }
    ]
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [athleteScores, setAthleteScores] = useState({
    serena: 0,
    bolt: 0,
    lasso: 0,
    jordan: 0,
    simone: 0,
    rodman: 0,
    lin: 0,
    honda: 0
  });
  const [resultAthlete, setResultAthlete] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (athleteIds: string[]) => {
    const newScores = { ...athleteScores };
    
    athleteIds.forEach(id => {
      newScores[id as keyof typeof athleteScores] += 1;
    });
    
    setAthleteScores(newScores);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find athlete with highest score
      let maxScore = 0;
      let maxAthlete = "";
      
      Object.entries(newScores).forEach(([athlete, score]) => {
        if (score > maxScore) {
          maxScore = score;
          maxAthlete = athlete;
        }
      });
      
      setResultAthlete(maxAthlete);
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setAthleteScores({
      serena: 0,
      bolt: 0,
      lasso: 0,
      jordan: 0,
      simone: 0,
      rodman: 0,
      lin: 0,
      honda: 0
    });
    setResultAthlete("");
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-lime-custom flex flex-col items-center justify-center p-4 font-delius">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <Trophy className="h-16 w-16 text-teal-custom" />
            </div>
            <h1 className="text-3xl font-bold text-brown-dark mb-4">Athlete Spirit Animal Quiz</h1>
            <p className="text-brown-light mb-8">
              Discover which legendary athlete's spirit you embody! Answer 6 quick questions to find your athletic alter ego.
            </p>
            <button
              onClick={startQuiz}
              className="w-full py-3 px-6 bg-teal-custom hover:bg-opacity-90 text-white font-semibold rounded-lg shadow-md transition duration-200 flex items-center justify-center"
            >
              Start Quiz <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const athlete = athletes[resultAthlete as keyof typeof athletes];
    
    return (
      <div className="min-h-screen bg-lime-custom flex flex-col items-center justify-center p-4 font-delius">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={athlete.image} 
                alt={athlete.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center justify-between mb-4">
                <Trophy className="h-8 w-8 text-teal-custom" />
                <button
                  onClick={restartQuiz}
                  className="flex items-center text-teal-custom hover:text-opacity-80"
                >
                  <RotateCcw className="h-4 w-4 mr-1" /> Retake Quiz
                </button>
              </div>
              
              <h2 className="text-2xl font-bold text-brown-light mb-1">Your Result:</h2>
              <h1 className="text-3xl font-bold text-brown-dark mb-4">
                {athlete.name} – {athlete.nickname}
              </h1>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-brown-light mb-2">Spirit Traits:</h3>
                <ul className="space-y-1">
                  {athlete.traits.map((trait, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-teal-custom rounded-full mr-2"></span>
                      <span className="text-brown-light">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-brown-light mb-2">Quote:</h3>
                <blockquote className="italic text-brown-light border-l-4 border-teal-custom pl-4">
                  "{athlete.quote}"
                </blockquote>
              </div>
              
              <div className="mb-6 bg-lime-custom bg-opacity-30 p-4 rounded-lg">
                <p className="text-brown-light">
                  {athlete.whyMessage}
                </p>
              </div>
              
              <p className="text-brown-light font-medium">
                You are most like <span className="text-teal-custom font-bold">{athlete.name} – {athlete.nickname}</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lime-custom flex flex-col items-center justify-center p-4 font-delius">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-brown-light">Question {currentQuestion + 1} of {questions.length}</h2>
            <div className="flex space-x-1">
              {Array.from({ length: questions.length }).map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-8 rounded-full ${index <= currentQuestion ? 'bg-teal-custom' : 'bg-gray-200'}`}
                ></div>
              ))}
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-brown-dark mb-6">
            {questions[currentQuestion].question}
          </h1>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option.athleteIds)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-lime-custom hover:bg-opacity-30 border border-gray-200 hover:border-teal-custom rounded-lg transition duration-200"
              >
                <span className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-teal-custom bg-opacity-20 text-brown-dark mr-3 font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-brown-light">{option.text}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
