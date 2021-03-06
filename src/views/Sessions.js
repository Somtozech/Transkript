import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SessionsPage(props) {
  const [sessions, setSessions] = useState([]);
  // const latestSessions = useRef(null);

  useEffect(() => {
    setSessions(window.getSessions());
    // latestSessions.current = sessions;
  }, []);

  return (
    <div className="padded-more sessions">
      <ul className="list-group">
        <li className="list-group-header">
          <h3>ALL AVAILABLE SESSIONS</h3>
        </li>
        {Object.keys(sessions).map((session, i) => {
          return (
            <li className="list-group-item" key={i}>
              <p>
                <Link to={`/session/${session}/upload`} style={{ flex: 1 }}>
                  {session} session
                </Link>
                <span
                  class="icon icon-trash"
                  onClick={e => {
                    window.deleteSession(session);
                    setSessions(window.getSessions());
                  }}
                />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SessionsPage;
