// TeamCard.js
import React from 'react';

const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <img src={member.avatar} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.position}</p>
      <p>{member.description}</p>

      <div className="social-media-links">
        {member.socialMedia && member.socialMedia.length > 0 && (
          <ul>
            {member.socialMedia.map((social, index) => (
              <li key={index}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
