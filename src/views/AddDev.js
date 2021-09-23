import { useState } from 'react'
import {
  Card, CardHeader, CardBody, CardTitle,
  Breadcrumb, BreadcrumbItem,
  Form, InputGroup, InputGroupAddon, InputGroupText, Input, Button,
  Col, Row, FormGroup, Label
} from 'reactstrap'
import { useForm } from 'react-hook-form'
import { Home } from 'react-feather'

import Select from 'react-select'
import { selectThemeColors } from '@utils'

import DevList from '../db.json'
const devList = DevList

import useDevPositions from '../utility/hooks/useDevPositions'
import useDevTechs from '../utility/hooks/useDevTechs'

import { v4 as uuidv4 } from 'uuid'
import { data } from 'jquery'

// Los archivos devPositions.json y devTechs.json se usan con json-server para simular una API
// pero están "adaptados" para poder usarlos directamente por el componente Select
const POSITIONS_API = 'http://localhost:3004/positions/'
const TECHS_API = 'http://localhost:3005/techs/'

const AddDev = () => {
  const devPositions = useDevPositions(POSITIONS_API)
  const devTechs = useDevTechs(TECHS_API)

  // state
  const [devs, setDevs] = useState(devList)

  // Agregar desarrolladores
  const addDev = (dev) => {
    dev.id = uuidv4()
    setDevs([
      ...devs,
      dev
    ], [])
  }

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {

  }

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Nombre</Label>
                <input className="form-control" type="text" name="name" id="name" placeholder="Nombre" ref={
                  register({
                    required: { value: true, message: 'Este campo es obligatorio' }
                  })
                } />
                <div>
                  {errors?.name?.message}
                </div>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="profession">Profesión</Label>
                <input className="form-control" type="text" name="profession" id="profession" placeholder="Profesión" ref={
                  register({
                    required: { value: true, message: 'Este campo es obligatorio' }
                  })
                } />
                <div>
                  {errors?.profession?.message}
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="position">Puesto</Label>
                <Select name="position" options={devPositions} className='react-select' classNamePrefix='select' theme={selectThemeColors} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="technology">Tecnología</Label>
                <Select name="technology" options={devTechs} className='react-select' classNamePrefix='select' theme={selectThemeColors} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
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