import User from "../../interfaces/User";

interface Props {
  user: User;
}

type AvatarProps = Props;

const Avatar = (props: AvatarProps) => {
  return (
    <div className="relative h-14 w-14 flex">
      <img
        src={props.user.avatar}
        alt="avatar"
        className="h-12 w-12 rounded-full mx-auto my-auto"
      />
      <h6
        hidden
        className="bg-green-900 py-1 px-2 rounded-xl absolute top-0 left-0 text-white text-xs"
      >
        7
      </h6>
    </div>
  );
};

export default Avatar;
