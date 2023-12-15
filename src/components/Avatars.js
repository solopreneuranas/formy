import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function Avatars() {
    return (
        <div>
            <AvatarGroup style={{ display: 'flex', justifyContent: 'left' }}>
                <Avatar alt="Remy Sharp" src="https://user-images.trustpilot.com/64bd404b65646500128d137d/73x73.png" style={{ width: 40, height: 40 }} />
                <Avatar alt="Travis Howard" src="https://user-images.trustpilot.com/64afbcb0ce6a6a00121fc18f/73x73.png" style={{ width: 40, height: 40 }} />
                <Avatar alt="Cindy Baker" src="/images/model-1.jpg" style={{ width: 40, height: 40 }} />
                <Avatar alt="Agnes Walker" src="/images/model-2.jpg" style={{ width: 40, height: 40 }} />
            </AvatarGroup>
        </div>
    )
}