import { useEffect, useState } from 'react'
import Hello from './assets/hello.gif'
import Tell from './assets/tell.gif'
import Gru from './assets/gru.gif'
import Gru1 from './assets/gru1.png'
import Banana from './assets/banana.gif'
import Dance1 from './assets/dance2.gif'
import Dance2 from './assets/dance2.png'
import Music from './assets/music.png'
import Banana1 from './assets/banana1.png'
import Food from './assets/eat1.gif'
import NewCloths from './assets/newCloths1.gif'
import Party from './assets/party.gif'
import Alert from './assets/alert.png'
import Birthday from './assets/birthday.png'
import BParty from './assets/bparty.png'
import Enjoy from './assets/enjoy.png'
import Hugs from './assets/hugs.png'
import Close from './assets/close.png'
import './App.css'
import React from 'react';


function App() {
  const dix = {
    'init' : [<>
                <Button text={'Hello'} onClick={()=>{setDisplayText('');setImage(Tell); setMessage(' I want to tell you something VERY SPECIAL!! But I dont know how I should tell.'); setButtons(dix['hello'])}} />
                <Button text={'Whatever'} onClick={()=>{setDisplayText('');setImage(Gru); setMessage(' See! See! I told Jeet, No one Gonna Like this wirdo type of Invites'); setButtons(dix['skipEverything'])}} />
              </>],

    'hello' : [<>
                <Button text={'I know. its BANANA correct?'} onClick={()=>{setDisplayText('');setImage(Banana); setMessage(' True MINION FAN.....BANANA, but its not that....'); setButtons(dix['banana'])}} />
                <Button text={'If you are not able to tell directly, give me some hints atleast'} onClick={()=>{setDisplayText('');setImage(Dance1); setMessage(' I want to Dance Like a MAD with you ALL....'); setButtons([dix['newCloths']])}} />
              </>],

    'skipEverything' : [<Button text={'Show me the Invitation'} onClick={()=>{setFlag(false)}} />],

    'banana': [<Button text={'Back'} onClick={()=>{setDisplayText('');setImage(Tell); setMessage('Its Something Else...'); setButtons(dix['dance'])}} />],

    'dance' : [<>
                  <Button text={'I know. its BANANA correct?'} onClick={()=>{setDisplayText('');setImage(Banana); setMessage(' True MINION FAN.....BANANA, but its not that....'); setButtons(dix['banana'])}} />
                  <Button text={'If you are not able to tell directly, give me some hints atleast'} onClick={()=>{setDisplayText('');setImage(Dance1); setMessage(' I want to Dance Like a MAD with you ALL....'); setButtons([dix['newCloths']])}} />
                </>],

    'newCloths' : [<>
                    <Button text={'Then Dance, Why You are telling Me?'} onClick={()=>{setDisplayText('');setImage(NewCloths); setMessage(' Oh! Let me give you another one...I want to Try Out My new Cloths with ALL of YOU....'); setButtons(dix['dinner'])}} />
                    <Button text={'I Know what do you mean by that......'} onClick={()=>{setFlag(false)}} />
                  </>],
    
    'dinner' : [<>
                  <Button text={'I am still Not Getting...'} onClick={()=>{setDisplayText('');setImage(Food); setMessage(' Ok, Let me Try Again, I want to Enjoy DELICIAS FOOD with all of you GUYS...'); setButtons(dix['invite'])}} />
                  <Button text={'I Know what do you mean by that......'} onClick={()=>{setFlag(false)}} />
                </>],

    'invite' : [<>
      <Button text={'Nahh.....still Not Getting...'} onClick={()=>{setDisplayText('');setImage(Party); setMessage(' Its a Birthday Party Invitation From Jeet....'); setButtons(dix['party'])}} />
      <Button text={'I Know what do you mean by that......'} onClick={()=>{setFlag(false)}} />
    </>],

    'party' : [<>
      <Button text={'Yay....Show Me the Invite...'} onClick={()=>{setDisplayText('');setImage(''); setMessage(' '); setFlag(false)}}/>
    </>],
    
    
  }
  const [message, setMessage] = useState('Beyya !! Bello !!!');
  const [displayText, setDisplayText] = useState('');
  const [image, setImage] = useState(Hello);
  const [buttons, setButtons] = useState(dix['init']);
  const [flag, setFlag] = useState(true);

  

  return (
    <>
    {(flag) && <>
    <div style={{width:'100vw', display:'flex', justifyContent:'end'}}>
      <div style={{margin:'10px'}}>
        <Button text={'Skip Everything'} onClick={()=>setFlag(false)}/>
      </div>
    </div>
    <div style={{display:'flex', justifyContent:'center', width:'100vw', height:'40vw', maxWidth:'100vw', alignItems:'end'}}>
      <div>
        <Dialogue text={message} displayText={displayText} setDisplayText={setDisplayText} />
      </div>
    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'40vh', width:'100vw'}}>
      <div>
        <img style={{height:'200px', borderRadius:'20px'}} src={image} />
      </div>
    </div>
    <div style={{display:'flex', justifyContent:'center', height:'30vh', width:'100vw', alignItems:'start'}}>
      <div>
        {buttons}
      </div>
    </div>
    </>
    }
    {
      (!flag) && <>
        <div style={{width:'82vw',
                    border:'2px solid black',
                    fontSize:'23px', 
                    textAlign:'justify', 
                    color: '#3E3E3E',
                    padding: '10px 20px',
                    margin: '5px',
                    borderRadius: '15px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s',
                    boxShadow: '3px 3px 0 #3E3E3E',
                    position: 'relative',
                    overflowY:'scroll'}}>
        
        <div style={{position:'absolute', margin:'10px', top:'0px', right:'0px'}}><img style={{height:'35px', cursor:'pointer'}} src={"data:image/png;base64,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"} onClick={()=>window.location.reload()} /></div>

          Banana Alert! <img style={{height:'25px'}} src={Alert} />
          <br />
          <br />
          Hey Folks,
          <br />
          <br />
          Jeet’s birthday is coming up <img style={{height:'25px'}} src={Birthday} />, and He is throwing a party <img style={{height:'25px'}} src={BParty} /> that’ll make even Gru jealous! <img style={{height:'25px'}} src={Gru1} />
          <br />
          <br />
          There’ll be epic dancing <img style={{height:'25px'}} src={Dance2} />, music <img style={{height:'25px'}} src={Music} /> so loud it’ll shake your goggles off, and a dinner so tasty you’ll forget all about bananas <img style={{height:'25px'}} src={Banana1} />.
          <br />
          <br />
          Join us for a night of fun, laughs, and total minion madness! <img style={{height:'25px'}} src={Enjoy} />
          <br />
          <br />
          Date :-  <span style={{}}><u>17-09-2024</u></span>
          <br />
          <br />
          See you there!
          <br />
          <br />
          Minion Hugs, 
          <br />
          <img style={{height:'150px'}} src={Hugs} />
          <hr />
          <br />
          <div style={{position:'absolute', bottom:'5px' ,width:'82vw', display:'flex', justifyContent:'space-around'}}>
            <a href='https://www.google.com/maps/place/Hydra+Club+%26+Kitchen/@12.9349152,77.6119675,16.98z/data=!4m6!3m5!1s0x3bae1500712c3999:0x6686e6f303c74e5c!8m2!3d12.9346828!4d77.6145827!16s%2Fg%2F11y2ncptq0?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D'>
              <div>
                <img style={{height:'25px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2Wv0rDUBSHvyxqF4ud1Ih7R/EJ9BUEZ7W7OJmi+Dq6SA24KL6BIv4BoS4q6CIuLRX/gKIEbiAE6zn35jYufvCDkHDOBzcnh8A//akBK0AMtIFnk+R6D1gGxvBIBdgEusCXkA6wYWoKMQkcK4T5nAHTrtIp4MFBmuYeCG2lFeC0gDTNCTBiI97yIE3T1EprykHSpqOd9oZHaZoljTgWmrwD62bik0Tm3m81LY34WmiSiPJEQk1bI+4JTSZ+qBkXanoa8ZvQJDnePKFQ86IR3zkcdVOoudWIW4rhiiyHa1cjXhzA57SgEQ8DTx6lj8AQShplL4+UADjyID0wvawYBS4KSK+K/JGEwKWD9LzP925FFdi3kMbmtLwQAGvAq7CdVl3eqYa62UJ56Y15NlBmgc+M9AOYoSR2MuJtSmQ+I54rUxwAh64L4k/5Bk2pcY91HooZAAAAAElFTkSuQmCC" />
              </div>
            </a>
          </div>
        </div>

        
      </>
    }
    
    </>
  )
}

function Dialogue({ text = '', typingSpeed = 100, displayText, setDisplayText }) {
  
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!text) {
      setIsTypingComplete(true);
      return;
    }

    let index = 0;
    let timer;

    const typeText = () => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
        timer = setTimeout(typeText, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };

    typeText();

    return () => clearTimeout(timer);
  }, [text, typingSpeed]); // Added back to dependency array for proper updates

  return (
    <div style={{
      backgroundColor: '#FFE135',
      color: '#3E3E3E',
      border: '5px solid #3E3E3E',
      padding: '10px 20px',
      margin: '5px',
      borderRadius: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '3px 3px 0 #3E3E3E',
      textAlign: 'center',
      minHeight: '1.2em', 
      maxWidth: '80vw',     
      whiteSpace: 'pre-wrap',  
      wordWrap: 'break-word'
    }}>
      {displayText}
      {!isTypingComplete && <span className="cursor">|</span>}
    </div>
  );
}

// CSS for the cursor
const styles = `
  .cursor {
    border-left: 2px solid #3E3E3E;
    animation: blink 0.7s steps(1) infinite;
  }

  @keyframes blink {
    50% { border-color: transparent; }
  }
`;

export function DialogueWithStyles({ text, typingSpeed }) {
  return (
    <>
      <style>{styles}</style>
      <Dialogue text={text} typingSpeed={typingSpeed} />
    </>
  );
}
function Button({text, onClick}){

  return(
    <>
      <div style={{backgroundColor: '#3E3E3E', color: '#FFE135', border: 'none', padding: '15px 25px', margin: '5px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', textAlign:'center'}} onClick={onClick}>{text}</div>
    </>
  )
}

export default App
