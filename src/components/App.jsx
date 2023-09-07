import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";

import user from "../path/user.json";
import data from "../path/data.json";
import friends from "../path/friends.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data}/>
      <FriendList friends={friends}/>
    </div>
  );
};
