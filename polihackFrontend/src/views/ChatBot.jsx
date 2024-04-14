import React, { useEffect } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import "./Chatbot.css";



export const ChatBot = (props) => {
    const [messege, setMessege] = React.useState("");
    const [animation, setAnimation] = React.useState(false);
    const [bookmarks1, setBookmarks1] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [bookmarks, setBookmarks] = React.useState([
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
        // "dfsgdfgdvcxbfhagshf gafdkasudyqwgudgkj asgfhghjfgyugewyfgywg eygcshdgfhsdhfsjdhfjsdg fjgsdhfghsdgfhsgd hfgsdhgfhsd",
    ]);

    const [chats, setChats] = React.useState([
        // {
        //     message: "Hello",
        //     sent: false
        // }, {
        //     message: "Hi",
        //     sent: true
        // }, {
        //     message: "Hi",
        //     sent: true
        // }, {
        //     message: "Hi4312i4658734656387465783467856378465783648756378465782637846187269836812739`8163781265478578243567836478567834675634785687346756347865387465",
        //     sent: false
        // }, {
        //     message: "Hi4312i4658734656387465783467856378465783648756378465782637846187269836812739`8163781265478578243567836478567834675634785687346756347865387465",
        //     sent: false
        // }, {
        //     message: "Hi4312i4658734656387465783467856378465783648756378465782637846187269836812739`8163781265478578243567836478567834675634785687346756347865387465",
        //     sent: false
        // }, {
        //     message: "Hi",
        //     sent: true
        // }, {
        //     message: "Hi",
        //     sent: true
        // }
    ]);
    
    const scrollRef = React.useRef(null);
    function changeMessege(event) {
        setMessege(event.target.value);
    }
    const BouncingDotsLoader = (props) => {
        console.log("merge")
        return (
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
        );
        
      };
    const sendMessage = (event) => {
        console.log(event)
        if (event.target.value !== "" && event.key === 'Enter' && animation === false) {
            setAnimation(true);
            console.log(process.env.REACT_APP_OPENAI_AUTH_KEY)
            // setTimeout(() => {
            //     setAnimation(false);
            // }, 2000);
            axios.post("https://api.openai.com/v1/threads/thread_Q7KDDPxke5rUmQZKBjEc0mCZ/messages",
                {
                    role: "user",
                    content: "based on the resources " + event.target.value
                },
                {
                    headers: {
                        'Authorization': 'Bearer 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',
                        'OpenAI-Beta': 'assistants=v1'

                    }
                }
            ).then((response) => {
                let { data, status } = response;
                console.log("first post:" + data + " " + status)
                setTimeout(function () {
                    axios.post("https://api.openai.com/v1/threads/thread_Q7KDDPxke5rUmQZKBjEc0mCZ/runs",
                        {
                            "assistant_id": "asst_GOQn2lRexPxUltjhw9vnPLUD"
                        },
                        {
                            headers: {
                                'Authorization': 'Bearer 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',
                                'OpenAI-Beta': 'assistants=v1'
                            }
                        }
                    ).then((response) => {
                        let { data, status } = response;
                        console.log("second post:" + data + " " + status)
                        let run_id 
                        let fgsf = "Gdfgdfg"
                        if(status === 400){
                            run_id = data.error.message.slice(65, 99)

                        }
                        else{
                            run_id = data.id
                        }

                        console.log("https://api.openai.com/v1/threads/thread_Q7KDDPxke5rUmQZKBjEc0mCZ/runs/" + run_id + "/steps")
                        setTimeout(function () {
                            axios.get("https://api.openai.com/v1/threads/thread_Q7KDDPxke5rUmQZKBjEc0mCZ/runs/" + run_id + "/steps",
                                {
                                    headers: {
                                        'Authorization': 'Bearer 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',
                                        'OpenAI-Beta': 'assistants=v1'
                                    }
                                }
                            ).then((response) => {
                                let { data, status } = response;

                                let step_id = data.data[0].id
                                console.log("https://api.openai.com/v1/threads/thread_Q7KDDPxke5rUmQZKBjEc0mCZ/runs/" + run_id + "/steps/" + step_id)
                                axios.get("https://api.openai.com/v1/threads/thread_Q7KDDPxke5rUmQZKBjEc0mCZ/runs/" + run_id + "/steps/" + step_id,
                                    {
                                        headers: {
                                            'Authorization': 'Bearer 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',
                                            'OpenAI-Beta': 'assistants=v1'
                                        }
                                    }
                                ).then((response) => {
                                    let { data, status } = response;
                                    console.log("fourth get:" + data + " " + status)
                                    //console.log("FIFTH get:" + data + " " + status + " costs " + data.usage.total_tokens)
                                    setTimeout(() => {
                                    axios.get("https://api.openai.com/v1/threads/thread_Q7KDDPxke5rUmQZKBjEc0mCZ/messages",
                                        {
                                            headers: {
                                                'Authorization': 'Bearer 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',
                                                'OpenAI-Beta': 'assistants=v1'
                                            }
                                        }
                                    ).then((response) => {
                                        let { data, status } = response;
                                            setTimeout(() => {
                                            console.log(data)
                                            console.log("fifth get:" + " " + status)
                                            setChats([...chats, { message: event.target.value, sent: true, id:chats.length }, { message: data.data[0].content[0].text.value, sent: false, id:chats.length + 1 }])
                                            
                                            event.target.value = ''
                                            setAnimation(false);
                                        } , 200);

                                    }).catch((error) => {
                                        console.log(error)
                                        setAnimation(false);
                                    });
                                } , 500);

                                }).catch((error) => {
                                    console.log(error)
                                    setAnimation(false);
                                });

                            }).catch((error) => {
                                console.log(error)
                                setAnimation(false);
                            });
                        }, 500);
                    }).catch((error) => {
                        console.log(error)
                        setAnimation(false);
                    });
                }, 500);
            }).catch((error) => {
                console.log(error)
                setAnimation(false);
            });
        }
    }

    const addBookmark = (event, message) => {
        axios.post("http://192.168.35.185:8080/Bookmarks/InsertData",
        {
            answer: message,
            email: localStorage.getItem("email")
        }
        ).then((response) => {
            const { data, status } = response;
            if(status === 200){
                setBookmarks([...bookmarks, {answer:message, id:"B" + bookmarks.length}]);
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    const removeBookmark = (event, message, bookmarkID) => {
        console.log(bookmarkID);
            axios.post("http://192.168.35.185:8080/Bookmarks/deleteData",
        {
            answer: message,
            email: localStorage.getItem("email")
        }
        ).then((response) => {
            const { data, status } = response;
            if(status === 200){
                // console.log(bookmarkID);
                // const element = document.getElementById(bookmarkID.toString());  
                // element.style.style.setProperty("display", "none","important");
             // element.remove();
           

              
                const newList = (bookmarks.filter((bookmark) => bookmark.id !== bookmarkID));
                setBookmarks(newList);
              
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        axios.post("http://192.168.35.185:8080/Bookmarks/GetData",
        {
            email: localStorage.getItem("email")
        }
        ).then((response) => {
            const { data, status } = response;
            if(status === 200){
                let a = [];
                for( let i = 0; i < data.length; i++){
                    a = [...a, {answer:data[i].answer, id:"B" + i}]
                }
                setBookmarks(a);
            }
        }).catch((error) => {
            console.log(error)
        });
    }, [])


    return (<>
        
        <div className="mainContainer">
            <div className="history">
            <TextField variant="filled" className="searchBar" placeholder="Search..." onChange={(e) => {setSearch(e.target.value)}}></TextField>
                <ul style={{paddingTop:'3%'}}>
                    {bookmarks.map((bookmark) => {
                        if(bookmark.answer.includes(search) || search === "")
                            return <li key={bookmark.id} style={{display:"innherit"}}><button onClick={(event) => {removeBookmark(event, bookmark.answer, bookmark.id)}}>❌</button>{"  " + bookmark.id + " " + bookmark.answer}</li>
                    })          
                    }
                </ul>
            </div>
        <div className="messageWindow">
            <div className="chatBox" >
                <div ref={scrollRef} className="scroll" >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                            chats.map((chat) => {
                                return chat.sent ?
                                    <div id={chat.id} style={{ width: '100%' }}>
                                        <div className="chatMsg" >
                                            {chat.id + ". " + chat.message}
                                        </div>
                                    </div>
                                    :
                                    <div id={chat.id} style={{ width: '100%' }}>
                                        <div className="typeInput" >
                                            <button onClick={(event) => {addBookmark(event, chat.message)}}>📑</button>
                                            {chat.id + ". " + chat.message}
                                        </div>

                                    </div>
                            })
                        }
                       {animation && <BouncingDotsLoader/>}
                    </div>

                </div>
              <div className="controls"> 
                    <TextField onKeyDown={sendMessage} placeholder="Message..." sx={{ width: '100%',border: 1 ,backgroundColor:"#9bedff" }}></TextField>
                    {/* <button className="buttonSend" onClick={sendMessage}>Ask</button> */}
                </div>
            </div>
</div>
        </div>


    </>)
}

export default ChatBot