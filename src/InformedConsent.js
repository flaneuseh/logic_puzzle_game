import * as React from 'react';
import { RenderPage, RenderPageProps, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';


import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import FailedConsent from './FailedConsent';

const ConsentViewer =({ consent }) => {
    let [rejected, setRejected] = React.useState(false);
    const docs = [
        { uri: "./17-10-07--Consent_Online_UnsignedWebBased--2021-04-08.pdf" }, // Local File
      ];

    if (!rejected){
      return (
      
        <div className='consent'>
            <div>
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
            </div>
             
             <button onClick={consent}>I Agree</button>
             <button onClick={() => {setRejected(true)}}>I do not agree</button>
        </div>
       )
        ;
    }else{
      return <FailedConsent/> 
    }
   
};

export default ConsentViewer;