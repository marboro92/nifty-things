const insertPeriodStyles = (str) => {
  const tagToInsert = `<span class="text-primary">.</span>`
  console.log(str.split('.').join(tagToInsert))
  return str.split('.').join(tagToInsert)
}

const H1 = ({ children }) => {
  const content =
    typeof children === 'string' && children.includes('.')
      ? insertPeriodStyles(children)
      : children
  return (
    <h1
      className="text-[32px] font-bold ml-5 mt-3"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default H1
