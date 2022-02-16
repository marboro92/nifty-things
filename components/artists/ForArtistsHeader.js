const ForArtistsHeader = ({ className = '' }) => {
  return (
    <h1 className={`sm:text-[24px] ${className}`}>
      <span className="font-bold">NiftyTunes</span> for Artists
      <span className="text-primary">.</span>
    </h1>
  )
}

export default ForArtistsHeader
