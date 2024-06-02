"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Head from "../[id]/components/head";

function Dashboard() {
  const { data: session } = useSession();
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProgress = async () => {
    const res = await fetch("api/getProgress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session.user.email,
      }),
    });
    const data = await res.json();
    setCourseData(data.userCourses);
    console.log(courseData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (session) {
      console.log(session);
      getProgress();
    }
  }, [session]);

  if (isLoading) {
    return (
      <div className="bg-black w-full h-full flex justify-center items-center">
        <h1 className="text-3xl text-white">Loading...</h1>
      </div>
    );
  } else if (!session) {
    return (
      <div className="bg-black w-full h-full flex justify-center items-center">
        <h1 className="text-3xl text-white">Not logged in</h1>
      </div>
    );
  } else if (courseData.length === 0) {
    return (
      <div className="bg-black w-full h-full  flex justify-center items-center">
        <h1 className="text-3xl text-white">
          You have not enrolled in any courses yet
        </h1>
      </div>
    );
  } else {
    return (
      <div className="bg-black w-full  h-full flex flex-col ">
        <h1 className=" text-white text-4xl p-10">Enrolled Courses -</h1>
        <div className="bg-red w-full flex h-full flex-wrap p-4 pb-10 pr-56 overflow-x-hidden overflow-y-auto ">
          {courseData.map((course, index) => (
            <div
              className="rounded-xl w-[400px] h-[400px] border-gray-500 border m-2 "
              key={index}
            >
              <div className="p-10">
                <h1 className="text-white w-">{course.courseName}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
