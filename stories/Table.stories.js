import Table from '../components/Table'

export default {
  title: 'Components/Table',
  component: Table,
}

const Template = (args) => <Table {...args} />

export const Default = Template.bind({})

Default.args = {
  head: (
    <Table.Head>
      <Table.Head.Cell>Team name</Table.Head.Cell>
      <Table.Head.Cell>Admin</Table.Head.Cell>
      <Table.Head.Cell>Team Type</Table.Head.Cell>
      <Table.Head.Cell>Access Level</Table.Head.Cell>
    </Table.Head>
  ),
  children: (
    <>
      <Table.Row>
        <Table.UserCell
          avatarSrc="https://picsum.photos/id/1002/40/40"
          name="Hart Haggarly"
        />
        <Table.Cell>Joshua</Table.Cell>
        <Table.Cell>Artist</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.UserCell
          avatarSrc="https://picsum.photos/id/1005/40/40"
          name="Chase Carson"
        />
        <Table.Cell>
          <select class="select select-bordered max-w-xs p-half">
            <option disabled selected>
              2 Admins
            </option>
            <option>Jay Carter</option>
            <option>B Yonce</option>
          </select>
        </Table.Cell>
        <Table.Cell>Artist</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.UserCell
          avatarSrc="https://picsum.photos/id/1004/40/40"
          name="Linda Playa"
        />
        <Table.Cell>Not You</Table.Cell>
        <Table.Cell>Artist</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>
    </>
  ),
}
