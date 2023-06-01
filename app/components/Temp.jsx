"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const dataArray=[
    {
        "id": "HGov5h9SgS",
        "type": "paragraph",
        "data": {
            "text": "<i>How many times </i>have you heard your developer colleagues screaming ….&nbsp;"
        }
    },
    {
        "id": "0Tr2RYqluP",
        "type": "paragraph",
        "data": {
            "text": "<b>“React is fast but it often makes development slower”?</b>"
        }
    },
    {
        "id": "kn_Vr49zhN",
        "type": "paragraph",
        "data": {
            "text": "5, 10, 100 or maybe 1000 times! Right?"
        }
    },
    {
        "id": "_B2N6fwwDk",
        "type": "paragraph",
        "data": {
            "text": "Well, I am not joking or ranting about the framework. I am here to tell you the&nbsp;<b>TRUTH</b>."
        }
    },
    {
        "id": "7ano_hB4q3",
        "type": "paragraph",
        "data": {
            "text": "The truth that most developers found hard to&nbsp;<b>AGREE&nbsp;</b>upon."
        }
    },
    {
        "id": "v4LK7EG-gt",
        "type": "header",
        "data": {
            "text": "The truth about DOM you need to know about",
            "level": 1
        }
    },
    {
        "id": "d15Z1D_4T1",
        "type": "paragraph",
        "data": {
            "text": "DOM manipulation is the heart of the so-called modern and interactive web development. Unfortunately, it’s very slow in carrying out the operations. Even <b>MORE </b>slower than typical Javascript operations."
        }
    },
    {
        "id": "0wvhciOxGe",
        "type": "paragraph",
        "data": {
            "text": "The slowness which I am talking about is even made WORSE by the fact that most Javascript frameworks are known to update the DOM un-necessarily and more often than needed."
        }
    },
    {
        "id": "uw-r0E5x9U",
        "type": "paragraph",
        "data": {
            "text": "For an instance, let’s say you have an E-commerce application that showcases a list of ten items. You checked-off the first item and find out that the list has been REBUILT. Now, that’s 10 TIMES more work than necessary!"
        }
    },
    {
        "id": "7ATyHPZ8XD",
        "type": "header",
        "data": {
            "text": "Enters the Virtual DOM - React",
            "level": 1
        }
    },
    {
        "id": "a70WD6KJRM",
        "type": "header",
        "data": {
            "text": "In React, for every DOM, you have a corresponding object of VIRTUAL DOM which resembles like a lightweight copy of the original DOM object.",
            "level": 3
        }
    },
    {
        "id": "HQ4jrER6cs",
        "type": "paragraph",
        "data": {
            "text": "Both DOM object and Virtual DOM object have similar properties with a smaller difference of capitalizing what to update."
        }
    },
    {
        "id": "HAzz2qRNGO",
        "type": "image",
        "data": {
            "url": "https://res.cloudinary.com/practicaldev/image/fetch/s--J9wNdiZT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/o3qwv6w8yjfyag866gni.png",
            "caption": "What you can write about it",
            "withBorder": false,
            "withBackground": false,
            "stretched": false
        }
    }
];



const Temp = () => {
    // const reactElement=React.createElement("p",{className:''},dataArray[0].data.text)
    const [jsx, setJsx] = useState([]);
    // console.log(reactElement)
    useEffect(()=>{
        dataArray.map((e) => {
            switch (e.type) {
                case 'paragraph':
                setJsx((jsx) => {
                    return [...jsx, (React.createElement("p", { dangerouslySetInnerHTML: { __html: e.data.text },className:"text-justify" }))];
                });
                break;

                case 'image':
                setJsx((jsx) => {
                    return [...jsx, (React.createElement("img", { src: e.data.url, alt: e.data.caption }))];
                });
                break;
                case 'header':
                    switch (e.data.level) {
                        case 1:
                          setJsx((jsx) => {
                            return [...jsx, (React.createElement("h1", { dangerouslySetInnerHTML: { __html: e.data.text }, className: "text-3xl font-bold" }))];
                          });
                          break;
                        case 2:
                          setJsx((jsx) => {
                            return [...jsx, (React.createElement("h2", { dangerouslySetInnerHTML: { __html: e.data.text }, className: "text-2xl font-bold" }))];
                          });
                          break;
                        case 3:
                          setJsx((jsx) => {
                            return [...jsx, (React.createElement("h3", { dangerouslySetInnerHTML: { __html: e.data.text }, className: "text-lg font-bold" }))];
                          });
                          break;
                      }
                break;

                default:
                console.log("hello world");
                break;
            }
            });
        console.log(jsx)
    },[])

  return (
    <>
    <h1>Hello</h1>
    {jsx.map((e)=>{
        return e;
    })}
    </>

  )
}

export default Temp