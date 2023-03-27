import React, { useEffect, useState } from "react";
import OneSession from "./oneSession";
import { TSession } from "../../types/TSesssion.type";

export default function RandomSession() {
  const [sessions, setSessions] = useState<TSession[]>([]);
  const [randomSession, setRandomSession] = useState<TSession | null>(null);

  useEffect(() => {
    const options = { method: "GET", headers: { "Content-Type": "application/json" } };
    fetch(`http://localhost:3000/api/sessions`, options)
      .then((response) => response.json())
      .then((response) => {

        setSessions(response[Math.floor(Math.random() * response.length)+1]);
      })
      .catch((err) => console.error(err));
  }, []);

  /* useEffect(() => {
    if (sessions.length > 0) {
      const randomIndex = Math.floor(Math.random() * sessions.length);
      setRandomSession(sessions[randomIndex]);
    }
  }, [sessions]); */

  return (
    <div>
      {randomSession && (
        <OneSession sessionId={randomSession.id} trainingId={randomSession.training.id} />

      )}
    </div>
  );
}
