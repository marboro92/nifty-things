const insertCharacterStyles = (str, char) => {
  const tagToInsert = `<span class="text-primary">${char}</span>`
  return str.split(char).join(tagToInsert)
}

const H1 = ({ children, size = 'sm', className = '' }) => {
  const content =
    typeof children === 'string'
      ? insertCharacterStyles(insertCharacterStyles(children, '.'), '?')
      : children

  const sizeClasses = {
    sm: 'text-[2rem]',
    md: 'text-[2.5rem] sm:text-[3rem]',
    lg: 'text-[3rem] md:text-[3.8rem]',
  }
  return (
    <h1
      className={`${sizeClasses[size]} font-bold ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default H1
