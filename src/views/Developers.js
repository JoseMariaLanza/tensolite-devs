import { Card, CardHeader, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Home } from 'react-feather'
import DataTable from 'react-data-table-component'
import useDevList from '../utility/hooks/useDevList'

// Este código comentado corresponde a un archivo que simula la base de datos.
// Fué reemplazado por la API hecha en Laravel
// import DevList from '../db.json'
// const devList = DevList

// El archivo devList.json fué usado también en principio con json-server para simular una API

// Obteniendo desarrolladores desde API hecha en Laravel
const DEVS_API = 'http://sitenso.test/api/v1/developers'

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
  const devList = useDevList(DEVS_API)
  console.log(devList)

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
          data={devList.data}
          selectableRows
          pagination
          paginationPerPage="3"
        />
      </CardBody>
    </Card>
  )
}

export default Developers
