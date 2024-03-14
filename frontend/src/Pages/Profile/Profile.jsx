import React, { useState, useEffect } from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { createClient } from '@supabase/supabase-js'

import { useNavigate } from "react-router-dom";
import "./Profile.scss";

export const Profile = () => {
  const navigate = useNavigate()
  let userId = localStorage.getItem('userId');

  const supabase = createClient('https://hyjkqodxeienwesmnalj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5amtxb2R4ZWllbndlc21uYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDY5MzYsImV4cCI6MjAyNTk4MjkzNn0.pQeTd7zxmI8U67FUYepdZF4NWicXecjAZ2-GvQMgMoc')

  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      let { data: userData, error } = await supabase
        .from('users')
        .select('name, last_name, phone_number, description')
        .eq('auth_id', userId)
        .single();

      if (error) console.log("Error fetching user data: ", error);
      else {
        let { data: authData, error: authError } = await supabase
          .from('auth.users')
          .select('email')
          .eq('id', userId)
          .single();

        if (authError) console.log("Error fetching auth data: ", authError);
        else {
          userData.email = authData.email;
          setUserProfile(userData);
        }
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <>
      <div className="top">
        <IoIosArrowBack className="icon" onClick={() => navigate("/Choose", { state: { userId: userId } })} />
      </div>
      <NavBar></NavBar>
      <div className="profile-info">
        <h2>{userProfile.name} {userProfile.last_name}</h2>
        <p>{userProfile.description}</p>
        <p>{userProfile.phone_number}</p>
        <p>{userProfile.email}</p>
      </div>
    </>
  );
};
