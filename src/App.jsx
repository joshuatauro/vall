import React, { useEffect, useState } from "react";
import { Masonry } from "masonic";
import { motion } from "motion/react"
import ReactModal from "react-modal";

const transition = {
  duration: 0.5,
  delay: 0.5,
  ease: "easeInOut",

}
export default function Home() {
  const [hearts] = useState([
    { top: '5%', left: '5%' },
    { top: '10%', left: '15%' },
    { top: '20%', left: '45%' },
    { top: '30%', left: '25%' },
    { top: '40%', left: '10%' },
    { top: '50%', left: '80%' },
    { top: '60%', left: '35%' },
    { top: '70%', left: '90%' },
    { top: '80%', left: '40%' },
    { top: '5%', left: '90%' },
    { top: '15%', left: '60%' },
    { top: '25%', left: '80%' },
    { top: '15%', left: '35%' },
    { top: '45%', left: '70%' },
    { top: '55%', left: '25%' },
    { top: '65%', left: '50%' },
    { top: '75%', left: '80%' },
    { top: '85%', left: '10%' },
    { top: '95%', left: '50%' },
    { top: '10%', left: '80%' },
    { top: '30%', left: '95%' },
    { top: '50%', left: '15%' },
    { top: '60%', left: '75%' },
    { top: '70%', left: '20%' },
    { top: '80%', left: '65%' },
    { top: '90%', left: '30%' },
  ]);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    
  };

  const [clickedYes, hasClickedYes] = useState(false);

  // loop through an array of length 21
  const [images] = useState(Array.from({ length: 33 }, (_, index) => ({
    id: index,
    name: `Image ${index + 1}`,
    src: `/${index + 1}.jpeg`
  })));

  // Generate random animation delays
  const [animationDelays, setAnimationDelays] = useState([]);


  useEffect(() => {
    const delays = hearts.map(() => `${Math.random() * 5}s`);
    setAnimationDelays(delays);
  }, [hearts]);
  return (
    <div className=" bg-[#FFE4E1] text-[#D72638] pb-20">
      <div className="min-h-screen flex items-center justify-center flex-col">
        <motion.div initial={{opacity: 0}} transition={transition} animate={{opacity: 1}} className="text-center">
          <h1 className="text-7xl font-cute mb-10">Heyyy my</h1>
          <h1 className="text-5xl font-cute">
            Princess, Baby, Kuchupuchu, Cutu, Everthing 
          </h1>
        </motion.div>
      </div>
      
      <div className="w-3/4 mx-auto items-center justify-center flex mb-20">
        <p  className="text-3xl font-cute bg-[#D72638] text-white px-5 py-7 rounded-2xl text-center leading-relaxed">Hey my beautiful princess, I may not know alot of things, ok, maybe not "may not know", ig it should be "i do not know" alot of things, but ek cheez aati hai merko and thats ye, coding karna, so I made this as a way to remind you of just how extremely important you are to me </p>
      </div>
      <Masonry items={images} render={FakeCard} columnCount={5} columnGutter={5}/>
      {hearts.map((heart, index) => (
        <div
        key={index}
        className="heart"
        style={{
          top: heart.top,
          left: heart.left,
          animationDelay: animationDelays[index] || '0s', // Apply the random delay
          }}
        >
          💖
        </div>
      ))}
      <div className="w-3/4 mx-auto items-center justify-center flex mt-20">
          <p  className="text-3xl font-cute bg-[#D72638] text-white px-5 py-7 rounded-2xl text-center leading-relaxed">And this is a small sample of my gallery, pura phone ka storage kha jati ho tum, 2 bite khaake pet bhar jayega par iska, huh, cutu ekdum. <br /> <br /> Happy Valentines day my beautiful princess, i love you so so so so so so so much <br /><br/> We have so so many places to visit, so many trips that i've got planned for us, itne saare restaurants, oops, cafe's that we have to go to, tumhari aestits photo lena seekhna hai merko, damn bhai, itne saare cheezein hai karne ko, and itne saare cheezein krli hai hum dono ne <br/> <br/> hehe my favourite is still you sleeping in my arms (ik irl its me ekdum wo cat wale sticker ki tarah sona, but let it be cute and delulu for now)</p>
      </div>
      <div className="w-3/4 mx-auto items-center justify-center flex flex-col mt-20 z-50">
          <p className="text-2xl font-cute bg-[#D72638] text-white px-5 py-7 rounded-2xl text-center leading-relaxed">I could go on and on forever about this, you know what? i will, so princess, read all of this

            <br/><br/>

            I'll forever be grateful to Google bhai, for because of them I brought a Pixel, and uske wajah se you asked me ki <i>oooo konsa phone lu</i> (haww, and leli tu wo phone, was that your plan all along? ki phone ke saat dil bhi churana ka plan tha, cutu ekdum ho tum, kuchupuchu)

            <br/>

            Anyways, it started from something as simple as asking about Taylor Swift ka eras tour movie (abtak ni ja payi lololol), who wouldve ever thought, itna simple sa question would lead to us talking for hours and hours, and then days and days, and then weeks and weeks, and then months and months, and then years and years, and then forever and forever :)

            <br/><br/>

            We went from talking about Taylor Swift to talking about our lives, our dreams, our fears, our insecurities, our love, our future, our past, our present, our everything, and I wouldn't have it any other way <br /> I still love the day (day? night) we spent sending each other screenshots of lyrics that we feel so reletable, so so reletable, Daylight will forever be OUR song, hamare saamne toh Taylor and Travis are nothing
          
            <br/><br/>
          
          Everytime I talk to you (read as - "Whole day") I feel happy, i feel good, and everytime we have to cut the call, i wish i could have more time, kuch bhi bakwas kardu mai so that we can talk more, and then i remember, we have our so so so much more time, a lifetime full of it, to talk, to be with each other, to love each other, to be there for each other. 

          <br/><br/>


          The way you smile, and blush is so goddamn fucking cute ki I literally took a break while making this website to go stare at videos i have of you being an absolute cutu, bc i genuinely spent 20mins doing that and didnt even realise it, muu tod dunga tera ekdum, oh ya btw, you called me a total of 6 times while i was working on this, and i paused the work, went over to the bed and talked to you while absolute blushing and giggling inside thinking of you reading this later, fuck how badly i wish i can just tell you right now. bhak.
          
          <br/><br/>
          
          I cant wait to see the beautiful and independent woman you're going to turn out to be (kyunki merko tumhare paiso pe palna hai, but shhhhh), mera saara finance tum sambhaalogi (i mean, hamara) (sorry i mean tumhara, jo bhi mera hai wo tera hai, and jo tera hai, wo bhi tumhara hai, protein powder dilati rehna bas hehe), but yes kuchu, i cant wait for you to grow in your career and achieve everything you want, all those goals, all of them. Ghar khaareedna, Paurshyaaaa khareedna, all of it. And ill be there waiting for you while you achieve all of this, cheering you on every step, kissing you all the time, being there for you through it all 
          
          <br/><br/>

          Thank you for everything you've done, for being you, for being there, for being so cutu, for talking to me for hours and hours on end, i want both of us to grow together into amazing human beings, apne parents ko proud karne wale, apne parents ke har sapne ko pura karne wale, khudke har sapne ko pura karne wale, i want to roam Greece with you, Greece? I want to go to Italy, France, Bali, Maldives, Japan, South Korea, and so many more places with you, i want to eat at all the cafes in the world with you, i want to kiss you under every single star in the world, i obviously want to kiss you under the Eiffel tower (yaad hai? bhayaaaaaa)
          
          <br/><br/>
          
          I love opening my galley and the only thing being you (merko extra storage khareedne ka paisa de), but yes princess, having you all over my life is something i never wouldve imagined (chy, you kiss that same chomu joshua that you met at the cat cafe, chy bhai, could never be me, chy), but here we are, and i wouldnt have it any other way. 
          
          </p>
      </div>

      <YesNoSection setClickedYes={hasClickedYes} />

     
      <ReactModal closeTimeoutMS={1000}
        isOpen={clickedYes}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => hasClickedYes(false)}
        style={customStyles}
        contentLabel="Yay letsgo"
      >
        <div className="text-center text-base p-5 text-white font-cute">
          <h1>I love you too princess, thank you for saying yes</h1>
          <h1>How does Pizza 4P's at 5:30 on 14th February 2025 sound like?</h1>
        </div>
      </ReactModal>
    </div>
  );
}
const FakeCard = ({ data: { id, name, src } }) => (
  <motion.div transition={transition} initial={{opacity: 0}} animate={{opacity: 1}} className={"card"}>
    <img className={"h-full w-full "} alt="kuchu" src={src} />
  </motion.div>
);


const  YesNoSection = ({ setClickedYes }) => {
  const [noPosition, setNoPosition] = useState({ top: "100%", left: "50%", transform: "translateX(-50%)" });



  const moveNoButton = () => {


    const newTop = Math.random() * 80 + 10; // Keeps it within bounds
    const newLeft = Math.random() * 80 + 10;
    setNoPosition({ top: `${newTop}%`, left: `${newLeft}%`, transform: "none" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 relative font-cute">
      <h2 className="text-4xl font-semibold text-red-500 pt-8 pb-3 px-3 rounded-md">So Princess? Will you be my Valentines?</h2>
      <div className="relative w-full flex flex-col items-center">
        <button onClick={() => setClickedYes(true)} className="px-6 pt-7 pb-3 bg-green-500 text-white text-3xl rounded-lg">Yes, i would loveeee to</button>
        <button
          className="px-4 pt-5 pb-1 mt-5 bg-red-500 text-white rounded-lg absolute"
          style={{ top: noPosition.top, left: noPosition.left, transform: noPosition.transform, position: "absolute" }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
}
