import { Card, CardHeader, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Home } from 'react-feather'
import DataTable from 'react-data-table-component'

import DevList from '../db.json'
const devList = DevList

const columns = [
  {
    name: 'NOMBRE',
    selector: row => row.name
  },
  {
    name: 'PROFESION',
    selector: row => row.profession
  },
  {
    name: 'PUESTO',
    selector: row => row.position
  },
  {
    name: 'TECNOLOGIA',
    selector: row => row.technology
  },
  {
    name: 'ACTIONS',
    selector: row => row.actions
  }
]

const Developers = () => {

  return (
    <Card>
      <Breadcrumb listClassName='breadcrumb-chevron'>
        <BreadcrumbItem><a href="#"><Home size={20} /></a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Desarrolladores</BreadcrumbItem>
      </Breadcrumb>

      <CardHeader>
        <CardTitle>Tabla de Desarrolladores 🙌</CardTitle>
        <a href="./add-dev">
          <Button.Ripple color='primary'> + Agregar </Button.Ripple>
        </a>
      </CardHeader>
      <CardBody>
        <DataTable
          columns={columns}
          data={devList.devs}
          selectableRows
          pagination
        />
        {/* <Pagination>
          <PaginationItem className='prev-item'>
            <PaginationLink href='#'></PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem className='next-item'>
            <PaginationLink href='#'></PaginationLink>
          </PaginationItem>
        </Pagination> */}
      </CardBody>
    </Card>
  )
}

export default Developers
