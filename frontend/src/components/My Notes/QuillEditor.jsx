import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';``
import 'quill/dist/quill.bubble.css'
import './Notes.css';


const QuillEditor = () => {
    const quillRef = useRef(null);
    const editorRef = useRef(null);

    const newContent = {
        "ops": [
            {
                "attributes": {
                    "font": "serif"
                },
                "insert": "This is a new card."
            },
            {
                "attributes": {
                    "header": 1
                },
                "insert": "\n"
            },
            {
                "insert": "Unleash your creativity.\n"
            }
        ]
    }

    const [mode, setMode] = useState("edit");
    const [cards, setCards] = useState([newContent]);
    const [currentCard, setCurrentCard] = useState(0);

    var toolbarOptions = [
        ['bold', 'italic', 'underline'],        // toggled buttons
        ['blockquote', 'code-block', 'link'],
        ['image'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    function changeMode() {
        const quill = editorRef.current;
        let toolbar = document.querySelector('.ql-snow.ql-toolbar');

        if (mode === "edit") {
            setMode("read");
            if (editorRef.current) {
                quill.enable(false);
                toolbar.style.opacity = 0;
            }
        } else {
            setMode("edit");
            toolbar.style.opacity = 1;
            quill.enable();
        }
    }

    function editorChangeEve() {
        const quill = editorRef.current;
        var delta  = quill.getContents();

        console.log("delta: ", delta);
    }

    function saveCard() {
        const quill = editorRef.current;
        var delta  = quill.getContents();

        cards[currentCard] = delta;
    }

    function nextCard() {
        saveCard();

        if (currentCard < cards.length - 1) {
            setCurrentCard(currentCard + 1);
            editorRef.current.setContents(cards[currentCard + 1]);
        }
    }

    function prevCard() {
        saveCard();

        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
            editorRef.current.setContents(cards[currentCard - 1]);
        }
    }

    function addNewCard() {
        const newCards = [...cards];
        newCards.splice(currentCard + 1, 0, newContent);
        setCards(newCards);
        console.log(cards);
    }

    useEffect(() => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current, {
                modules: {
                    toolbar: toolbarOptions
                },
                theme: 'snow',
                placeholder: 'Write something...',
            });

            editorRef.current = quill;

            quill.on('editor-change', () => console.log("lol something changed"));

            quill.on('selection-change', function (range, oldRange, source) {
                if (range) {
                    if (range.length == 0) {
                        console.log('User cursor is on', range.index);
                    } else {
                        var text = quill.getText(range.index, range.length);
                        console.log('User has highlighted', text);
                    }
                } else {
                    console.log('Cursor not in the editor');
                }
            });
        }

        return () => {
            quillRef.current = null;
            editorRef.current = null;
        };
    }, []);

    return (
        <div>
            <div ref={quillRef} id='editor'></div>

            <div className="flex flex-row flex-nowrap justify-between">
                <button
                    type="button"
                    className="border-yellow-400"
                    onClick={prevCard}
                >
                    <span className="text-2xl" aria-hidden="true">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                            />
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>

                <div>
                    <button className = "bg-red-800" onClick={addNewCard} >Add card</button>
                    <button className = "bg-green-800" onClick={changeMode}>{mode === 'edit' ? "Read Mode" : "Edit Mode"}</button>
                </div>

                <button
                    type="button"
                    className="border-yellow-400"
                    onClick={nextCard}
                >
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </span>
                </button>
            </div>

            <div className="flex flex-row flex-nowrap justify-between">
                <p>{currentCard + 1} / {cards.length}</p>
            </div>

        </div>
    );
};

export default QuillEditor;
