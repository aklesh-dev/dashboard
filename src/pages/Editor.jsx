import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, Toolbar, RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components';

const Editor = () => {
  return (
    <div className='m-2 md:m-10 p-2 mt-24 md:p-10 rounded-3xl bg-white'>
      <Header
        category='App'
        title='Editor'
      />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
        <EditorData/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor