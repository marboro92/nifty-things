import Image from 'next/image'
import { VerifiedCreator } from './icons'
import { Label } from './typography'

const Table = ({ children, head }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {head}
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

const Head = ({ children }) => (
  <thead className="bg-base-100">
    <tr className="text-sm">{children}</tr>
  </thead>
)

const HeadCell = ({ children }) => <th>{children}</th>

const Row = ({ children }) => <tr className="text-sm border-b">{children}</tr>

const Cell = ({ children }) => <td>{children}</td>

const UserCell = ({ name, avatarSrc }) => (
  <Cell>
    <div className="flex items-center space-x-1">
      <div className="avatar">
        <div className="mask mask-circle w-3 h-3">
          <img src={avatarSrc} alt={name} />
        </div>
      </div>
      <div>
        <div className="font-bold">{name}</div>
      </div>
    </div>
  </Cell>
)

Table.Cell = Cell
Table.Row = Row
Table.Head = Head
Table.Head.Cell = HeadCell
Table.UserCell = UserCell

export default Table
