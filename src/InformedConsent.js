import * as React from 'react';
import { RenderPage, RenderPageProps, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';


import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import FailedConsent from './FailedConsent';

const ConsentViewer =({ consent }) => {
    let [rejected, setRejected] = React.useState(false);
    const docs = [
        { uri: "./Consent_linked.pdf" }, // Local File
      ];

    if (!rejected){
      return (
      
        <div className='consent'>
            <div>
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
            </div>
             
        </div>
       )
        ;
    }else{
      return <FailedConsent/> 
    }
   
};

export default ConsentViewer;