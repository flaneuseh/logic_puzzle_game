import * as React from 'react';

import FailedConsent from './FailedConsent';

const ConsentViewer =({ consent }) => {
    let [rejected, setRejected] = React.useState(false);
    const docs = "./17-10-07--Consent_Prolific_UnsignedWebBased--2024-05-29-1.png"
    if (!rejected){
      return (
      
        <div className='consent'>
            <div>
            <img src={docs}/>
              <div>
                <button className="consentButtonLeft" onClick={consent}>I Agree</button>
                <button className="consentButtonRight" onClick={() => {setRejected(true)}}>I do not agree</button>
              </div>
            </div>
             
             
        </div>
       )
        ;
    }else{
      return <FailedConsent/> 
    }
   
};

export default ConsentViewer;