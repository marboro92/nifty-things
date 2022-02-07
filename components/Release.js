import { VerifiedArtist } from './icons'
import { Label, Body2 } from './typography'

const Release = ({ title, body, handle, profileImg, className = '' }) => {
  return (
    <div
      class={`card card-bordered card-compact lg:card-normal max-w-[270px] min-h-[300px] ${className}`}
    >
      <figure>
        <img src="http://placeimg.com/400/250/arch" />
      </figure>
      <div class="relative p-3 text-center top-[-50px]">
        <img
          src="https://picsum.photos/id/1005/50/50"
          className="relative rounded-full translate-x-[-50%] left-1/2"
        />
        <Label>
          Adam Shomer <VerifiedArtist className="inline" />
        </Label>
        <label className="block text-primary text-xs text-bold">@A-SHO</label>
        <Body2 className="leading-tight mt-1">
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </Body2>
      </div>
    </div>
  )
}

export default Release
