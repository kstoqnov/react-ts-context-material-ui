import * as React from 'react'
import { TodoContext } from '../context/todoContext'
import { Box, Button, Input, FormLabel } from '@material-ui/core';

const AddTodo: React.FC = () => {

  const { saveTodo } = React.useContext(TodoContext) as ContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault()
    saveTodo(formData)
  }

  return (
    <Box 
      component="form"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        background: "#fff",
        marginBottom: "1rem",
        "& div": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& input": {
          background: "#f5f6f7",
          padding: "0.3rem",
          display: "block",
          margin: "0.3rem",
          outline: "none",
        },
        "& button": {
          background: "#099dff",
          color: "#fff",
        },
      }}
    >
      <Box component="div">
          <Box component="div">
            <FormLabel> Title </FormLabel>
            <Input onChange={handleForm} type='text' name="title" id='title' />
          </Box>

          <Box component="div">
            <FormLabel> Description </FormLabel>
            <Input onChange={handleForm} type='text' name="description" id='description' />
          </Box>
          
      </Box>
      <Button 
        disabled={formData === undefined ? true : false}
        onClick={(e) => handleSaveTodo(e, formData)}
      > 
        Add Todo 
      </Button>
  </Box>
  )
}

export default AddTodo;