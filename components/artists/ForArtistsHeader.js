import Image from 'next/image'

const ForArtistsHeader = ({ className = '' }) => {
  return (
    <Image
      src="/artists/logo.png"
      layout="fixed"
      height="100px"
      width="100px"
      className={className}
    />
  )
}

export default ForArtistsHeader
