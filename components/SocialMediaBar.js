import { Discord, Facebook, Instagram, Twitter } from './icons'

const SocialMediaBar = ({
  facebookLink,
  twitterLink,
  instagramLink,
  discordLink,
}) => (
  <div className="flex text-neutral-400 space-x-1">
    <a href={facebookLink} className="hover:text-primary">
      <Facebook />
    </a>
    <a href={twitterLink} className="hover:text-primary">
      <Twitter />
    </a>
    <a href={instagramLink} className="hover:text-primary">
      <Instagram />
    </a>
    <a href={discordLink} className="hover:text-primary">
      <Discord />
    </a>
  </div>
)

export default SocialMediaBar
