import React, { useState, useEffect } from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'
import "./Chat.scss";

const supabase = createClient('https://hyjkqodxeienwesmnalj.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5amtxb2R4ZWllbndlc21uYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDY5MzYsImV4cCI6MjAyNTk4MjkzNn0.pQeTd7zxmI8U67FUYepdZF4NWicXecjAZ2-GvQMgMoc')

export const Chat = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessages()
  }, [])

  async function fetchMessages() {
    let { data: messages, error } = await supabase
      .from('messages')
      .select('*')
      .order('id', { ascending: true }) // Changed to ascending order to show messages in chronological order

    if (error) console.log('Error: ', error)
    else setMessages(messages)
  }

  async function sendMessage() {
    if (newMessage.trim().length === 0) return
    let { data: message, error } = await supabase
      .from('messages')
      .insert([{ content: newMessage }])
      .single()

    if (error) console.log('Error: ', error)
    else {
      setNewMessage('') // Esto asegura que newMessage nunca se establezca en undefined
      fetchMessages() // Vuelve a buscar los mensajes después de enviar un nuevo mensaje
    }
  }

  return (
    <div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
      <ol>
        {messages.map((message, index) =>
          message ? <li key={index}>{message.content}</li> : null
        )}
      </ol>
    </div>
  )
}
