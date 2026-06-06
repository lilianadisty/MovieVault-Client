import { useEffect, useRef, useState } from "react";

import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function ChatWidget() {
  const [showChat, setShowChat] = useState(false);
  const [users, setUsers] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    socket.on("message", (arg) => {
      console.log(arg);
    });

    socket.auth = {
      username: localStorage.email,
      token: localStorage.access_token,
    };
    // socket.connect();
    socket.disconnect().connect();

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    socket.on("users:online", (newUsers) => {
      setUsers(newUsers);
      // console.log("users", users);
    });

    socket.on("messages:info", (message) => {
      console.log(message);
      setMessages((prevMessages) => {
        return [...prevMessages, message];
      });
    });

    return () => {
      socket.off("users:online");
      socket.off("messages:info");
    };
  }, []);

  const handleSend = (e) => {
    if (!newMessage.trim()) return;

    socket.emit("messages:new", {
      from: localStorage.email,
      message: newMessage,
    });

    setNewMessage("");
    // e.preventDefault();
  };
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const getAlias = (email) => {
    return email.split("@")[0];
  };

  return (
    <>
      {/* Tombol Chat */}
      <button
        className="btn btn-danger rounded-circle position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          zIndex: 1050,
        }}
        onClick={() => setShowChat(!showChat)}
      >
        💬
      </button>

      {showChat && (
        <div
          className="position-fixed bg-white shadow d-flex flex-column"
          style={{
            bottom: "90px",
            right: "20px",
            width: "600px",
            height: "450px",
            borderRadius: "12px",
            zIndex: 1050,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            className="d-flex justify-content-between align-items-center p-3 text-white"
            style={{
              backgroundColor: "#991b1b",
            }}
          >
            <div>
              <h6 className="m-0">Live Chat</h6>
              <small>{users.length} online</small>
            </div>

            <button
              className="btn btn-sm btn-light"
              onClick={() => setShowChat(false)}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div
            className="d-flex flex-grow-1"
            style={{
              minHeight: 0,
            }}
          >
            {/* Online Users */}
            <div
              className="border-end bg-white"
              style={{
                width: "20%",
                overflowY: "auto",
              }}
            >
              <div className="p-2 border-bottom">
                <small className="fw-bold">Online ({users.length})</small>
              </div>

              {users.map((u) => (
                <div key={u.id} className="p-2 border-bottom text-center">
                  <div
                    className="bg-success rounded-circle mx-auto mb-1"
                    style={{
                      width: "8px",
                      height: "8px",
                    }}
                  />

                  <small className="d-block text-truncate" title={u.username}>
                    {u.username}
                  </small>
                </div>
              ))}
            </div>

            {/* Chat Messages =======================*/}
            <div
              id="chats"
              className="p-3"
              style={{
                width: "80%",
                overflowY: "auto",
                background: "#fafafa",
              }}
            >
              <div className="mb-2">
                <span className="badge bg-warning">
                  Be Respectful and follow community guidelines!
                </span>
              </div>
              {messages.map((el, index) => {
                return el.from !== localStorage.email ? (
                  <div
                    key={index}
                    className="d-flex justify-content-start w-100 mb-3"
                  >
                    <div style={{ maxWidth: "70%" }}>
                      <div
                        className="text-muted small mb-1"
                        style={{
                          overflowWrap: "break-word",
                        }}
                      >
                        {getAlias(el.from)}
                      </div>

                      <div className="bg-primary text-white px-3 py-2 rounded-4">
                        {el.message}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="d-flex justify-content-end w-100 mb-3"
                  >
                    <div style={{ maxWidth: "70%" }}>
                      <div
                        className="text-end text-muted small mb-1"
                        style={{
                          overflowWrap: "break-word",
                        }}
                      >
                        {getAlias(el.from)}
                      </div>

                      <div className="bg-danger text-white px-3 py-2 rounded-4">
                        {el.message}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div ref={chatEndRef} />
              {/* CHAT MESSAGE 2 =================================== */}
            </div>
          </div>

          {/* Input */}
          <div
            className="border-top p-2 bg-white"
            style={{
              flexShrink: 0,
            }}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend(e);
                  }
                }}
              />

              <button className="btn btn-danger" onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
