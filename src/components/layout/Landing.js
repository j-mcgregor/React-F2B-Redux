import React from 'react';
import Parallax from 'react-rellax';

export default () => {
  return (
    <div className="landing container-fluid p-0 text-center">
      <h1 className="display-4 text-left p-5">React</h1>
      <Parallax percentage={1.35} speed={10} style={{borderTop:'1px solid #F6D8AE'}}></Parallax>
      <h1 className="display-5 text-right p-5">Redux</h1>
      <Parallax percentage={1.35} speed={15} style={{borderTop:'2px solid #F6D8AE'}}></Parallax>
      <Parallax className="display-4-5 text-center p-5">Unsplash API</Parallax>
      <Parallax percentage={1.35} speed={15} style={{marginTop:'10px',borderTop:'2px solid #F6D8AE'}}></Parallax>
      <Parallax percentage={1.35} speed={10} className="display-4 text-left p-5">SASS</Parallax>
      <Parallax percentage={1} speed={6} className="display-5 text-right p-5">Bootstrap 4</Parallax>
      <Parallax percentage={0} speed={4} className="display-4 text-center p-5">JSONPlaceholder</Parallax>
      <Parallax percentage={1} speed={9} className="display-5 text-center p-5">original tutorial by <a href="" target="_blank">Travery Media</a></Parallax>
      <Parallax percentage={2} speed={3} className="display-5 text-right p-5">See my  <a href="" target="_blank">React-Context</a> example</Parallax>
      <Parallax percentage={1.3} speed={6} className="display-5 text-left p-5">Or my <a href="" target="_blank">Github</a></Parallax>
      <Parallax percentage={1.15} speed={15} style={{marginTop:'15px',borderTop:'5px solid #F6D8AE'}}></Parallax>
      <Parallax className="display-3 text-center p-5">Jack McGregor</Parallax>
    </div>
  )
}
