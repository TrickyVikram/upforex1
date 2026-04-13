import { Component ,ViewEncapsulation} from '@angular/core';


type DocSlug =
  | 'general-terms'
  | 'client-agreement'
  | 'bonus-terms'
  | 'partnership-agreement'
  | 'complaint-policy'
  | 'confidentiality-policy'
  |'key-facts';

interface LegalDoc {
  slug: DocSlug;
  name: string;
  about: string;
  viewUrl: string;    
  downloadUrl?: string; 
}


@Component({
  selector: 'app-legel-document-pge',
  templateUrl: './legel-document-pge.component.html',
  styleUrls: ['./legel-document-pge.component.scss'],
  encapsulation: ViewEncapsulation.None   // <-- string nahi, enum use karna hai

})




export class LegelDocumentPgeComponent {
docs: LegalDoc[] = [
  {
    slug: 'bonus-terms',
    name: 'Bonus Terms & Conditions',
    about: 'Detailed terms and conditions for claiming and using bonuses on UpForex.',
    viewUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Bonus+Terms+%26+Conditions.pdf',
    downloadUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Bonus+Terms+%26+Conditions.pdf'
  },
  {
    slug: 'client-agreement',
    name: 'Client Agreement',
    about: 'The official agreement outlining rights and obligations between clients and UpForex.',
    viewUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Client+Agreement.pdf',
    downloadUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Client+Agreement.pdf'
  },
  {
    slug: 'complaint-policy',
    name: 'Complaint Handling Policy',
    about: 'Procedures for submitting and resolving complaints with UpForex.',
    viewUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Complaint+Handling+Policy.pdf',
    downloadUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Complaint+Handling+Policy.pdf'
  },
  {
    slug: 'confidentiality-policy',
    name: 'Confidentiality Policy',
    about: 'Our strict confidentiality measures to protect client information.',
    viewUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Confidentiality+Policy.pdf',
    downloadUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Confidentiality+Policy.pdf'
  },
  {
    slug: 'general-terms',
    name: 'General Terms & Conditions',
    about: 'The master terms governing your use of UpForex services.',
    viewUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/General+Terms+%26+Conditions.pdf',
    downloadUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/General+Terms+%26+Conditions.pdf'
  },
  {
    slug: 'key-facts',
    name: 'Key Facts Statement',
    about: 'Essential facts and disclosures all traders must review before trading.',
    viewUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Key+Facts+Statement.pdf',
    downloadUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Key+Facts+Statement.pdf'
  },
  {
    slug: 'partnership-agreement',
    name: 'Partnership Agreement',
    about: 'Agreement outlining partnership terms for introducing brokers and affiliates.',
    viewUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Partnership+Agreement.pdf',
    downloadUrl: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/Legal_Documents/Partnership+Agreement.pdf'
  }
];


  onView(doc: LegalDoc) {
    // console.log('view', doc.slug);
  }
onDownload(doc: LegalDoc) {
  const link = document.createElement('a');
  link.href = doc.downloadUrl || doc.viewUrl;
  link.download = doc.name.replace(/\s/g, '_') + '.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

  openLiveChat() {
    // @ts-ignore
    if (window?.$crisp) { /* example */ (window as any).$crisp.push(['do', 'chat:open']); return; }
    alert('Live chat coming soon.');
  }
}
