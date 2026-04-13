import { AngularEditorConfig } from '@kolkov/angular-editor';
import { TableColumn } from 'src/app/common/data-table/data-table.component';

export const columns: TableColumn[] = [
  {
    key: 'title',
    name: 'Title',
  },
  {
    key: 'metaTitle',
    name: 'Meta Title',
  },
  {
    key: 'description',
    name: 'Description',
  },
  {
    key: 'content',
    name: 'Content',
  },
  // {
  //   key: 'imageUrl',
  //   name: 'Image',
  //   type: 'image',
  // },
  // {
  //   key: 'videoUrl',
  //   name: 'Video',
  //   type: 'video',
  // },
  {
    key: 'textField',
    name: 'Text Field',
  },
  {
    key: 'categories',
    name: 'Categories',
  },
  {
    key: 'tags',
    name: 'Tags',
  },
  {
    key: 'actions',
    name: 'Actions',
    actions: [
      {
        name: 'Edit',
        icon: 'matEdit',
        class: 'btn-outline-primary',
      },
      {
        name: 'Delete',
        icon: 'matDelete',
        class: 'btn-outline-danger',
      },
    ],
  },
];
export interface MediaValue {
  previewUrl: string;
  urlToDelete: string;
  urlToStoreInDB: string;
  file: File | null;
}

export const editorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '100',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [
    { class: 'arial', name: 'Arial' },
    { class: 'times-new-roman', name: 'Times New Roman' },
    { class: 'calibri', name: 'Calibri' },
    { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    {
      class: 'montserrat',
      name: 'Montserrat',
    },
  ],
  customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText',
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  sanitize: false,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [['insertImage', 'insertVideo']],
};
export type MediaTypes = 'image' | 'video' | 'featuredImage';
export type MediaFile = Record<MediaTypes, MediaValue>;
export const MediaFiles: MediaFile = {
  image: {
    previewUrl: '',
    urlToDelete: '',
    urlToStoreInDB: '',
    file: null,
  },
  video: {
    previewUrl: '',
    urlToDelete: '',
    urlToStoreInDB: '',
    file: null,
  },
  featuredImage: {
    previewUrl: '',
    urlToDelete: '',
    urlToStoreInDB: '',
    file: null,
  }
};

