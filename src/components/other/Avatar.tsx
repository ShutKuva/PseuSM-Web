import { twMerge } from "tailwind-merge";
import User from "../../interfaces/User";

interface AvatarProps {
  user: User;
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const {
    user: { avatarReference },
    className,
  } = props;

  return (
    <div className={twMerge("relative h-9 w-9 flex", className)}>
      <img
        src={avatarReference}
        alt="avatar"
        className="h-9 w-9 rounded-full mx-auto my-auto"
      />
      <h6
        hidden
        className="bg-green-600 py-1 px-2 rounded-xl absolute top-0 left-0 text-white text-xs"
      >
        7
      </h6>
    </div>
  );
};

export default Avatar;
