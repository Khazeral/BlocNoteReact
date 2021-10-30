import Showdown from 'showdown';
import React from 'react';

export default function NoteDisplay(props){

    const converter = new Showdown.Converter()

    const content = converter.makeHtml(props.textToDisplay);

    const createMarkup = () => {
        return {__html: content}
    }

    return(
        <div>
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
    )

}