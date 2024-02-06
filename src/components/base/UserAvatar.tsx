import Image from "next/image";

import { type AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps extends AvatarProps {
  user: {
    name: string | null;
    image: string | null;
  }
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image
            fill
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only ">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
