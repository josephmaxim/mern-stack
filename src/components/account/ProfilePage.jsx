import React from 'react';

export default function ProfilePage(props) {
  const { match } = props;
  return (
    <div>
      Profile Page: {match.params.id}
    </div>
  );
}
