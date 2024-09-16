import * as React from 'react';
import { RenderPage, RenderPageProps, Viewer } from '@react-pdf-viewer/core';
import {addSubject } from './Firestore/sendData';


import '@react-pdf-viewer/core/lib/styles/index.css';


import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import FailedConsent from './FailedConsent';

const ConsentViewer =({ consent, path }) => {


 

  React.useEffect(() =>  {setTimeout(() => {
    addSubject(path)
  }, 10)}, [])



    let isProlific = path == "prolific"

  

    let [rejected, setRejected] = React.useState(false);
    const docs_pro = [
        { uri: "./linked1.pdf" }, // to consent 1 
      ];

      const docs_not_pro = [
        { uri: "./linked2.pdf" }, // Lto consent 2
      ];

    if (!rejected){
      return (
      
        <div className='consent'>
            <div>
            <DocViewer documents={isProlific?  docs_pro : docs_not_pro} pluginRenderers={DocViewerRenderers} />
            </div>
             
        </div>
       )
        ;
      }else{
        return <FailedConsent/> 
      }

};

export default ConsentViewer;