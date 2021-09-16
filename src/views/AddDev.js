import {
  Card, CardHeader, CardBody, CardTitle,
  Breadcrumb, BreadcrumbItem,
  Form, InputGroup, InputGroupAddon, InputGroupText, Input, Button,
  Col, Row, FormGroup, Label
} from 'reactstrap'
import { Home } from 'react-feather'

import Select from 'react-select'
import { selectThemeColors } from '@utils'


import useDevPositions from '../utility/hooks/useDevPositions'
import useDevTechs from '../utility/hooks/useDevTechs'

const POSITIONS_API = 'http://localhost:3005/positions/'
const TECHS_API = 'http://localhost:3006/techs/'

const AddDev = () => {
  const devPositions = useDevPositions(POSITIONS_API)
  const devTechs = useDevTechs(TECHS_API)

  return (
    <Card>
      <Breadcrumb listClassName='breadcrumb-chevron'>
        <BreadcrumbItem><a href="#"><Home size={20} /></a></BreadcrumbItem>
        <BreadcrumbItem><a href="./home">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="./devs">Desarrolladores</a></BreadcrumbItem>
        <BreadcrumbItem active>Agregar</BreadcrumbItem>
      </Breadcrumb>

      <CardHeader>
        <CardTitle>Agregar nuevo desarrollador</CardTitle>
      </CardHeader>
      <CardBody>
        <Form method="POST" action="#">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="dev-name">Nombre</Label>
                <Input type="text" name="dev-name" id="dev-name" placeholder="Nombre" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="profession">Profesión</Label>
                <Input type="text" name="profession" id="profession" placeholder="Profesión" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="position">Puesto</Label>
                <Select options={devPositions} className='react-select' classNamePrefix='select' theme={selectThemeColors} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="technology">Tecnología</Label>
                <Select options={devTechs} className='react-select' classNamePrefix='select' theme={selectThemeColors} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <a href="./devs">
                <Button type="button" color='primary'>Cancelar</Button>
              </a>
            </Col>
            <Col md={6}>
              <Button.Ripple type="submit" color='primary'>Agregar</Button.Ripple>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default AddDev