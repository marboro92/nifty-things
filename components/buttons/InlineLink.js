import Link from 'next/link'

const InlineLink = ({
  as: Tag = 'a',
  href = '/',
  children,
  className = '',
  ...props
}) => {
  return (
    <Link href={href} passHref={Tag === 'a'}>
      <Tag className={`text-inherit underline ${className}`} {...props}>
        {children}
      </Tag>
    </Link>
  )
}

export default InlineLink
